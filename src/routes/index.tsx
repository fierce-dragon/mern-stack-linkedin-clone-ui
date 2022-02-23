import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { LandingPage } from '../containers/Landing';
import { AuthPage } from '../containers/Auth';

const Routes: React.FC = () => {
  return (
    <Switch>
      <PublicRoute path="/" exact component={LandingPage} />
      <PublicRoute path="/auth" component={AuthPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
