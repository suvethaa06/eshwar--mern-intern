import React from'react';
import { useSelector } from 'react-redux';

function User() {
  const users = useSelector(state => state.userinfo.user);
  console.log(users);
  return (
    <div>
        <h1>Users</h1>
    </div>
  );
}

export default User;