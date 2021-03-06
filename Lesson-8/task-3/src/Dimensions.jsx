import React, { Component } from 'react';

class Dimensions extends Component {
  state = {
    width: null,
    heigth: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (event) => {
    const { innerWidth, innerHeight } = event.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, heigth) => {
    this.setState({
      width,
      heigth,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.heigth}px`}</div>
    );
  }
}

export default Dimensions;