/**
 * GitHub Actions script: posts inline PR review comments for any markdown
 * mistakes found by check-markdown.mjs.
 *
 * - Posts a REQUEST_CHANGES review with one inline comment per new mistake.
 * - Deletes comments that no longer apply (e.g. the line was fixed or the
 *   file was deleted).
 * - Dismisses any previous REQUEST_CHANGES reviews when no mistakes remain.
 * - Exits with code 1 if mistakes are found, so the CI check fails.
 *
 * Required environment variables (set automatically by the workflow):
 *   GITHUB_TOKEN, REPO, PR_NUMBER, HEAD_SHA, BASE_REF
 */

import { getMistakes } from './check-markdown.mjs'

const { GITHUB_TOKEN, REPO, BASE_REF, PR_NUMBER, HEAD_SHA } = process.env

const BOT_USER = 'github-actions[bot]'

async function githubFetch(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers
    }
  })
  return response
}

const mistakes = getMistakes(`origin/${BASE_REF}`)

// Fetch existing review comments posted by the bot
const commentsResponse = await githubFetch(
  `/repos/${REPO}/pulls/${PR_NUMBER}/comments?per_page=100`
)
if (!commentsResponse.ok) {
  console.error(
    'Failed to fetch existing comments:',
    await commentsResponse.text()
  )
  process.exit(1)
}
const existingComments = await commentsResponse.json()
// Normalise comments: `line` is null for outdated diff comments, fall back to `original_line`
const botComments = existingComments
  .filter((c) => c.user.login === BOT_USER)
  .map((c) => ({ ...c, line: c.line ?? c.original_line }))

// Resolve threads for comments that no longer have a matching mistake
// (line was fixed or file was deleted)
const staleComments = botComments.filter(
  (c) =>
    !mistakes.some(
      (m) => m.path === c.path && m.line === c.line && m.message === c.body
    )
)

for (const comment of staleComments) {
  console.log(`Deleting resolved comment on ${comment.path}:${comment.line}`)
  const deleteResponse = await githubFetch(
    `/repos/${REPO}/pulls/comments/${comment.id}`,
    { method: 'DELETE' }
  )
  if (!deleteResponse.ok) {
    console.error('Failed to delete comment:', await deleteResponse.text())
  }
}

// If there are no mistakes, dismiss any outstanding REQUEST_CHANGES reviews
// and exit cleanly so the CI check passes
if (mistakes.length === 0) {
  const reviewsResponse = await githubFetch(
    `/repos/${REPO}/pulls/${PR_NUMBER}/reviews?per_page=100`
  )
  if (!reviewsResponse.ok) {
    console.error('Failed to fetch reviews:', await reviewsResponse.text())
    process.exit(1)
  }
  const reviews = await reviewsResponse.json()
  const pendingReviews = reviews.filter(
    (r) => r.user.login === BOT_USER && r.state === 'CHANGES_REQUESTED'
  )
  for (const review of pendingReviews) {
    console.log(`Dismissing review ${review.id}`)
    const dismissResponse = await githubFetch(
      `/repos/${REPO}/pulls/${PR_NUMBER}/reviews/${review.id}/dismissals`,
      {
        method: 'PUT',
        body: JSON.stringify({
          message: 'No markdown issues found — all clear.'
        })
      }
    )
    if (!dismissResponse.ok) {
      console.error('Failed to dismiss review:', await dismissResponse.text())
    }
  }
  console.log('No markdown issues found.')
  process.exit(0)
}

// Post new comments for mistakes that don't already have a comment
const newComments = mistakes
  .filter(
    ({ path, line, message }) =>
      !botComments.some(
        (c) => c.path === path && c.line === line && c.body === message
      )
  )
  .map(({ path, line, message }) => ({
    path,
    line,
    side: 'RIGHT',
    body: message
  }))

if (newComments.length === 0) {
  console.log('All issues already have review comments. Nothing new to post.')
  process.exit(1)
}

const issueCount = newComments.length
const fileCount = new Set(newComments.map((c) => c.path)).size
const issueWord = issueCount === 1 ? 'issue' : 'issues'
const fileWord = fileCount === 1 ? 'file' : 'files'

console.log(`Posting ${issueCount} new ${issueWord}...`)

const response = await githubFetch(
  `/repos/${REPO}/pulls/${PR_NUMBER}/reviews`,
  {
    method: 'POST',
    body: JSON.stringify({
      commit_id: HEAD_SHA,
      event: 'REQUEST_CHANGES',
      body:
        `Found ${issueCount} ${issueWord} across ${fileCount} markdown ${fileWord}. ` +
        'Please address the inline comments below.',
      comments: newComments
    })
  }
)

if (!response.ok) {
  console.error('Failed to post review:', await response.text())
  process.exit(1)
}

console.log('Review posted successfully.')
process.exit(1)
