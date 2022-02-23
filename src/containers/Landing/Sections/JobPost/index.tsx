import React from 'react';
import { Pill } from '../../../../components/Pill';

import './style.scss';

export const JobPostSection: React.FC<any> = () => {
  return (
    <section className="section section-post-job">
      <div className="talent-finder-cta">
        <h2 className="talent-finder-cta-header">
          Post your job and find the people you need
        </h2>
        <Pill href="/" variant="transparent">
          Post a job
        </Pill>
      </div>
    </section>
  );
};
