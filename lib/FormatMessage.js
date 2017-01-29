import React, { Component } from 'react';

class FormatMessage extends Component {
  render() {
    return <span>Hi {this.props.children}!</span>
  }
}

export default FormatMessage;
