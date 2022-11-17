import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  item: string;
  link: string;
}
export default function ListCard({ item, link }: Props) {
  return (
    <ul>
      <li>
        <Link to={link} className="link-main footer-main__link">
          {item}
        </Link>
      </li>
    </ul>
  );
}
