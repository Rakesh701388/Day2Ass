import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    const { users } = this.props;  // Access users from props

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users && users.length > 0 ? (
            users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))
          ) : (
            <li>No users available</li>
          )}
        </ul>
      </div>
    );
  }
}

export default UserList;
