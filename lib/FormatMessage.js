import React, { Component } from 'react';
import MessageFormat from 'messageformat';

class FormatMessage extends Component {
  constructor(props) {
    super(props);
    this.mf = new MessageFormat('en');
  }

  render() {
    if (!this.props.str) {
      return null;
    }

    const fn = this.mf.compile(this.props.str);
    const text = fn(this.props);
    return <span>{text}</span>
  }
}

export default FormatMessage;
