import { useDispatch, useSelector } from 'react-redux';
import Signin from './Signin';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { refreshUser, signInUser } from '../../store/auth/thunk';
import { selectAccessToken } from '../../../redux/auth/sliceUser';

const SigninPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);
  const navigate = useNavigate();

  const signin = body => {
  //   dispatch(signInUser(body));
  };

  // useEffect(() => {
  //   isAuth && navigate('/sighup');
  // }, [isAuth, navigate]);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <>
      <Signin signin={signin} />
    </>
  );
};

export default SigninPage;