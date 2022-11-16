import React from 'react';

interface Props {
  classButton: string;
  nameButton: string;
}
function Button({ classButton, nameButton }: Props) {
  return (
    <button type="button" className={classButton}>
      {nameButton}
    </button>
  );
}

export default Button;
