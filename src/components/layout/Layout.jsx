import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import { Layout } from './layout.styled';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkRefresh } from '../../redux/auth/thunkUser';

const SharedLayout = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(thunkRefresh());
  }, [dispath]);

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
