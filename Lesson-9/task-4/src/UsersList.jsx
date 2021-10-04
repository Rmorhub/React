import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UserList extends Component {
  state = {
    value: '',
  };
  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    const filterUsers = !this.state.value
      ? this.props.users
      : this.props.users.filter(({ name }) =>
          name.toLowerCase().includes(this.state.value.toLowerCase())
        );

    const users = filterUsers.map(({ id, name, age }) => (
      <User key={id} name={name} age={age} />
    ));

    return (
      <div>
        <Filter
          filterText={this.state.value}
          onChange={this.onChange}
          count={users.length}
        />
        <ul className="users">{users}</ul>
      </div>
    );
  }
}

export default UserList;
