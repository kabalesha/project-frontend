import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { register } from '../../shared/api/auth';
import { useNavigate } from 'react-router-dom'; 

import { RegisterButton, Label, Input, Form, Title, SignInLink } from '../../components/auth/AuthForm.styled';

const AuthForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async (values) => {
      try {
        await dispatch(register({
          email: values.email,
          password: values.password,
        }));

        formik.resetForm();
        if (onSubmit) {
          onSubmit(values);
        }

        navigate('/MainPage');
      } catch (error) {
        console.error('Реєстрація не вдалась', error);
      }
    },
  });

  return (
    <div>
      <Title>Sign up</Title>
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <Label>Enter your email</Label>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            minLength={3}
            autoComplete="off"
            required
            {...formik.getFieldProps('email')}
          />
        </div>
        <div>
          <Label>Enter your password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            minLength={8}
            required
            {...formik.getFieldProps('password')}
          />
        </div>
        <div>
          <Label>Repeat password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Repeat password"
            autoComplete="off"
            minLength={8}
            required
            {...formik.getFieldProps('repeatPassword')}
          />
        </div>
        <RegisterButton type="submit">Sign Up</RegisterButton>
        <SignInLink>
          {/* <Link to="/signin">Sign in</Link> */}
        </SignInLink>
      </Form>
    </div>
  );
};

export default AuthForm;
