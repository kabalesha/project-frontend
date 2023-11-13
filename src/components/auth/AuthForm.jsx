import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  RegisterButton,
  Label,
  Input,
  Form,
  Title,
  SignInLink,
} from '../../components/auth/AuthForm.styled';

const AuthForm  = () => {
return (
      <div>
        <Title>Sign up</Title>
        <Form >
          <div>
            <Label>Enter your email</Label>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div>
            <Label>Enter your password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <Label>Repeat password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Repeat pasword"
              required
            />
          </div>
          <RegisterButton type="submit">Sign Up</RegisterButton>
          <SignInLink>
          Sign in
            {/* <Link to="/signin">Sign in</Link> */}
          </SignInLink>
        </Form>
      </div>
  );
}

export default AuthForm;