import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    totalItems: this.props.users.length,
    itemPerPage: 3,
    from: 0,
    to: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
      from: this.state.from - 3,
      to: this.state.to - 3,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
      from: this.state.from + 3,
      to: this.state.to + 3,
    });
  };

  render() {
    const {users} = this.props;
    const sliceFrom = this.state.currentPage === 1 ? 0 : this.state.from;
    const sliceTo = this.state.currentPage === 1 ? 3 : this.state.to;

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.state.totalItems}
          itemPerPage={this.state.itemPerPage}
        />
        <ul className="users">
          {users.slice(sliceFrom, sliceTo).map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
