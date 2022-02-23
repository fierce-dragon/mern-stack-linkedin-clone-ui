import React from 'react';
import { Route } from 'react-router';

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);
