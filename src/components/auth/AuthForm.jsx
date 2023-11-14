import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { login } from '../../shared/api/auth';
import { useNavigate } from 'react-router-dom'; 

import { LogInButton, Label, Input, Form, Title } from '../../components/auth/AuthForm.styled';

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
        await dispatch(login({
          email: values.email,
          password: values.password,
        }));

        formik.resetForm();
        if (onSubmit) {
          onSubmit(values);
        }

        navigate('/MainPage');
      } catch (error) {
        console.error('Не вдалий вхід', error);
      }
    },
  });

  return (
    <div>
      <Title>Sign in</Title>
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
        <LogInButton type="submit">Sign In</LogInButton>
      </Form>
    </div>
  );
};

export default AuthForm;
