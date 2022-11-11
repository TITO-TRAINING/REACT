import React from 'react';
import {
  FaInstagramSquare,
  FaFacebook,
  FaTwitterSquare,
  FaSkype,
  FaDribbbleSquare,
} from 'react-icons/fa';

function SocialShare() {
  return (
    <div className="social-share mb-4">
      <div className="widget-social">
        <p>Share: </p>
        <a title="Twitter" href="/">
          <FaTwitterSquare className="FaTwitterSquare" />
        </a>
        <a title="Instagram" href="/">
          <FaInstagramSquare className="FaInstagram" />
        </a>
        <a title="Linkedin" href="/">
          <FaFacebook className="FaFacebook" />
        </a>
        <a title="Skype" href="/">
          <FaSkype className="FaSkype" />
        </a>
        <a title="Dribble" href="/">
          <FaDribbbleSquare className="FaDribbbleSquare" />
        </a>
      </div>
    </div>
  );
}

export default SocialShare;
