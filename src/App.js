import { Route, Routes, Router } from 'react-router-dom';
import SharedLayout from './components/layout/Layout.jsx';
// import Main from './components/main/Main.jsx';
import WelcomePage from './components/pages/WelcomePage/WelcomePage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import RestrictedRoute from './RestrictedRoute.jsx';
import { lazy } from 'react';

const HomePage = lazy(() => import('./components/pages/homePage/HomePage.jsx'));
const SignInPage = lazy(() =>
  import('./components/pages/SignIn/SignInPage.jsx')
);
const SignUpPage = lazy(() =>
  import('./components/pages/SignUp/SignUpPage.jsx')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
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
  );
};

export default App;
