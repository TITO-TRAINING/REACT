import React from 'react';

interface Props {
  classForm: string;
  type: string;
  classInput: string;
  placeholder: string;
}
export default function FormInput({
  classForm,
  type,
  classInput,
  placeholder,
}: Props) {
  return (
    <div className={classForm}>
      <input type={type} className={classInput} placeholder={placeholder} />
    </div>
  );
}
