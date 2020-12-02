import React, { Component } from 'react';

class Notification extends Component {
  state = {}
  render() {
    const { message } = this.props
    return (<h2>{message}</h2>);
  }
}

export default Notification;