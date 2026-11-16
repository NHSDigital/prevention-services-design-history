import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { runInNewContext } from 'node:vm'

const output = new URL('../../_site/', import.meta.url)
const script = await readFile(
  new URL('assets/umami-before-send.js', output),
  'utf8'
)

test('built pages load the redaction script before Umami under the existing CSP', async () => {
  const html = await readFile(new URL('index.html', output), 'utf8')
  assert.match(html, /script-src 'self'/)
  assert.match(
    html,
    /<script defer src="\/assets\/umami-before-send\.js"><\/script>\s*<script defer src="https:\/\/analytics\.digital-prevention-services\.nhs\.uk\/script\.js"[^>]*data-before-send="umamiBeforeSend"/
  )
})

test('the external script registers a global callback and redacts referrers, URLs and titles', () => {
  const window = {}
  runInNewContext(script, {
    window,
    URL,
    location: { origin: 'https://design-history.prevention-services.nhs.uk' }
  })
  const payload = {
    url: '/patients/12345?email=example%40example.org',
    referrer:
      'https://medium.com/@hellommips/a-month-note-october-2026-3e60421931ca',
    title: 'Results for 943 476 5919'
  }
  assert.equal(window.umamiBeforeSend('event', payload), payload)
  assert.equal(payload.url, '/patients/[id]?email=[email]')
  assert.equal(
    payload.referrer,
    'https://medium.com/@hellommips/a-month-note-october-[id]-[id]'
  )
  assert.equal(payload.title, 'Results for [id] [id] [id]')

  const ordinary = { url: '/about', referrer: '', title: 'About the service' }
  window.umamiBeforeSend('event', ordinary)
  assert.equal(ordinary.url, '/about')
  assert.equal(ordinary.referrer, '')
  assert.equal(ordinary.title, 'About the service')
})
