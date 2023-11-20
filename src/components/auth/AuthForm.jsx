import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { register } from '../../shared/api/auth';
import { useNavigate, Link } from 'react-router-dom';


import css from './AuthForm.module.css'
import icons from '../../icons/icons.svg'

import { signUpThunk } from '../../redux/auth/thunkUser';


const AuthForm = ({ onSubmit }, handleFormSubmit) => {
  // console.log('first', handleFormSubmit);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async values => {
      try {
        await dispatch(
          signUpThunk({
            email: values.email,
            password: values.password,
            repeatPassword: values.repeatPassword,
          })
        );
        handleFormSubmit({
          name:values.name,
          email: values.email,
          password: values.password,
        });

        formik.resetForm();
        if (onSubmit) {
          onSubmit(values);
        }

        navigate('/home');
      } catch (error) {
        console.error('Registration failed', error);
      }
    },
      validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .required('Password is required')
          .min(8, 'Password must be at least 8 characters long')
          .max(64, 'Password must not exceed 64 characters'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Repeat password is required'),
    }),
  });


   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };


  return (
    <div>
      <h1 className={css.title}>Sign up</h1>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div>
          <label className={css.label}>Enter your email</label>
          <input className={`${css.input} ${formik.touched.email && formik.errors.email ? css.inputError : ''}`}
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
          <input className={`${css.input} ${formik.touched.password && formik.errors.password ? css.inputError : ''}`}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            autoComplete="off"
            minLength={8}
            required
            {...formik.getFieldProps('password')}
          />
          <div className={css.passwordToggle} onClick={togglePasswordVisibility}>
              
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
        <div>
          <label className={css.label}>Repeat password</label>
          <input className={`${css.input} ${formik.touched.repeatPassword && formik.errors.repeatPassword ? css.inputError : ''}`}
            type={showRepeatPassword ? 'text' : 'password'}
            name="password"
            placeholder="Repeat password"
            autoComplete="off"
            minLength={8}
            required
            {...formik.getFieldProps('repeatPassword')}
          />
          <div className={css.passwordToggle} onClick={toggleRepeatPasswordVisibility}>
          {showRepeatPassword ? (
                          <svg className={css.eye}>
                             <use href={icons + '#eye'} />
                          </svg>
                        ) : (
                          <svg className={css.eye}>
                            <use href={icons + '#hidden'} />
                          </svg>
                        )}
          </div>
          {formik.touched.repeatPassword && formik.errors.repeatPassword && (
            <div className={css.error}>{formik.errors.repeatPassword}</div>
          )}
        </div>
        <button className={css.btn} type="submit">Sign Up</button>
        <Link className={css.link} to="/signin">Sign in</Link>
      </form>
    </div>
  );
};

export default AuthForm;
