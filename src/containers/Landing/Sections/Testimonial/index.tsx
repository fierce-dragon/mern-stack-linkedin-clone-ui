import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import { Carousel } from 'react-bootstrap';

import './style.scss';

const testimonials = [
  {
    heading: 'Let the right people know you’re open to work',
    quote:
      'With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities',
    img: '/media/images/testimonial-1.png',
  },
  {
    heading: 'Conversations today could lead to opportunity tomorrow',
    quote:
      'Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career',
    img: '/media/images/testimonial-2.png',
  },
  {
    heading: 'Stay up to date on your industry',
    quote:
      'From Live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry',
    img: '/media/images/testimonial-3.png',
  },
];

export const TestimonialSection: React.FC<any> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const showNext = () => {
    setActiveIndex(prev => Math.min(prev + 1, testimonials.length - 1));
  };

  const showPrev = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="section section-testimonials">
      <header className="slide-list-header">
        <div className="slide-list-header-nav ">
          <div className="slide-list-nav-wrap slide-list-nav-wrap-prev">
            <button
              className="slide-list-nav-button"
              disabled={activeIndex === 0}
              onClick={showPrev}
            >
              <i className="slide-list-nav-icon">
                <SVG
                  className="slide-list-nav-icon-prev"
                  src="/media/svg/icons/artdeco-icon.svg"
                />
              </i>
              <span className="slide-list-nav-text">Previous</span>
            </button>
          </div>
          <div className="slide-list-nav-wrap slide-list-nav-wrap-next">
            <button
              className="slide-list-nav-button"
              disabled={activeIndex === testimonials.length - 1}
              onClick={showNext}
            >
              <span className="slide-list-nav-text">Next</span>
              <i className="slide-list-nav-icon">
                <SVG src="/media/svg/icons/artdeco-icon.svg" />
              </i>
            </button>
          </div>
        </div>
      </header>
      <Carousel
        indicators={false}
        controls={false}
        interval={null}
        activeIndex={activeIndex}
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="testimonials-card">
              <div className="testimonials-content">
                <h2 className="testimonials-header">{testimonial.heading}</h2>
                <p className="testimonials-quote">
                  <span>{testimonial.quote}</span>
                </p>
              </div>
              <img
                className="testimonials-image"
                alt={testimonial.heading}
                src={testimonial.img}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
