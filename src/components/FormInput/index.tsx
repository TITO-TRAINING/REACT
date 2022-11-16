import React from 'react';

interface Props {
  classForm?: string;
  type?: string;
  classInput?: string;
  placeholder: string;
  nameInput?: string;
}
export default function FormInput({
  classForm,
  type,
  classInput,
  placeholder,
  nameInput,
}: Props) {
  return (
    <div className={classForm}>
      <input
        type={type}
        className={classInput}
        placeholder={placeholder}
        name={nameInput}
      />
    </div>
  );
}

FormInput.defaultProps = {
  classForm: 'form-input col-md-6',
  type: 'text',
  classInput: 'input',
  nameInput: '',
};
