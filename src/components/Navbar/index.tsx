import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  link: string;
  page: string;
}
export default function Navbar({ link, page }: Props) {
  return (
    <li className="nav-item">
      <Link to={link}>{page}</Link>
    </li>
  );
}
