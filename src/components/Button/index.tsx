import React from 'react';

interface Props {
  classButton: string;
  classIcon?: string;
  button: string;
}
function Button({ classButton, classIcon, button }: Props) {
  return (
    <button type="button" className={classButton}>
      <i className={classIcon} /> {button}
    </button>
  );
}

export default Button;
Button.defaultProps = {
  classIcon: '',
};
