import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import { Layout } from './layout.styled';
import { Suspense } from 'react';


const SharedLayout = () => {
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