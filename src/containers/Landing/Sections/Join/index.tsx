import React from 'react';
import { Pill } from '../../../../components/Pill';

import './style.scss';

export const JoinSection: React.FC<any> = () => {
  return (
    <section
      className="section section-join"
      style={{
        background:
          "url('/media/svg/backgrounds/bk-join-cta.svg') repeat-x bottom/auto 100%",
      }}
    >
      <div className="join-cta">
        <h2 className="join-cta-header">
          Join your colleagues, classmates, and friends on LinkedIn.
        </h2>
        <Pill href="/" variant="blue">
          Get started
        </Pill>
      </div>
    </section>
  );
};
