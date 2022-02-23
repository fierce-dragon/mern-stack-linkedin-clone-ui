import React from 'react';
import TextField from '@material-ui/core/TextField';

import './style.scss';

export const SignInForm: React.FC<any> = () => {
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
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
        </div>

        <p className="sign-in-form-links">
          <a href="/" className="sign-in-form-forgot-password-link">
            Forgot password?
          </a>
        </p>

        <button className="hero-form-main-button" type="button">
          Sign in
        </button>
      </section>
    </form>
  );
};
