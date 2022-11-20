import React from 'react';
// data mock
import dataMock from '../../dataMock';
// component
import LikeButton from '../LikeButton';
import TagSocial from '../TagSocial';

interface Props {
  img: string;
  title: string;
  info: string;
  day: string;
  numberComment: number;
  firtContent: string;
  blockquote: string;
  SecondContent: string;
  linkInfo: string;
}
function Detailblog({
  img,
  title,
  info,
  day,
  numberComment,
  firtContent,
  blockquote,
  SecondContent,
  linkInfo,
}: Props) {
  return (
    <div className="blog-detail blog-details-wrapper">
      <div className="blog-details-content">
        <div className="blog-details-content__image">
          <img
            src={img}
            alt="imgDetailBlog"
            className="blog-details-content__image-fitimg"
          />
        </div>

        <div className="blog-details-content__titlemeta">
          <h2 className="blog-details-content__titlemeta-title">{title}</h2>
          <ul className="blog-details-content__titlemeta-meta">
            <li>
              By: <a href={linkInfo}>{info}</a> <p>{day}</p>
            </li>
            <li>{numberComment} comment </li>
          </ul>
        </div>

        <p>{firtContent}</p>

        <blockquote> {blockquote}</blockquote>

        <p>{SecondContent}</p>

        <div className="blog-details-content__tagsocial mb-n4">
          <div className="blog-details-content__tagsocial-tag mb-4">
            <ul>
              {dataMock.dataTagSocial.map((listTagSocial) => (
                <TagSocial
                  key={listTagSocial.linkTagSocial}
                  linkTagSocial={listTagSocial.linkTagSocial}
                  tagSocial={listTagSocial.tagSocial}
                />
              ))}
            </ul>
          </div>
          <LikeButton />
        </div>
      </div>
    </div>
  );
}

export default Detailblog;
