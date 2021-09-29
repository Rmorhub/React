import React, { Component } from 'react';

class Dimentsions extends Component {
  state = {
    width: null,
    heigth: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimentsions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (event) => {
    const { innerWidth, innerHeight } = event.target;
    this.setDimentsions(innerWidth, innerHeight);
  };

  setDimentsions = (width, heigth) => {
    this.setState({
      width,
      heigth,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return (
      <div className="dimentsions">{`${this.state.width}px - ${this.state.heigth}px`}</div>
    );
  }
}

export default Dimentsions;