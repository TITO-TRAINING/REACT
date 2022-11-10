import React from 'react';
import Line from '../../components/Line';
import Tittlesearch from '../../components/Titlesearch';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import dataMock from '../../dataMock';
import ReccentBlogCard from '../../components/ReccentBlogCard';

function BlogPage() {
  const classLine = 'line-blog line';
  return (
    <div>
      <Header />
      <main className="container pt-5 ">
        <section className="py-5 my-5">
          <Line line={classLine} />
          <Tittlesearch />
          <div className="reccent-post-blog">
            {dataMock.dataRecentBlogCard.map((listRecentBlogCard) => (
              <ReccentBlogCard
                imageBlogCard={listRecentBlogCard.imageBlogCard}
                cardTitle={listRecentBlogCard.cardTitle}
                cardText={listRecentBlogCard.cardText}
                cardTime={listRecentBlogCard.cardTime}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;
