import React from 'react';
import { useSelector } from 'react-redux';
import HomePage from './components/pages/homePage/HomePage';

const PrivateRoute = ({ component: Component, redirectTo = '/', ...rest }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  return isLoggedIn || isRefreshing ? (
    <Component {...rest} />
  ) : (
    <HomePage to={redirectTo} />
  );
};

export default PrivateRoute;