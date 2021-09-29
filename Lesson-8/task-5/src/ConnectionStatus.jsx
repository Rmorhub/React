import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
      offline: false,
    };
  }
  onToggle = (event) => {
    const { onLine } = event.target.navigator;
    console.log('online');
    this.setState({
      online: onLine,
      offline: !onLine,
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.onToggle);
    window.addEventListener('offline', this.onToggle);
  }

  render() {
    if (this.state.online) {
      return <div className="status">Online</div>;
    } else {
      return <div className="status status_offline">Offline</div>;
    }
  }
}

export default ConnectionStatus;
