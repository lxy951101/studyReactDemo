import * as React from 'react';

export const User = ({
  username,
  age,
  gender,
}) => {
  return (
    <div>
      <div>姓名：{username}</div>
      <div>年龄：{age}</div>
      <div>性别：{gender}</div>
      <hr/>
    </div>
  )
};