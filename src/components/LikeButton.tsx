// 点赞
import * as React from 'react';
const { useState } = React; 

export const LikeButton = ({
  likedText = '取消',
  unlikedText = '点赞',
}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <button id="like-btn" onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? likedText : unlikedText}👍
    </button>
  )
}