import React from 'react';
import Signin from './Signin';
import css from '../SignUp/SignUpPage.module.css';

import { useNavigate } from 'react-router-dom';

const SigninPage = ({ redirectTo }) => {
  const navigate = useNavigate();

  const handleFormSubmit = async body => {
    navigate(redirectTo);
  };

  return (
    <section className={css.container}>
      <div className={css.img_container}>
        <div className={css.form_container}>
           <Signin onSubmit={handleFormSubmit}/>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;