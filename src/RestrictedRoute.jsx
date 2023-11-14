import { useSelector } from 'react-redux';
import MainPage from '../src/components/pages/homePage/HomePage.jsx';
const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <MainPage /> : <Component to={redirectTo} />;
};
export default RestrictedRoute;
