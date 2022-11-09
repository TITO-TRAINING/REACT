import React from 'react';
import Line from '../../components/Line';
import Reccentblogcard from '../../components/ReccentBlogCard';
import Tittlesearch from '../../components/Titlesearch';
import Footer from '../../layouts/Footer';
import imageBlogCard from '../../assets/images/recentCard_1.png';
import imageBlogCard2 from '../../assets/images/recentCard_2.png';

import Header from '../../layouts/Header';

function Blogpage() {
  const classLine = 'line-blog line';
  return (
    <div>
      <Header />
      <main className="container pt-5 ">
        <section className="py-5 my-5">
          <Line line={classLine} />
          <Tittlesearch />
          <div className="reccent-post-blog">
            <Reccentblogcard
              imageBlogCard={imageBlogCard}
              cardTitle="Pinned Review"
              cardText="Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!"
              cardTime="Update last "
            />
          </div>
          <div className="reccent-post-blog">
            <Reccentblogcard
              imageBlogCard={imageBlogCard2}
              cardTitle="Pinned Review"
              cardText="Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!"
              cardTime="Update last "
            />
          </div>
          <div className="reccent-post-blog">
            <Reccentblogcard
              imageBlogCard={imageBlogCard}
              cardTitle="Pinned Review"
              cardText="Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!"
              cardTime="Update last "
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Blogpage;
