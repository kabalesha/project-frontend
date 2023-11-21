import { useSelector } from 'react-redux';
import SignInPage from './components/pages/SignIn/SignInPage';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  //   return !isLoggedIn && !isRefreshing ? (
  //     <SignInPage to={redirectTo} />
  //   ) : (
  <Component />;
};

export default PrivateRoute;
