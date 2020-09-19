const getLocale = () =>
  navigator && navigator.language && navigator.language.indexOf('sv') === 0
    ? 'sv-SE'
    : 'en-US'

export { getLocale }
