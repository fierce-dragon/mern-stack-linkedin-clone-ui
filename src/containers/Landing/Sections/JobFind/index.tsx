import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import { Pill } from '../../../../components/Pill';
import { useJobTypeApi, IJobType } from '../../../../util/http';

import './style.scss';

export const JobFindSection: React.FC<any> = () => {
  const [jobTypes, setJobTypes] = useState<IJobType[]>([]);
  const [showState, setShowState] = useState<'less' | 'more' | undefined>();

  const { getJobTypes } = useJobTypeApi();

  useEffect(() => {
    getJobTypes()
      .then(({ data }) => {
        setJobTypes(data);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showMoreLess = () => {
    setShowState(showState === 'more' ? 'less' : 'more');
  };

  useEffect(() => {
    if (!showState) {
      return;
    }

    let scrollPosition = showState === 'more' ? -window.innerHeight : 0;
    let elem = document.getElementById(
      showState === 'more' ? 'show-more-less-state-label' : 'suggested-search',
    );

    while (elem) {
      scrollPosition += elem.offsetTop;
      elem = elem.parentElement;
    }

    window.scrollTo(0, scrollPosition);
  }, [showState]);

  return (
    <section className="section section-find-jobs">
      <div className="search-cta">
        <div className="job-finder-cta">
          <h2 className="job-finder-cta-header">
            Find open jobs and internships
          </h2>
        </div>

        <div className="suggested-search" id="suggested-search">
          <div className="etta-see-more-less-list">
            <h2 className="etta-see-more-less-list-header">
              Suggested Searches
            </h2>

            <div className="see-more-less-list">
              <ul className="etta-see-more-less-list-list list-unstyled">
                {jobTypes.map((job, index) => (
                  <li
                    key={index}
                    className={
                      'see-more-less-list-item ' +
                      (index <= 10 || showState === 'more'
                        ? ''
                        : 'show-more-only')
                    }
                  >
                    <Pill href="/">{job?.title}</Pill>
                  </li>
                ))}
              </ul>

              <label
                role="button"
                onClick={showMoreLess}
                className="show-more-less-state-label"
                id="show-more-less-state-label"
              >
                <span className="etta-see-more-less-list-show-more">
                  {showState === 'more' ? 'Show less' : 'Show more'}
                </span>
                <i
                  className={
                    showState === 'more'
                      ? 'chevron-up-icon'
                      : 'chevron-down-icon'
                  }
                >
                  <SVG src="/media/svg/icons/chevron-icon.svg" />
                </i>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
