import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import ContentRoute from '../../routes/ContentRoute';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';
import { Footer } from '../../components/Footer';

import './style.scss';

export const AuthPage: React.FC<any> = () => {
  return (
    <div className="auth d-flex flex-column justify-content-between align-items-center min-vh-100">
      <Switch>
        <ContentRoute path="/auth/sign-in" component={SignIn} />
        <ContentRoute path="/auth/sign-up" component={SignUp} />
        <ContentRoute path="/auth/forgot-password" component={ForgotPassword} />
        <ContentRoute path="/auth/reset-password" component={ResetPassword} />
        <Redirect from="/auth" exact={true} to="/auth/sign-in" />
      </Switch>
      <Footer />
    </div>
  );
};
