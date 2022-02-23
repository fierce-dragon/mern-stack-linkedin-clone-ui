import React from 'react';
import SVG from 'react-inlinesvg';
import { SignInForm } from './Forms';

import './style.scss';

export const HeroSection: React.FC<any> = () => {
  return (
    <section className="section section-hero">
      <div className="hero hero-with-form w-100">
        <h1 className="hero-headline position-relative">
          Welcome to your professional community
        </h1>
        <SVG
          className="hero-illustration-desktop"
          src="/media/svg/illustrations/hero-illustration-mobile.svg"
        />
        <SVG
          className="hero-illustration-mobile"
          src="/media/svg/illustrations/hero-illustration-mobile.svg"
        />
      </div>
      <SignInForm />
    </section>
  );
};
