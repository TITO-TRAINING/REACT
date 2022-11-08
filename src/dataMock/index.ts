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

export default { dataSliders, dataRecentPosts, dataPinnedReview };
