/**
 * Checks markdown files for common mistakes.
 *
 * Current checks:
 * - H1 headings (# ...): the H1 is already generated from the `title` field
 *   in the frontmatter, so adding a `#` heading manually creates a duplicate.
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
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const H1_MESSAGE =
  'The page title H1 is already generated from the `title` field in the frontmatter. ' +
  'If this heading duplicates the title, remove it. ' +
  'If it is a different heading, change it to an H2 using `##`.'

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
    const lines = readFileSync(filePath, 'utf8').split('\n')
    for (let i = 0; i < lines.length; i++) {
      if (/^# /.test(lines[i])) {
        mistakes.push({ path: filePath, line: i + 1, message: H1_MESSAGE })
      }
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
  const diff = execSync(`git diff ${baseRef}...HEAD`, { encoding: 'utf8' })
  const mistakes = []
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
      // Added line that is an H1 (single `#` followed by a space)
      if (/^\+# /.test(rawLine)) {
        mistakes.push({
          path: currentFile,
          line: lineNumber,
          message: H1_MESSAGE
        })
      }
    } else if (!rawLine.startsWith('-')) {
      // Context line -- still advances the new-file line number
      lineNumber++
    }
    // Deleted lines ('-') do not advance the new-file line number
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
