import React from 'react';
import TextField from '@material-ui/core/TextField';

import './style.scss';

export const JoinForm: React.FC<any> = () => {
  return (
    <form className="hero-form">
      <div className="alert d-none"></div>
      <section className="hero-form-body">
        <div className="hero-form-input-container">
          <TextField
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password (6+ length)"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
        </div>

        <p className="join-form-agreement">
          By clicking Agree &amp; Join, you agree to the LinkedIn{' '}
          <a href="/" className="join-form-agreement-item-link">
            User Agreement
          </a>
          ,{' '}
          <a href="/" className="join-form-agreement-item-link">
            Privacy Policy
          </a>
          , and{' '}
          <a href="/" className="join-form-agreement-item-link">
            Cookie Policy
          </a>
          .
        </p>

        <button className="hero-form-main-button" type="button">
          Agree &amp; Join
        </button>
      </section>
    </form>
  );
};
