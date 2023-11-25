import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/layout/Layout.jsx';
import WelcomePage from './components/pages/WelcomePage/WelcomePage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import RestrictedRoute from './RestrictedRoute.jsx';
import { lazy } from 'react';
import { isAuth } from './redux/selectors.js';
import { Loader } from './components/loader/Loader.jsx';
import { useSelector } from 'react-redux';


const HomePage = lazy(() => import('./components/pages/homePage/HomePage.jsx'));
const SignInPage = lazy(() => import('./components/pages/SignIn/SignInPage.jsx'));
const SignUpPage = lazy(() => import('./components/pages/SignUp/SignUpPage.jsx'));

const App = () => {
  const isLoadingData = useSelector(isAuth);
  console.log(isLoadingData);
  return  (
    <Routes>
       <Route
        path="/"
        element={<SharedLayout />}
      >
        <Route index element={<RestrictedRoute component={WelcomePage} />} />
        <Route
          path="home"
          element={<PrivateRoute component={HomePage} />}
        />
        <Route
          path="signin"
          element={<RestrictedRoute component={SignInPage} />}
        />
        <Route
          path="signup"
          element={<RestrictedRoute component={SignUpPage} />}
        />
      </Route>
    </Routes>
  )
};

export default App;
