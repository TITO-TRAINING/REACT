import React, { useState } from 'react';
// icon
import { AiTwotoneLike } from 'react-icons/ai';

export default function LikeButtonComponent() {
  const [like, setLike] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);
  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike((islike) => !islike);
  };
  const likeButtonClassName = `like-button ${isLike ? 'liked' : ''}`;
  return (
    <button
      type="button"
      className={likeButtonClassName}
      onClick={onLikeButtonClick}
    >
      Like <AiTwotoneLike className="ai-twotone-like" /> {like}
    </button>
  );
}
