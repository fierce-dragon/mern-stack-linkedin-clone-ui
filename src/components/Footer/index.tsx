import React from 'react';
import SVG from 'react-inlinesvg';

import './style.scss';

const links = [
  { label: 'About', url: '/' },
  { label: 'Accessibility', url: '/' },
  { label: 'User Agreement', url: '/' },
  { label: 'Privacy Policy', url: '/' },
  { label: 'Cookie Policy', url: '/' },
  { label: 'Copyright Policy', url: '/' },
  { label: 'Brand Policy', url: '/' },
  { label: 'Guest Controls', url: '/' },
  { label: 'Community Guidelines', url: '/' },
];

export const Footer: React.FC<any> = () => {
  return (
    <footer className="li-footer">
      <ul className="li-footer-list">
        <li className="li-footer-item">
          <i className="li-footer-copy-logo">
            <SVG src="/media/svg/logos/footer-logo.svg" />
          </i>
          <span className="li-footer-copy-text">© 2021</span>
        </li>
        {links.map((link, index) => (
          <li key={index} className="li-footer-item">
            <a href={link.url} className="li-footer-item-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
