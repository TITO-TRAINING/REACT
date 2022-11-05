import React from 'react';

interface Props {
  text: string;
  image?: string;
  onClick: () => void;
  className?: string;
}

function Button({ text, onClick, image, className }: Props) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
      <img src={image} alt="" />
    </button>
  );
}

export default Button;

Button.defaultProps = {
  image: '',
  className: '',
};
