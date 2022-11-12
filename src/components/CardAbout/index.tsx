import React from 'react';

interface Props {
  item: string;
  link: string;
}
export default function LisCard({ item, link }: Props) {
  return (
    <ul>
      <li>
        <a href={link} className="link-main footer-main__link">
          {item}
        </a>
      </li>
    </ul>
  );
}
LisCard.defaultProps = {};
