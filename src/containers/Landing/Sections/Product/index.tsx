import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import { Dropdown } from 'react-bootstrap';
import { Pill } from '../../../../components/Pill';
import { useLearningTopicApi, ILearningTopic } from '../../../../util/http';

import './style.scss';

export const ProductSection: React.FC<any> = () => {
  const [learningTopics, setLearningTopics] = useState<ILearningTopic[]>([]);
  const { getLearningTopics } = useLearningTopicApi();

  useEffect(() => {
    getLearningTopics()
      .then(({ data }) => {
        setLearningTopics(data);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section section-product">
      <div className="product-cta d-flex flex-row justify-content-between flex-wrap w-100">
        <div className="people-cta d-flex flex-wrap h-100">
          <SVG
            className="people-cta-illustration"
            src="/media/svg/illustrations/people-cta-illustration.svg"
          />
          <div className="people-cta-content">
            <h2 className="people-cta-header">
              Connect with people who can help
            </h2>
            <Pill href="/" variant="transparent">
              Find people you know
            </Pill>
          </div>
        </div>
        <div className="learning-cta d-flex flex-wrap h-100">
          <SVG
            className="learning-cta-illustration"
            src="/media/svg/illustrations/learning-cta-illustration.svg"
          />
          <div className="learning-cta-content">
            <h2 className="learning-cta-header">
              Learn the skills that can help you now
            </h2>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline"
                className="d-flex align-items-center"
              >
                <span>Choose a topic to learn about</span>
                <i aria-hidden="true" className="caret-down-icon ml-auto">
                  <SVG src="/media/svg/icons/caret-down-icon.svg" />
                </i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {learningTopics.map((topic, index) => (
                  <Dropdown.Item
                    key={index}
                    href={topic?.url}
                    className="d-flex flex-column"
                  >
                    <span className="learning-cta-topic-name">
                      {topic?.title}
                    </span>
                    <span className="learning-cta-topic-courses">
                      {topic?.count}+ courses
                    </span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </section>
  );
};
