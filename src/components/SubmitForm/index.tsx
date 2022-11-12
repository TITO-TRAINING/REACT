import React from 'react';

interface Props {
  classButton: string;
  nameButton: string;
}
function SubmitForm({ classButton, nameButton }: Props) {
  return (
    <button type="submit" className={classButton}>
      {nameButton}
    </button>
  );
}

export default SubmitForm;
