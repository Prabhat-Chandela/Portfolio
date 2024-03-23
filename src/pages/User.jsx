import React from 'react';
import { useSelector } from 'react-redux';

function User() {

  const userData = useSelector((state)=>state.auth.userData);
  console.log(userData);

  return (
    <div>User</div>
  )
}

export default User