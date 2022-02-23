import React from 'react';

import './style.scss';

export const MarketingSection: React.FC<any> = () => {
  return (
    <section className="section">
      <div className="marketing">
        <div className="marketing-media">
          <iframe
            className="marketing-iframe"
            title="Let’s Step Forward | LinkedIn"
            allowFullScreen={true}
            src="http://localhost:8080/media/videos/marketing.mp4"
          ></iframe>
        </div>
        <div className="marketing-copy">
          <h2 className="marketing-header">Let's step forward</h2>
          <h3 className="marketing-subtitle">
            With our communities by our side, there's no telling where our next
            small steps could lead
          </h3>
        </div>
      </div>
    </section>
  );
};
