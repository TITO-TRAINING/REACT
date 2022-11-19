import React from 'react';

// img
import imgDetailBlog from '../../assets/images/imgDetailBlog.jpg';

// data mock
import dataMock from '../../dataMock';

// component
import DetailComment from '../../components/DetailComment';
import WriteComment from '../../components/WriteComment';
import SocialShare from '../../components/SocialShare';
import Tittlesearch from '../../components/Titlesearch';
import Line from '../../components/Line';
import Detailblog from '../../components/DetailBlog';
import MainLayout from '../../components/MainLayout';

function DetailBlog() {
  const classLine = 'line-detail-blog line';
  return (
    <MainLayout
      chidren={
        <main className="container pt-5 ">
          <section className="py-5 my-5 ">
            <Line line={classLine} />
            <Tittlesearch />
            <div className="container">
              <div className="row">
                <div className="col-lg-9 m-auto">
                  <Detailblog
                    img={imgDetailBlog}
                    title="Healthy Breakfast in 5 Minutes"
                    linkInfo="https://www.facebook.com/milo2109"
                    info="MaiLan"
                    day="20/10/2022"
                    numberComment={1}
                    firtContent="Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    blockquote="Technology is nothing. What is important is that you have a faith in people, that they are basically good and smart, and if you give them tools, they will do wonderful things with them"
                    SecondContent="Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                  />
                  <SocialShare />
                  <div className="blog-details-comment-area mb-n6">
                    <h2 className="blog-desc-title mb-6 mt-8">Comment</h2>
                    {dataMock.dataComments.map((listComment) => (
                      <DetailComment
                        key={listComment.comment}
                        img={listComment.imgAvtComment}
                        info={listComment.info}
                        date={listComment.date}
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
      }
    />
  );
}

export default DetailBlog;
