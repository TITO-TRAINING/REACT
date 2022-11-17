import React from 'react';

interface Props {
  classButton: string;
  nameButton: string;
  onClick?: () => void;
}
function SubmitForm({ classButton, nameButton, onClick }: Props) {
  return (
    <button type="submit" onClick={onClick} className={classButton}>
      {nameButton}
    </button>
  );
}

export default SubmitForm;
SubmitForm.defaultProps = {
  onClick: {},
};
