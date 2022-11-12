import React from 'react';

interface Props {
  linkTagSocial: string;
  tagSocial: string;
}
export default function TagSocial({ linkTagSocial, tagSocial }: Props) {
  return (
    <li>
      <a href={linkTagSocial}>{tagSocial}</a>
    </li>
  );
}
