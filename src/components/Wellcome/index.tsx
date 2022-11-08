import React from 'react';

interface Props {
  text?: string;
  imageAvatar?: string;
}
function Wellcome({ text, imageAvatar }: Props) {
  return (
    <div className="recent d-flex align-items-center gap-2 mt-4">
      <p className="recent-post">{text}</p>
      <figure>
        <img src={imageAvatar} alt="" />
      </figure>
    </div>
  );
}

export default Wellcome;

Wellcome.defaultProps = {
  text: '',
  imageAvatar: '',
};
