import React from 'react';
import SVG from 'react-inlinesvg';

import './style.scss';

export const SignIn: React.FC<any> = () => {
  return (
    <main className="sign-in-content" role="main">
      <a className="linkedin-logo" href="/">
        <i>
          <SVG src="/media/svg/logos/header-logo.svg" />
        </i>
      </a>
      <div id="" className="card-layout">
        <div id="organic-div" className="">
          <div className="header__content ">
            <h1 className="header__content__heading ">Sign in</h1>
            <p className="header__content__subheading ">
              Stay updated on your professional world
            </p>
          </div>
          <form
            method="post"
            className="login__form"
            action="/checkpoint/lg/login-submit"
          >
            <div className="form__input--floating mt-24">
              <input aria-label="Email or Phone" />
              <div role="alert"></div>
            </div>
            <div className="form__input--floating mt-24">
              <input aria-label="Password" />
              <div role="alert"></div>
            </div>
            <a
              href="/checkpoint/rp/request-password-reset?session_redirect=https%3A%2F%2Fby%2Elinkedin%2Ecom%2Fin%2Fiharzhytkevich&amp;trk=public_profile_nav-header-signin"
              className="btn__tertiary--medium forgot-password"
              data-cie-control-urn="forgot-password-btn"
            >
              Forgot password?
            </a>
            <input
              type="hidden"
              name="loginFlow"
              id="loginFlow"
              value="REMEMBER_ME_OPTIN"
            />
            <div className="login__form_action_container ">
              <button type="button">Sign in</button>
            </div>
          </form>
          <div className="alternate-signin-container">
            <div id="or-separator" className="or-separator mt-12 hidden">
              <span className="or-text">or</span>
            </div>
          </div>
        </div>
        <div id="otp-div" className="hidden">
          <div className="otp-success-container">
            <h2 className="otp__header__content">
              We’ve emailed a one-time link to your primary email address
            </h2>
            <p className="medium_text subheader__content">
              Click on the link to sign in instantly to your LinkedIn account.
            </p>
            <div className="mailbox__logo" aria-hidden="true">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 11H63V54H1V11Z" fill="#95ABC1"></path>
                <path
                  d="M1 54L23.1 33.2C24.3 32.1 25.8 31.5 27.5 31.5H36.6C38.2 31.5 39.8 32.1 41 33.2L63 54H1Z"
                  fill="#B4C6D8"
                ></path>
                <path
                  d="M63 11L36.5 36.8C34 39.2 29.9 39.2 27.4 36.8L1 11H63Z"
                  fill="#D1DDE9"
                ></path>
              </svg>
            </div>
            <p className="medium_text footer__content">
              If you don't see the email in your inbox, check your spam folder.
            </p>
            <button
              className="resend-button mt-12"
              id="btn-resend-otp"
              type="button"
              aria-label="Resend email"
            >
              Resend email
            </button>
            <button
              id="otp-cancel-button"
              className="otp-back-button"
              aria-label="Back"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="join-now">
        New to LinkedIn?{' '}
        <a
          href="/signup/cold-join?session_redirect=https%3A%2F%2Fby.linkedin.com%2Fin%2Fiharzhytkevich&amp;source=public_profile_nav-header-signin"
          className="btn__tertiary--medium"
          id="join_now"
          data-litms-control-urn="login_join_now"
          data-cie-control-urn="join-now-btn"
        >
          Join now
        </a>
      </div>
    </main>
  );
};
