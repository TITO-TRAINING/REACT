import React from 'react';

interface Props {
  classTitle: string;
  title?: string;
  item: string;
  linkMainFooter: string;
}
export default function LisCard({
  classTitle,
  title,
  item,
  linkMainFooter,
}: Props) {
  return (
    <div className="footer-main__list">
      <div className={classTitle}>
        <h6 className="title--third text-uppercase fw-bold footer-main__title">
          {title}
        </h6>
      </div>
      <ul>
        <li>
          <a href={linkMainFooter} className="link-main footer-main__link">
            {item}
          </a>
        </li>
      </ul>
    </div>
  );
}
LisCard.defaultProps = {
  title: '',
};
