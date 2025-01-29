import React from'react';
import { useSelector } from 'react-redux';

function User() {
  const user = useSelector(state => state.userinfo.user);
  return (
    <div>
        <h1>Users</h1>
    </div>
  );
}

export default User;