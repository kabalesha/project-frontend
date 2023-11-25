import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import { Layout } from './layout.styled';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkRefresh } from '../../redux/auth/thunkUser';
import { useSelector } from 'react-redux';
// import { currentUserEmailSelector } from '../../redux/selectors';
import { selectIsAuth } from '../../redux/selectors';

const SharedLayout = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector(selectIsAuth);
  useEffect(() => {
    dispath(thunkRefresh());
  }, [dispath]);

  return (
    <Layout>
      <Header isAuthenticated={isLoggedIn} />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Layout>
  );
};

export default SharedLayout;
