import React from 'react';

import AuthForm from '../../auth/AuthForm.jsx'
import { RegistrationPageContainer, ImageContainer, AuthFormContainer } from './Auth.styled.js'

import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
  const navigate = useNavigate();
  
  const handleFormSubmit = async () => {
   
    navigate('/MainPage');
  };

  return (
    <RegistrationPageContainer>
      <ImageContainer>
      <AuthFormContainer>
        <AuthForm onSubmit={handleFormSubmit}/>
      </AuthFormContainer>
       </ImageContainer >
    </RegistrationPageContainer>
  );
};

export default SignUpPage