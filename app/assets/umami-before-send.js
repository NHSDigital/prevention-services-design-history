// Redacts URLs, referrers and titles before Umami sends them.
// https://github.com/NHSDigital/dpsp-umami#2-add-the-tracking-script
window.umamiBeforeSend = function (type, payload) {
  const decode = (s) => {
    try {
      return decodeURIComponent(s)
    } catch {
      return s
    }
  }
  // Email addresses, UUIDs, then any run of letters and digits that contains a digit.
  const redact = (s) =>
    s
      .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, '[email]')
      .replace(/\b[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}\b/gi, '[id]')
      .replace(/[a-z0-9]*\d[a-z0-9]*/gi, '[id]')
  const cleanUrl = (value) => {
    if (!value) return value
    const url = new URL(value, location.origin)
    const rest = redact(decode(url.pathname + url.search))
    return /^https?:/i.test(value) ? url.origin + rest : rest
  }
  payload.url = cleanUrl(payload.url)
  payload.referrer = cleanUrl(payload.referrer)
  if (payload.title) payload.title = redact(payload.title)
  return payload
}
