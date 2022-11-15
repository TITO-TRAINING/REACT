import React from 'react';

interface Props {
  img: string;
  info: string;
  date: string;
  comment: string;
}
function DetailComment({ img, info, date, comment }: Props) {
  return (
    <div className="blog-details-comment mt-5">
      <figure className="blog-details-comment thumb">
        <img
          className="thumb__fit-image img-fluid rounded-circle mr-3 mb-3"
          src={img}
          alt="imgAvtComment"
        />
      </figure>
      <div className="blog-details-comment content row">
        <h4 className="content__title d-flex">{info}</h4>
        <ul className="content__meta">
          <li>{date}</li>
        </ul>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default DetailComment;
