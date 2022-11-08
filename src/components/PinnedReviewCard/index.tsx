import React from 'react';

interface Props {
  cardReviewersImage: string;
  info: string;
  comment: string;
}
function Pinnedreviewcard({ cardReviewersImage, info, comment }: Props) {
  return (
    <div className="review">
      <article className="review-card mt-4 m-2 ">
        <figure className="review-card-reviewers__img  d-flex justify-content-center">
          <img
            src={cardReviewersImage}
            className="img-fluid rounded-circle w-25 mr-3 mb-3 "
            alt=""
          />
          <div className="review-card-reviewers__rating " />
        </figure>
        <p className="review-card-reviewers__info text-center">{info}</p>
        <blockquote className="review-card-reviewers__comment d-flex text-center ">
          {comment}
        </blockquote>
      </article>
    </div>
  );
}

export default Pinnedreviewcard;
