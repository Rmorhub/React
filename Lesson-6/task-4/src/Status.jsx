import React, { Component } from 'react';
import Offline from './Offline';
import Online from './Online';

class Status extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="status">
        {this.props.isOnline ? <Online /> : <Offline />}
      </div>
    );
  }
}

export default Status;
