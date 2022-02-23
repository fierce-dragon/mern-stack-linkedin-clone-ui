import React from 'react';
import { Route } from 'react-router';

const ContentRoute = ({ component, ...props }) => {
  return (
    <Route {...props}>
      {routeProps => {
        if (!routeProps.match) {
          return null;
        }

        if (component) {
          return React.createElement(component, routeProps);
        }

        return null;
      }}
    </Route>
  );
};

export default ContentRoute;
