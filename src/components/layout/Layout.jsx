import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import { Layout } from './layout.styled';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkRefresh } from '../../redux/auth/thunkUser';
import { currentUserEmailSelector } from '../../redux/selectors';

const SharedLayout = () => {
  const dispath = useDispatch();

  const currentUserEmail = useSelector(currentUserEmailSelector);
  useEffect(() => {
    dispath(thunkRefresh(currentUserEmail));
  }, [currentUserEmail, dispath]);

  return (
    <Layout>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Layout>
  );
};

export default SharedLayout;
