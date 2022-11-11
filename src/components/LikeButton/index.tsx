import React, { useState } from 'react';
import { AiTwotoneLike } from 'react-icons/ai';

function LikeButtonCompoent() {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  return (
    <button
      type="button"
      className={`like-button ${isLike ? 'liked' : ''}`}
      onClick={onLikeButtonClick}
    >
      Like <AiTwotoneLike className="ai-twotone-like" /> {like}
    </button>
  );
}

export default function App() {
  return <LikeButtonCompoent />;
}
