/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import ImgUpdate from '../../assets/images/update.png';
import Pinnedreviewcard from '../../components/PinnedReviewCard';
import Recentpostcard from '../../components/RecentPostCard';
import Slide from '../../components/Slide';
import Tittlesearch from '../../components/Titlesearch';
import Header from '../../layouts/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../layouts/Footer';
import dataMock from '../../dataMock';
import Title from '../../assets/images/pushPin.png';
import RecentPost from '../../components/Recentpost';

function Homepage() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Header />
      <main className="container pt-5 ">
        <Tittlesearch />
        <Slide />
        <RecentPost text="Recent post" imageCard={ImgUpdate} />
        <section className="recent">
          <div className="recent-post-card">
            <Slider {...settings}>
              {dataMock.dataRecentPosts.map((img) => (
                <Recentpostcard image={img.img} />
              ))}
            </Slider>
          </div>
        </section>
        <section className="section-card mb-5">
          <RecentPost text="Pinned Review" imageCard={Title} />
          <div className="pinned-review mt-5">
            <Slider {...settings}>
              {dataMock.dataPinnedReview.map((item) => (
                <Pinnedreviewcard
                  cardReviewersImage={item.cardReviewersImage}
                  info={item.info}
                  comment={item.comment}
                />
              ))}
            </Slider>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
