import React from 'react';

interface Props {
  link: string;
  linkImg: string;
  logo: string;
}
function FooterLinkImg({ link, linkImg, logo }: Props) {
  return (
    <a href={link}>
      <img className="footer-link__img" src={linkImg} alt={logo} />
    </a>
  );
}

export default FooterLinkImg;
