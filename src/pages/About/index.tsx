import React from 'react';
import CardAbout from '../../components/CardAbout';
// component
import ContentAbout from '../../components/ContentAbout';
import Line from '../../components/Line';
import MainLayout from '../../components/MainLayout';
import MainLayoutAbout from '../../components/MainLayoutAbout';
import Tittlesearch from '../../components/Titlesearch';
import dataMock from '../../dataMock';

export default function About() {
  return (
    <MainLayout
      chidren={
        <main className="container pt-5 ">
          <section className="py-5 my-5">
            <Line line="line-about line" />
            <Tittlesearch />
            <ContentAbout />
            <Line line="line-about-develop line" />
            <div className="container ">
              <div className="about-card row m-5 d-flex">
                <MainLayoutAbout
                  chidren={dataMock.dataCardAbout.map((listCardAbout) => (
                    <CardAbout
                      link={listCardAbout.link}
                      item={listCardAbout.item}
                    />
                  ))}
                  cardTitle="Help"
                />
                <MainLayoutAbout
                  chidren={dataMock.dataCardDevelopers.map(
                    (listdCardDevelopers) => (
                      <CardAbout
                        link={listdCardDevelopers.link}
                        item={listdCardDevelopers.item}
                      />
                    ),
                  )}
                  cardTitle="Deverloper"
                />
              </div>
            </div>
            <Line line="line" />
          </section>
        </main>
      }
    />
  );
}
