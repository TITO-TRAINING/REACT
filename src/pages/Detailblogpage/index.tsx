import React from 'react';
import Detailblog from '../../components/DetailBlog';
import Line from '../../components/Line';
import SocialShare from '../../components/SocialShare';

import Tittlesearch from '../../components/Titlesearch';
import imgDetailBlog from '../../assets/images/imgDetailBlog.jpg';
import Header from '../../layouts/Header';
import DetailComment from '../../components/DetailComment';
import dataMock from '../../dataMock';
import WriteComment from '../../components/WriteComment';
import Footer from '../../layouts/Footer';

function DetailBlogPage() {
  const classLine = 'line-detail-blog line';
  return (
    <div>
      <Header />
      <main className="container pt-5 ">
        <section className="py-5 my-5 ">
          <Line line={classLine} />
          <Tittlesearch />
          <div className="container">
            <div className="row">
              <div className="col-lg-9 m-auto">
                <Detailblog
                  imgDetailBlog={imgDetailBlog}
                  tittleDetailBlog="Healthy Breakfast in 5 Minutes"
                  linkInfo="https://www.facebook.com/milo2109"
                  info="MaiLan"
                  day="20/10/2022"
                  numberComment="01 comment"
                  content="Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  blockquote="Technology is nothing. What is important is that you have a faith in people, that they are basically good and smart, and if you give them tools, they will do wonderful things with them"
                  content2="Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                />
                <SocialShare />
                <div className="blog-details-comment-area mb-n6">
                  <h2 className="blog-desc-title mb-6 mt-8">Comment</h2>
                  {dataMock.dataComments.map((listComment) => (
                    <DetailComment
                      imgAvtComment={listComment.imgAvtComment}
                      info={listComment.info}
                      day={listComment.day}
                      comment={listComment.comment}
                    />
                  ))}
                </div>
                <WriteComment />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default DetailBlogPage;
