/**
 * Checks markdown files for common mistakes.
 *
 * Current checks:
 * - H1 headings (# ...): the H1 is already generated from the `title` field
 *   in the frontmatter, so adding a `#` heading manually creates a duplicate.
 * - Absolute URLs to the published site: links beginning with
 *   https://design-history.prevention-services.nhs.uk/ should use
 *   relative URLs instead, so that they work in previews and in case the URL
 *   changes in future.
 * - Italics (*text* or _text_): against the NHS style guide, and the NHS
 *   frontend does not include an italic font.
 *
 * When run directly, scans all markdown files under app/:
 *   npm run check:markdown
 *
 * Exports `getMistakes(baseRef)` for use by the PR review script, which
 * checks only lines newly added in a pull request diff.
 *
 * Exits with code 1 if any mistakes are found.
 */

import { execSync } from 'child_process'
import { existsSync, readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import MarkdownIt from 'markdown-it'
import markdownItFootnote from 'markdown-it-footnote'

/**
 * Checks if a line contains an H1 heading.
 *
 * @param {string} line
 * @returns {{ message: string } | null}
 */
function checkH1Heading(line) {
  const message =
    'The page title H1 is already generated from the `title` field in the frontmatter. ' +
    'If this heading duplicates the title, remove it. ' +
    'If it is a different heading, change it to an H2 using `##`.'

  if (/^# /.test(line)) {
    return { message }
  }
  return null
}

/**
 * Checks if a line contains an absolute URL to the published site.
 *
 * @param {string} line
 * @returns {{ message: string, suggestion?: string } | null}
 */
function checkAbsoluteUrl(line) {
  const siteUrlRe =
    /(https?:\/\/)?design-history\.prevention-services\.nhs\.uk\//gi

  const message =
    'Use a relative URL instead of a full URL for links to other posts on the site.\n\n' +
    'This means that the links will work in previews, and in case the site domain name changes in future.\n\n' +
    'For example, replace `https://design-history.prevention-services.nhs.uk/some/path/` with `/some/path/`.'

  if (siteUrlRe.test(line)) {
    return {
      message,
      suggestion: line.replaceAll(siteUrlRe, '/')
    }
  }
  return null
}

const italicsMessage =
  'Do not use italics. The [NHS content style guide](https://service-manual.nhs.uk/content/formatting#bold-italics-and-underlining) ' +
  'says not to use them, and they will appear as plain text within the site.\n\n' +
  'Instead, use other ways to emphasise words or phrases, for example by front-loading sentences, ' +
  'using headings or bullets, or using words like "important". ' +
  'You can also use bold (`**text**`), but sparingly.'

const markdown = new MarkdownIt().use(markdownItFootnote)

/**
 * Finds italic (emphasis) text by parsing the whole document, so that code
 * blocks, inline code and multi-line emphasis are handled correctly.
 *
 * @param {string} text - full contents of a markdown file
 * @returns {{ line: number, message: string }[]} one entry per line with italics
 */
function checkItalics(text) {
  // Blank out frontmatter (keeping the lines) so it is not parsed as markdown
  const source = text.replace(
    /^---\r?\n[\s\S]*?\r?\n---[ \t]*(?=\r?\n|$)/,
    (m) => m.replace(/[^\n]/g, '')
  )

  const lines = new Set()

  for (const token of markdown.parse(source, {})) {
    if (token.type !== 'inline' || !token.map) continue

    let line = token.map[0]
    for (const child of token.children) {
      if (child.type === 'softbreak' || child.type === 'hardbreak') line++
      if (child.type === 'em_open') lines.add(line + 1)
    }
  }

  return [...lines].map((line) => ({ line, message: italicsMessage }))
}

const checks = [checkH1Heading, checkAbsoluteUrl]

/**
 * Runs all checks against a single line and returns any mistakes found.
 *
 * @param {string} line
 * @returns {{ message: string, suggestion?: string }[]}
 */
function checkLine(line) {
  return checks.flatMap((check) => {
    const result = check(line)
    return result ? [result] : []
  })
}

/**
 * Recursively finds all .md files under the given directory.
 *
 * @param {string} dir
 * @returns {string[]}
 */
function findMarkdownFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) return findMarkdownFiles(fullPath)
    if (entry.isFile() && entry.name.endsWith('.md')) return [fullPath]
    return []
  })
}

/**
 * Scans all markdown files under app/ and returns mistakes.
 *
 * @returns {{ path: string, line: number, message: string }[]}
 */
export function scanAllFiles() {
  const files = findMarkdownFiles('app')

  const mistakes = []

  for (const filePath of files) {
    const text = readFileSync(filePath, 'utf8')
    const lines = text.split('\n')
    for (let i = 0; i < lines.length; i++) {
      for (const result of checkLine(lines[i])) {
        mistakes.push({ path: filePath, line: i + 1, ...result })
      }
    }
    for (const result of checkItalics(text)) {
      mistakes.push({ path: filePath, ...result })
    }
  }

  return mistakes
}

/**
 * Returns mistakes found only in lines newly added in a pull request diff.
 * Used by the PR review script to post inline comments on changed lines only.
 *
 * @param {string} baseRef - git ref to diff against, e.g. 'origin/main'
 * @returns {{ path: string, line: number, message: string }[]}
 */
export function getMistakes(baseRef) {
  // Reject unexpected characters to prevent shell command injection
  if (!/^[\w\/.\-]+$/.test(baseRef)) {
    throw new Error(`Invalid baseRef: ${baseRef}`)
  }
  const diff = execSync(`git diff ${baseRef}...HEAD`, { encoding: 'utf8' })
  const mistakes = []
  const addedLines = new Map()
  let currentFile = null
  let lineNumber = 0

  for (const rawLine of diff.split('\n')) {
    // e.g. "diff --git a/app/test.md b/app/test.md"
    const diffFileMatch = rawLine.match(/^diff --git a\/.+ b\/(.+)$/)
    if (diffFileMatch) {
      currentFile = diffFileMatch[1].endsWith('.md') ? diffFileMatch[1] : null
      lineNumber = 0
      continue
    }

    if (!currentFile) continue

    // e.g. "@@ -3,5 +7,8 @@ layout: page"
    const hunkMatch = rawLine.match(/^@@ -\d+(?:,\d+)? \+(\d+)/)
    if (hunkMatch) {
      lineNumber = parseInt(hunkMatch[1]) - 1
      continue
    }

    // Skip the old/new file header lines
    if (rawLine.startsWith('---') || rawLine.startsWith('+++')) continue

    if (rawLine.startsWith('+')) {
      lineNumber++
      if (!addedLines.has(currentFile)) addedLines.set(currentFile, new Set())
      addedLines.get(currentFile).add(lineNumber)
      const lineContent = rawLine.slice(1)
      for (const result of checkLine(lineContent)) {
        mistakes.push({ path: currentFile, line: lineNumber, ...result })
      }
    } else if (!rawLine.startsWith('-')) {
      // Context line -- still advances the new-file line number
      lineNumber++
    }
    // Deleted lines ('-') do not advance the new-file line number
  }

  // Italics need the whole document to be parsed, so check each changed file
  // and keep only results on lines added in the diff
  for (const [path, added] of addedLines) {
    if (!path.startsWith('app/') || !existsSync(path)) continue
    for (const result of checkItalics(readFileSync(path, 'utf8'))) {
      if (added.has(result.line)) mistakes.push({ path, ...result })
    }
  }

  return mistakes
}

// Run locally when invoked directly ----------------------------------------

const isMain = process.argv[1] === fileURLToPath(import.meta.url)

if (isMain) {
  const mistakes = scanAllFiles()

  if (mistakes.length === 0) {
    console.log('No markdown issues found.')
    process.exit(0)
  }

  for (const { path, line, message } of mistakes) {
    console.warn(`${path}:${line}: ${message}`)
  }

  process.exit(1)
}
