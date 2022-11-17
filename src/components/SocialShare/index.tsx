import React from 'react';
import { Link } from 'react-router-dom';

// data mock
import dataMock from '../../dataMock';

function SocialShare() {
  return (
    <div className="social-share mb-4">
      <div className="widget-social">
        <p>Share: </p>
        {dataMock.dataSocialShare.map((data) => (
          <Link title={data.title} to={data.href}>
            <data.icon className={data.className} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SocialShare;
