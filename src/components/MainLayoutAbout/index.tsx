import React, { ReactNode } from 'react';

interface Props {
  chidren: ReactNode;
}
export default function MainLayout({ chidren }: Props) {
  return (
    <div className="about-card__body col-md-6 col-sm-12 flex-column text-center mb-5">
      <div className="body-card p-5">
        <div className="footer-main__list">
          <div className="list-title">
            <h6 className="about-card__title ">help</h6>
          </div>
          {chidren}
        </div>
      </div>
    </div>
  );
}
