import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { IAuth } from 'store/Auth/authRedux';
import { TCombinedState } from 'store/rootReducer';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authToken } = useSelector<TCombinedState, IAuth>(({ auth }) => auth);

  return (
    <Route
      {...rest}
      render={props =>
        !!authToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
