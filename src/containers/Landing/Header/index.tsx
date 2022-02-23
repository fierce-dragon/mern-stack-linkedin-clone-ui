import React from 'react';
import SVG from 'react-inlinesvg';
import { useHistory } from 'react-router-dom';
import { SearchBar } from '../../../components/SearchBar';

import './style.scss';

export const Header: React.FC<any> = () => {
  const history = useHistory();

  return (
    <nav className="header-nav nav">
      <a href="/" className="nav-logo-link">
        <i className="nav-logo d-block">
          <SVG src="/media/svg/logos/header-logo.svg" />
        </i>
      </a>
      <SearchBar />
      <div className="nav-container d-flex justify-content-end">
        <button
          className="nav-button nav-button-tertiary border-0"
          onClick={() => history.push('/auth/sign-up')}
        >
          Join now
        </button>
        <button
          className="nav-button nav-button-secondary"
          onClick={() => history.push('/auth/sign-in')}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};
