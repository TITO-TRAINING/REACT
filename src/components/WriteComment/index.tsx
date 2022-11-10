import React from 'react';

export default function WriteComment() {
  return (
    <div className="comment-post-area">
      <h2 className="comment-post-area-blog-desc__title mt-5">
        Write a comment
      </h2>
      <form action="">
        <div className="row">
          <div className="col-md-6 col-custom">
            <div className="comment-post-area__input-item mb-4">
              <input
                className="rounded-0 w-100 comment-post-area__input-item-area name"
                type="text"
                placeholder="Tên"
              />
            </div>
          </div>

          <div className="col-md-6 col-custom">
            <div className="input-item mb-4">
              <input
                className="rounded-0 w-100 comment-post-area__input-item-area email"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="col-12 col-custom">
            <div className="comment-post-area__input-item">
              <textarea
                cols={30}
                rows={10}
                name="comment"
                className="rounded-0 w-100 custom-textarea comment-post-area__input-item-area"
                placeholder="Message"
                spellCheck="false"
                data-gramm="false"
              />
            </div>
          </div>

          <div className="col-12 col-custom my-3">
            <button
              type="submit"
              className="comment-post-area__btn btn-primary p-3"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
