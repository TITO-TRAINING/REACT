import React from 'react';
import Button from '../Button';

interface Props {
  imageBlogCard: string;
  cardTitle: string;
  cardText: string;
  cardTime: string;
}
function ReccentBlogCard({
  imageBlogCard,
  cardTitle,
  cardText,
  cardTime,
}: Props) {
  return (
    <div className="recent-blog-card container row mt-5 mb-5 p-5 ">
      <div className="col-md-6">
        <figure className="recent-blog-card__img justify-content-between">
          <img src={imageBlogCard} alt="" />
        </figure>
      </div>
      <div className="recent-blog-card__body col-md-6 text-center align-self-center">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <p className="card-text">
          <small className="text-muted">{cardTime}</small>
        </p>
        <div className="d-flex justify-content-center">
          <Button
            classButton="btn-ChangePhoto btn-success btn-block"
            button="Read more"
          />
        </div>
      </div>
    </div>
  );
}

export default ReccentBlogCard;
