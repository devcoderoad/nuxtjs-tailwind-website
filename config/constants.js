const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://dykraf.com'

const PRODUCTION = process.env.NODE_ENV !== 'development'

module.exports = {
  PRODUCTION,
  BASE_URL,
  GOOGLE_ANALYTICS_ID: 'UA-123722350-1',
  NAME: 'Dykraf',
  TITLE: 'Dykraf.com',
  SLOGAN: 'Build with Code',
  DESCRIPTION: 'Web Developer, Tech Writer, and Premium Theme Author',
  IMAGE: `${BASE_URL}/assets/img/logo.png`,
  LOCALE: 'en-US',
  LANG: 'en'
}
