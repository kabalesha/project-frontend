import React, { useState } from 'react';
import css from '../../auth/AuthForm.module.css';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { thunkSignIn } from '../../../redux/auth/thunkUser';
import icons from '../../../icons/icons.svg';

const Signin = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        await dispatch(
          thunkSignIn({
            email: values.email,
            password: values.password,
          })
        );

        formik.resetForm();

        navigate('/home');
      } catch (error) {
        console.error('Login failed', error);
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(64, 'Password must not exceed 64 characters'),
    }),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1 className={css.title}>Sign in</h1>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div>
          <label className={css.label}>Enter your email</label>
          <input
            className={`${css.input} ${
              formik.touched.email && formik.errors.email
                ? css.inputError
                : ''
            }`}
            type="email"
            name="email"
            placeholder="E-mail"
            minLength={3}
            required
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={css.error}>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label className={css.label}>Enter your password</label>
          <input
            className={`${css.input} ${
              formik.touched.password && formik.errors.password
                ? css.inputError
                : ''
            }`}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            autoComplete="off"
            minLength={8}
            required
            {...formik.getFieldProps('password')}
          />
          <div
            className={css.passwordToggle}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg className={css.eye}>
                <use href={icons + '#eye'} />
              </svg>
            ) : (
              <svg className={css.eye}>
                <use href={icons + '#hidden'} />
              </svg>
            )}
          </div>

          {formik.touched.password && formik.errors.password && (
            <div className={css.error}>{formik.errors.password}</div>
          )}
        </div>

        <button className={css.btn} type="submit">
          Sign In
        </button>
        <Link className={css.link} to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Signin;
