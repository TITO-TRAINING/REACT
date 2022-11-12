import React from 'react';

interface Props {
  classImg?: string;
  img: string;
  altImg: string;
}
export default function AboutImgPage({ classImg, img, altImg }: Props) {
  return (
    <div className={classImg}>
      <figure className="col-md-4 dool">
        <img src={img} alt={altImg} />
      </figure>
    </div>
  );
}
AboutImgPage.defaultProps = {
  classImg: 'about-page-img__food2',
};
