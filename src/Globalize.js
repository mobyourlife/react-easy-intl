export class Globalize {
  static getLocale () {
    return window.EasyIntlLocale || 'en'
  }

  static setLocale (locale) {
    window.EasyIntlLocale = locale
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
