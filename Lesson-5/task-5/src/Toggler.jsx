import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'On',
    };
  }

  toggle() {
    this.state.input === 'On'
      ? this.setState({
          input: 'Off',
        })
      : this.setState({
          input: 'On',
        });
  }

  render() {
    return (
      <button className="toggler" onClick={() => this.toggle()}>
        {this.state.input}
      </button>
    );
  }
}

export default Toggler;
