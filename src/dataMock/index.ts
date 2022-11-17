// data slider
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
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

// data Comment
import imgAvt from '../assets/images/avt.png';

// data about img
import imgAbout from '../assets/images/pngfind.png';
import Common from '../Constants/Common';

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
    rating: 4.5,
    comment:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
  },
  {
    cardReviewersImage: imgPinnedReview2,
    info: 'Mailan',
    rating: 4,
    comment:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
  },
  {
    cardReviewersImage: imgPinnedReview3,
    info: 'Mailan',
    rating: 3,
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
    link: Common.LINKFB,
    linkImg: logoFb,
    logo: 'logo facebook',
  },
  {
    link: Common.LINKINS,
    linkImg: logoInstagram,
    logo: 'logo instagram',
  },
  {
    link: Common.LINKINS,
    linkImg: logoTwitter,
    logo: 'logo twitter',
  },
];

const dataListCompany = [
  {
    item: 'News',
    title: 'Company',
    linkMainFooter: '/detail-blog',
  },
  {
    item: 'Blog',
    linkMainFooter: '/blog',
  },
  {
    item: 'Testimonials',
    linkMainFooter: '/',
  },
  {
    item: 'About Us',
    linkMainFooter: '/about',
  },
];

const dataListProducts = [
  {
    item: 'UI Kits',
    title: 'Products',
    linkMainFooter: '/',
  },
  {
    item: 'Icons',
    linkMainFooter: '/',
  },
  {
    item: 'Wordpress Themes',
    linkMainFooter: '/',
  },
  {
    item: 'Mock-Ups',
    linkMainFooter: '/',
  },
];

const dataListContact = [
  {
    item: 'New York, NY 10012',
    title: 'Contact',
    linkMainFooter: '/',
  },
  {
    item: 'info@example.com',
    linkMainFooter: '/',
  },
  {
    item: '+ 01 234 567 88',
    linkMainFooter: '/',
  },
  {
    item: '+ 01 234 567 89',
    linkMainFooter: '/',
  },
];

const dataComments = [
  {
    imgAvtComment: imgAvt,
    info: 'Mai Lan',
    date: '07 10 2022',
    comment:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
  },
  {
    imgAvtComment: imgAvt,
    info: 'Mai Lan',
    date: '07 10 2022',
    comment:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
  },
  {
    imgAvtComment: imgAvt,
    info: 'Mai Lan',
    date: '07 10 2022',
    comment:
      'Thank you so much for delivering a quality piece. Will be using it with one of my outfits. Just not sure which one!!!!',
  },
];

const dataTagSocial = [
  {
    linkTagSocial: '/',
    tagSocial: 'breakfast',
  },
  {
    linkTagSocial: '/',
    tagSocial: 'dinner',
  },
  {
    linkTagSocial: '/',
    tagSocial: 'lunch',
  },
];

const dataFormInput = [
  {
    placeholder: 'Your Name',
  },
  {
    type: 'email',
    placeholder: 'Your Mail',
  },
];

const dataSocialShare = [
  {
    title: '',
    href: '',
    icon: FaTwitterSquare,
    className: '',
  },
  {
    title: '',
    href: '',
    icon: FaInstagramSquare,
  },
  {
    title: '',
    href: '',
    icon: FaTwitterSquare,
  },
];

const dataImgAbout = [
  {
    class: 'about-page-img__food2 d-flex flex-row-reverse',
    img: imgAbout,
    alt: 'food',
  },
  {
    img: imgAbout,
    alt: 'food',
  },
];

const dataCardAbout = [
  {
    item: 'Contact',
    link: '/contact',
  },
  {
    item: 'Video Tutorials',
    link: '/',
  },
  {
    item: 'Help Center',
    link: '/',
  },
];

const dataCardDevelopers = [
  {
    item: 'Md. Majharul Islam',
    link: '/',
  },
  {
    item: 'Tanjila Islam',
    link: '/',
  },
  {
    item: 'Mlưila',
    link: '/',
  },
];

const dataLinhNav = [
  {
    link: '/',
    page: 'Home',
  },
  {
    link: '/blog',
    page: 'Blog',
  },
  {
    link: '/detail-blog',
    page: 'Newsfeed',
  },
  {
    link: '/contact',
    page: 'Contact',
  },
  {
    link: '/about',
    page: 'About',
  },
  {
    link: '/profile',
    page: 'Profile',
  },
  {
    link: '/account',
    page: 'Account',
  },
];

const dataFormInputProfile = [
  {
    placeholder: 'Full Name',
    name: 'fullName',
  },
  {
    placeholder: 'UserName',
    name: 'userName',
  },
  {
    type: 'email',
    placeholder: 'email',
    name: 'email',
  },
  {
    type: 'password',
    placeholder: 'password',
    name: 'password',
  },
];

const dataFormRegister = [
  {
    classForm: 'col-md-12',
    classInput: 'form-control form-control-lg mb-4',
    placeholder: 'Your Name',
  },
  {
    classForm: 'col-md-12',
    type: 'gmail',
    classInput: 'form-control form-control-lg mb-4',
    placeholder: 'Your Gmail',
  },
  {
    classForm: 'col-md-12',
    type: 'password',
    classInput: 'form-control form-control-lg mb-4',
    placeholder: 'Your Password',
  },
  {
    classForm: 'col-md-12',
    type: 'password',
    classInput: 'form-control form-control-lg mb-4',
    placeholder: 'Confrim Password',
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
  dataComments,
  dataTagSocial,
  dataFormInput,
  dataSocialShare,
  dataCardAbout,
  dataCardDevelopers,
  dataLinhNav,
  dataFormInputProfile,
  dataFormRegister,
  dataImgAbout,
};
