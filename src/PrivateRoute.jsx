import React from 'react';
import { useSelector } from 'react-redux';
import HomePage from './components/pages/homePage/HomePage';
import { selectIsAuth } from './redux/selectors';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ component: Component, redirectTo = '/', ...rest }) => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth);
  return isAuth ? <Component {...rest} /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
