import React from 'react';
import FooterLinkImg from '../../components/FooterLinkImg';
import Logo from '../../assets/images/logo.png';
import dataMock from '../../dataMock';
import LisCard from '../../components/ListCard';

function Footer() {
  return (
    <section className="footer-section bg-light">
      <footer className="footer text-center pt-3">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <figure className="footer-logo d-flex justify-content-center">
                <img src={Logo} alt="log" />
              </figure>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
              <div className="footer-link d-flex justify-content-between">
                {dataMock.dataLinkImgFooter.map((LogoFooter) => (
                  <FooterLinkImg
                    link={LogoFooter.link}
                    linkImg={LogoFooter.linkImg}
                    logo={LogoFooter.logo}
                  />
                ))}
              </div>
            </div>
            <div className="footer-locations__link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {dataMock.dataListCompany.map((ListTitle) => (
                <LisCard
                  classTitle={ListTitle.classTitle}
                  item={ListTitle.item}
                  title={ListTitle.title}
                  linkMainFooter={ListTitle.linkMainFooter}
                />
              ))}
            </div>
            <div className="footer-locations__link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {dataMock.dataListProducts.map((ListdataProducts) => (
                <LisCard
                  classTitle={ListdataProducts.classTitle}
                  item={ListdataProducts.item}
                  title={ListdataProducts.title}
                  linkMainFooter={ListdataProducts.linkMainFooter}
                />
              ))}
            </div>
            <div className="footer-locations__link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {dataMock.dataListContact.map((ListdataContact) => (
                <LisCard
                  classTitle={ListdataContact.classTitle}
                  item={ListdataContact.item}
                  title={ListdataContact.title}
                  linkMainFooter={ListdataContact.linkMainFooter}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center p-4 border border-secondary">
          Copyright &copy 2022:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Mai Lan
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
