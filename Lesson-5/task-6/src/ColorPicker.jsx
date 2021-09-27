import React from 'react';

const AQUA = 'Aqua';
const CORAL = 'Coral';
const BISQUE = 'Bisque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
  }
  over = (color) => {
    this.setState({
      color: color,
    });
  };
  out = () => {
    this.setState({
      color: null,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.over(CORAL)}
            onMouseOut={() => this.out(CORAL)}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.over(AQUA)}
            onMouseOut={() => this.out(CORAL)}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.over(BISQUE)}
            onMouseOut={() => this.out(CORAL)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
