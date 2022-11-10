import React from 'react';

interface Props {
  imgDetailBlog: string;
  tittleDetailBlog: string;
  info: string;
  day: string;
  numberComment: string;
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
            alt=""
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
            <li>{numberComment}</li>
          </ul>
        </div>

        <p>{content}</p>

        <blockquote> {blockquote}</blockquote>

        <p>{content2}</p>

        <div className="blog-details-content__tagsocial mb-n4">
          <div className="blog-details-content__tagsocial-tag mb-4">
            <ul>
              <li>
                <a href="/">breakfast</a>
              </li>
              <li>
                <a href="/">dinner</a>
              </li>
              <li>
                <a href="/">lunch</a>
              </li>
            </ul>
          </div>
          {/* <include src="components/like-button.html"></include> */}
        </div>
      </div>
    </div>
  );
}

export default Detailblog;
