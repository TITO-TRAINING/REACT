import React from 'react';

interface Props {
  classList?: string;
  classTitle?: string;
  title?: string;
  item: string;
  linkMainFooter: string;
}
export default function LisCard({
  classList,
  classTitle,
  title,
  item,
  linkMainFooter,
}: Props) {
  return (
    <div className={classList}>
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
  classList: 'footer-main__list',
  classTitle: '',
};
