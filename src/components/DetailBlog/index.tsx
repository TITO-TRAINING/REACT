import React from 'react';
import dataMock from '../../dataMock';
import LikeButton from '../LikeButton';
import TagSocial from '../TagSocial';

interface Props {
  imgDetailBlog: string;
  tittleDetailBlog: string;
  info: string;
  day: string;
  numberComment: number;
  content: string;
  blockquote: string;
  content2: string;
  linkInfo: string;
}
function Detailblog({
  imgDetailBlog,
  tittleDetailBlog,
  info,
  day,
  numberComment,
  content,
  blockquote,
  content2,
  linkInfo,
}: Props) {
  return (
    <div className="blog-detail blog-details-wrapper">
      <div className="blog-details-content">
        <div className="blog-details-content__image">
          <img
            src={imgDetailBlog}
            alt="imgDetailBlog"
            className="blog-details-content__image-fitimg"
          />
        </div>

        <div className="blog-details-content__titlemeta">
          <h2 className="blog-details-content__titlemeta-title">
            {tittleDetailBlog}
          </h2>
          <ul className="blog-details-content__titlemeta-meta">
            <li>
              By: <a href={linkInfo}>{info}</a> <p>{day}</p>
            </li>
            <li>{numberComment} comment </li>
          </ul>
        </div>

        <p>{content}</p>

        <blockquote> {blockquote}</blockquote>

        <p>{content2}</p>

        <div className="blog-details-content__tagsocial mb-n4">
          <div className="blog-details-content__tagsocial-tag mb-4">
            <ul>
              {dataMock.dataTagSocial.map((listTagSocial) => (
                <TagSocial
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
