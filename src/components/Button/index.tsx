import React from 'react';

interface Props {
  classButton: string;
  classIcon?: string;
  nameButton: string;
}
function Button({ classButton, classIcon, nameButton }: Props) {
  return (
    <button type="button" className={classButton}>
      <i className={classIcon} /> {nameButton}
    </button>
  );
}

export default Button;
Button.defaultProps = {
  classIcon: '',
};
