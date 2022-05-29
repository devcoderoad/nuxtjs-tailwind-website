/* eslint-disable no-param-reassign */
export default function (context) {
  let serverUserAgent = ''
  if (context && context.req && context.req.headers) {
    serverUserAgent = context.req.headers['user-agent'] || ''
  }

  let clientUserAgent = ''
  if (typeof navigator !== 'undefined' && typeof navigator === 'object') {
    const { userAgent = '' } = navigator
    clientUserAgent = userAgent
  }

  context.userAgent = (process.server && serverUserAgent) || clientUserAgent
}
