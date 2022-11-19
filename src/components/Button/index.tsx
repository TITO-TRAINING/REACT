import React from 'react';

interface Props {
  classButton: string;
  nameButton: string;
  handleOnclick?: () => void;
}
function Button({ classButton, nameButton, handleOnclick }: Props) {
  return (
    <button type="button" className={classButton} onClick={handleOnclick}>
      {nameButton}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  handleOnclick: () => ({}),
};
