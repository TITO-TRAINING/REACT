import React from 'react';

// data mock
import dataMock from '../../dataMock';

function SocialShare() {
  return (
    <div className="social-share mb-4">
      <div className="widget-social">
        <p>Share: </p>
        {dataMock.dataSocialShare.map((data) => (
          <a title={data.title} href={data.href}>
            <data.icon className={data.className} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialShare;
