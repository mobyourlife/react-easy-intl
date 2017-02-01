export class Globalize {
  static getLocale () {
    const def = window.EasyIntlMessages && Object.keys(window.EasyIntlMessages)[0]
    return window.EasyIntlLocale || def || 'en'
  }

  static setLocale (locale) {
    window.EasyIntlLocale = locale
  }

  static detectLocale () {
    const ff = window.navigator.userLanguage
    const first = window.navigator.language
    const list = window.navigator.languages

    const attempts = [ff, first, ...list]
      .filter(i => !!i)

    const compatible = Object.keys(window.EasyIntlMessages)
      .find(i => attempts.indexOf(i) !== -1)

    window.EasyIntlLocale = compatible
  }

  static getMessages () {
    if (!window.EasyIntlMessages) {
      return []
    }

    return window.EasyIntlMessages[this.getLocale()]
  }

  static getMessage (str) {
    const messages = this.getMessages()
    return messages[str] || str
  }

  static setMessages (messages) {
    window.EasyIntlMessages = messages
  }
}

export default Globalize
