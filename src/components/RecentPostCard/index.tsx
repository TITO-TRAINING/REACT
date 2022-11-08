import React from 'react';

interface Props {
  image: string;
}
function Recentpostcard({ image }: Props) {
  return (
    <div className="recent-card">
      <figure>
        <img src={image} alt="" />
      </figure>
    </div>
  );
}

export default Recentpostcard;
