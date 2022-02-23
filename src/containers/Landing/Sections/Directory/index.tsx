import React from 'react';
import SVG from 'react-inlinesvg';

import './style.scss';

export const directories = [
  {
    title: 'General',
    children: [
      { title: 'Sign Up', url: '/' },
      { title: 'Help Center', url: '/' },
      { title: 'About', url: '/' },
      { title: 'Press', url: '/' },
      { title: 'Blog', url: '/' },
      { title: 'Careers', url: '/' },
      { title: 'Developers', url: '/' },
    ],
  },
  {
    title: 'Browse LinkedIn',
    children: [
      { title: 'Learning', url: '/' },
      { title: 'Jobs', url: '/' },
      { title: 'Salary', url: '/' },
      { title: 'Mobile', url: '/' },
      { title: 'Services', url: '/' },
    ],
  },
  {
    title: 'Business Solutions',
    children: [
      { title: 'Talent', url: '/' },
      { title: 'Marketing', url: '/' },
      { title: 'Sales', url: '/' },
      { title: 'Learning', url: '/' },
    ],
  },
  {
    title: 'Directories',
    children: [
      { title: 'Members', url: '/' },
      { title: 'Jobs', url: '/' },
      { title: 'Companies', url: '/' },
      { title: 'Salaries', url: '/' },
      { title: 'Featured', url: '/' },
      { title: 'Learning', url: '/' },
      { title: 'Posts', url: '/' },
      { title: 'Articles', url: '/' },
      { title: 'Schools', url: '/' },
      { title: 'News', url: '/' },
      { title: 'News Letters', url: '/' },
      { title: 'Services', url: '/' },
      { title: 'Interview Prep', url: '/' },
    ],
  },
];

export const DirectorySection: React.FC<any> = () => {
  return (
    <section className="section section-directory w-100">
      <div className="directory">
        <i className="directory-logo">
          <SVG src="/media/svg/logos/directory-logo.svg" />
        </i>
        <div className="directory-lists">
          {directories.map((directory, dirIndex) => (
            <div key={dirIndex} className="directory-column">
              <h3 className="directory-list-item directory-list-item-heading">
                {directory.title}
              </h3>
              <ul className="list-unstyled">
                {directory.children.map((subdirectory, subIndex) => (
                  <li key={subIndex} className="directory-list-item">
                    <a className="directory-link" href={subdirectory.url}>
                      {subdirectory.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
