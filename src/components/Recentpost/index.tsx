import React from 'react';

interface Props {
  text: string;
  imageCard: string;
}
function RecentPost({ text, imageCard }: Props) {
  return (
    <div className="recent d-flex align-items-center gap-2 mt-4">
      <p className="recent-post">{text}</p>
      <figure className="recent-post__img">
        <img src={imageCard} alt="" />
      </figure>
    </div>
  );
}

export default RecentPost;
