import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from './redux/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/', ...rest }) => {
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth);
  return isAuth ? <Component {...rest} /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

