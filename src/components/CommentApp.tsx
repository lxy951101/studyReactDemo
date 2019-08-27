// 点赞
import * as React from 'react';
import { CommentInput } from './CommentInput';
import { CommentList } from './CommentList';
const { useState, useEffect, useMutationEffect, useLayoutEffect } = React;

export const CommentApp = () => {
  const [comments, setComments] = useState([]);
  const loadComments = () => {
    let ocomments = localStorage.getItem('comments');
    if (ocomments) {
      ocomments = JSON.parse(ocomments);
      setComments(ocomments);
    }
  }
  const saveComments = (_comments) => {
    localStorage.setItem('comments', JSON.stringify(_comments));
  }
  const handleSubmit = ({username, content, createdTime}) => {
    const ncomments = [...comments, { username, content, createdTime }];
    setComments(ncomments);
    saveComments(ncomments);
  }
  const handleDeleteComment = ({index}) => {
    comments.splice(index, 1);
    const ncomments = [...comments];
    setComments(ncomments);
    saveComments(ncomments);
  }
  useEffect(() => {
    loadComments();
    console.log('useEffect');
    return function destroy() {
      console.log('unUseEffect');
    }
  }, []);
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  });
  return (
    <div className="wrapper">
      <CommentInput onSubmit={handleSubmit} />
      <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
    </div>
  )
};