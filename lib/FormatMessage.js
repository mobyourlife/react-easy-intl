import React, { Component } from 'react'
import MessageFormat from 'messageformat'
import Globalize from './Globalize'

class FormatMessage extends Component {
  constructor (props) {
    super(props)
    this.mf = new MessageFormat(Globalize.getLocale())
  }

  render () {
    if (!this.props.str) {
      return null
    }

    const msg = Globalize.getMessage(this.props.str)
    const fn = this.mf.compile(msg)
    const text = fn(this.props)
    return <span>{text}</span>
  }
}

export default FormatMessage
