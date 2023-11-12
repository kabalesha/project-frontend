import React from 'react';

import AuthForm from '../../auth/AuthForm.jsx'
import { RegistrationPageContainer, ImageContainer, AuthFormContainer} from './Auth.styled.js'


const SignUpPage = () => {
  return (
    <RegistrationPageContainer>
      <ImageContainer>
      <AuthFormContainer>
        <AuthForm />
      </AuthFormContainer>
       </ImageContainer >
    </RegistrationPageContainer>
  );
};

export default SignUpPage