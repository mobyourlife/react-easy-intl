import React, { Component } from 'react'
import MessageFormat from 'messageformat'
import Globalize from './Globalize'

export class FormatMessage extends Component {
  constructor (props) {
    super(props)
    this.mf = new MessageFormat(Globalize.getLocale())
  }

  render () {
    if (!this.props.children) {
      return null
    }

    const msg = Globalize.getMessage(this.props.children)
    const fn = this.mf.compile(msg)
    const text = fn(this.props)
    return <span>{text}</span>
  }
}

export default FormatMessage
