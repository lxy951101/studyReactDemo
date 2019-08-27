// 点赞
import * as React from 'react';
const { useState, useEffect } = React;

export const Comment = ({
  username,
  content,
  createdTime,
  onDeleteComment = () => {}
}) => {
  const [timeString, setTimeString] = useState('');
  let timer;
  const updateTimeString = () => {
    const duration = (Date.now() - createdTime) / 1000;
    setTimeString(duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`);
  };
  useEffect(() => {
    updateTimeString();
    clearInterval(timer);
    timer = setInterval(updateTimeString, 5000);
    return function destroy() {
      clearInterval(timer);
    }
  }, [])

  return (
    <div className="comment">
      <div className="comment-user">
        <span>{username}</span>:
      </div>
      <p>{content}</p>
      <span className="comment-createdtime">{timeString}</span>
      <span
        onClick={onDeleteComment}
        className="comment-delete"
      >
        删除
      </span>
    </div>
  )
};