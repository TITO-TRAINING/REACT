import React from 'react';

function SocialShare() {
  return (
    <div className="social-share mb-4">
      <div className="widget-social">
        <p>Share: </p>
        <a title="Twitter" href="/">
          <i className="fa-brands fa-twitter" />
        </a>
        <a title="Instagram" href="/">
          <i className="fa-brands fa-instagram" />
        </a>
        <a title="Linkedin" href="/">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a title="Skype" href="/">
          <i className="fa-brands fa-skype" />
        </a>
        <a title="Dribble" href="/">
          <i className="fa-brands fa-dribbble" />
        </a>
      </div>
    </div>
  );
}

export default SocialShare;
