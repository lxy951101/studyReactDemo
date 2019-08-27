// 点赞
import * as React from 'react';
import { Comment } from './Comment';

export const CommentList = ({
  comments = [],
  onDeleteComment = (index) => {},
}) => {
  return (
    <>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.username}
          content={comment.content}
          createdTime={comment.createdTime}
          onDeleteComment={() => onDeleteComment(index)}
        />
      ))}
    </>
  )
};