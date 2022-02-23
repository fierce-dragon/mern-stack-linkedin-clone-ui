import React from 'react';
import { Header } from './Header';
import {
  HeroSection,
  JobFindSection,
  JobPostSection,
  TestimonialSection,
  ProductSection,
  JoinSection,
  DirectorySection,
  MarketingSection,
} from './Sections';
import { Footer } from '../../components/Footer';

import './style.scss';

export const LandingPage: React.FC<any> = () => {
  return (
    <div className="landing">
      <Header />
      <main className="main d-flex flex-column align-items-center">
        <HeroSection />
        <JobFindSection />
        <JobPostSection />
        <TestimonialSection />
        <ProductSection />
        <MarketingSection />
        <JoinSection />
        <DirectorySection />
      </main>
      <Footer />
    </div>
  );
};
