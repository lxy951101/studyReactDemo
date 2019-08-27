// 点赞
import * as React from 'react';
import { User } from './User';

export const UserList = ({
  users = [],
}) => {
  return (
    <>
      {users.map((user, index) => (
        <User
          key={index}
          username={user.username}
          age={user.age}
          gender={user.gender}
        />
      ))}
    </>
  )
};