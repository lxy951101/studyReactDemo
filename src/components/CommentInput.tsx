// 点赞
import * as React from 'react';
const { useState, useEffect } = React;

export const CommentInput = ({
  onSubmit = function({username, content, createdTime}) {}
}) => {
  let textarea;
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const saveUsername = (nusername) => {
    localStorage.setItem('username', nusername);
  }
  const loadUsername = () => {
    const ousername = localStorage.getItem('username');
    if (ousername) {
      setUsername(ousername);
    }
  }
  const handleSubmit = () => {
    const createdTime = Date.now();
    onSubmit({username, content, createdTime});
  }
  useEffect(() => {
    loadUsername();
    textarea.focus();
  }, []);
  return (
    <div className="comment-input">
      <div className="comment-field">
        <span className="comment-field-name">用户名：</span>
        <div className="comment-field-input">
          <input
            value={username}
            onBlur={(e) => saveUsername(e.target.value)}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="comment-field">
        <span className="comment-field-name">评论内容：</span>
        <div className="comment-field-input">
          <textarea
            ref={(el) => textarea = el}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="comment-field-button">
        <button onClick={handleSubmit}>发布</button>
      </div>
    </div>
  )
};