export class Globalize {
  static getLocale () {
    return global.EasyIntlLocale || 'en'
  }

  static setLocale (locale) {
    global.EasyIntlLocale = locale
  }

  static getMessages () {
    if (!global.EasyIntlMessages) {
      return []
    }

    return global.EasyIntlMessages[this.getLocale()]
  }

  static getMessage (str) {
    const messages = this.getMessages()
    return messages[str] || str
  }

  static setMessages (messages) {
    global.EasyIntlMessages = messages
  }
}

export default Globalize
