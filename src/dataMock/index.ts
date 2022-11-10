import Slide1 from '../assets/images/banner1.png';
import Slide2 from '../assets/images/banner2.png';
import Slide3 from '../assets/images/banner3.png';

// data recent post
import Recentpost1 from '../assets/images/recentCard_2.png';
import Recentpost2 from '../assets/images/recentCard_1.png';

// data pinned review
import imgPinnedReview from '../assets/images/Ellipse2171(1).png';
import imgPinnedReview2 from '../assets/images/Ellipse217(2).png';
import imgPinnedReview3 from '../assets/images/Ellipse217(3).png';

// data footer img link
import logoFb from '../assets/images/facebookLogo.png';
import logoInstagram from '../assets/images/instagramLogo.png';
import logoTwitter from '../assets/images/twitterLogo.png';

// data main link footer

const dataSliders = [
  {
    img: Slide1,
  },
  {
    img: Slide2,
  },
  {
    img: Slide3,
  },
];

const dataRecentPosts = [
  {
    img: Recentpost1,
  },
  {
    img: Recentpost2,
  },
  {
    img: Recentpost1,
  },
  {
    img: Recentpost2,
  },
];
const dataPinnedReview = [
  {
    cardReviewersImage: imgPinnedReview,
    info: 'Mailan',
    comment:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
  },
  {
    cardReviewersImage: imgPinnedReview2,
    info: 'Mailan',
    comment:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
  },
  {
    cardReviewersImage: imgPinnedReview3,
    info: 'Mailan',
    comment:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
  },
];

const dataRecentBlogCard = [
  {
    imageBlogCard: Recentpost1,
    cardTitle: 'Pinned Review',
    cardText:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
    cardTime: 'Update last ',
  },
  {
    imageBlogCard: Recentpost2,
    cardTitle: 'Pinned Review',
    cardText:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
    cardTime: 'Update last ',
  },
  {
    imageBlogCard: Recentpost1,
    cardTitle: 'Pinned Review',
    cardText:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
    cardTime: 'Update last ',
  },
];

const dataLinkImgFooter = [
  {
    link: '/',
    linkImg: logoFb,
    logo: 'logo facebook',
  },
  {
    link: '/',
    linkImg: logoInstagram,
    logo: 'logo instagram',
  },
  {
    link: '/',
    linkImg: logoTwitter,
    logo: 'logo twitter',
  },
];

const dataListCompany = [
  {
    classTitle: '',
    item: 'News',
    title: 'Company',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: 'Blog',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: 'Testimonials',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: 'About Us',
    linkMainFooter: '/',
  },
];

const dataListProducts = [
  {
    classTitle: '',
    item: 'UI Kits',
    title: 'Products',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: 'Icons',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: 'Wordpress Themes',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: 'Mock-Ups',
    linkMainFooter: '/',
  },
];

const dataListContact = [
  {
    classTitle: '',
    item: 'New York, NY 10012',
    title: 'Contact',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: 'info@example.com',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: '+ 01 234 567 88',
    linkMainFooter: '/',
  },
  {
    classTitle: '',
    item: '+ 01 234 567 89',
    linkMainFooter: '/',
  },
];

export default {
  dataSliders,
  dataRecentPosts,
  dataPinnedReview,
  dataRecentBlogCard,
  dataLinkImgFooter,
  dataListCompany,
  dataListProducts,
  dataListContact,
};
