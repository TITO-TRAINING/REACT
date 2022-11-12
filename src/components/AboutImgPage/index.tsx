import React from 'react';

interface Props {
  classImgAbout?: string;
  imgAboutFood: string;
  altAboutImgFood: string;
}
export default function AboutImgPage({
  classImgAbout,
  imgAboutFood,
  altAboutImgFood,
}: Props) {
  return (
    <div className={classImgAbout}>
      <figure className="col-md-4 dool">
        <img src={imgAboutFood} alt={altAboutImgFood} />
      </figure>
    </div>
  );
}
AboutImgPage.defaultProps = {
  classImgAbout: 'about-page-img__food2',
};
