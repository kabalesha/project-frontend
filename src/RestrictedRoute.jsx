import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import HomePage from './components/pages/homePage/HomePage';
import { selectIsAuth } from './redux/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/home' }) => {
  const isLoggedIn = useSelector(selectIsAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
