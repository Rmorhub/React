import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';
import './index.scss';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  spinnerShow = () => {
    this.setState({
      isLoggedIn: null,
    });
    setTimeout(() => this.handleLogin(), 2000);
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isLoggedIn === null) {
      return (
        <div className="panel">
          <Spinner size={40} />
        </div>
      );
    } 
      return (
        <div className="panel">
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.handleLogout} />
          ) : (
            <Login onLogin={this.spinnerShow} />
          )}
        </div>
      );
    
  }
}

export default Auth;
