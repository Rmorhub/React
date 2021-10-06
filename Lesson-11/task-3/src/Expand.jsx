import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    show: false,
  };

  toggleButton = () => {
    if (!this.state.show) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    }
  };

  render() {
    if (!this.state.show) {
      return (
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{this.props.title}</span>
            <button className="expand__toggle-btn" onClick={this.toggleButton}>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleButton}>
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
        <div className="expand__content">{this.props.children}</div>
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Expand.defaultProps = {
  title: 'Title',
};

export default Expand;
