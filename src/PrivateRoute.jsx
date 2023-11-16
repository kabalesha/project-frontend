import { useSelector } from 'react-redux';
import SignInPage from './components/pages/SignIn/SignInPage';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const isRefreshing = useSelector(state => state.auth.isRefreshing);

  // const isToken = localStorage.getItem('token');
  // console.log('isToken', isToken);
  // console.log(5);
  // return !isLoggedIn && !isRefreshing ? (
  //   <SignInPage to={redirectTo} />
  // ) : (
  return <Component />;
  // );
};

export default PrivateRoute;
