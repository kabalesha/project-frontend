import Container from '../../container/Container';

import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { errorSelector } from '../../store/auth/selectors';
// import sprite from '../../img/sprites.svg';
import {
  Wrapper,
  Box,
  Label,
  StyledForm,
  StyledInput,
  SigninButton,
  Title,
  LinkToPage,
  ErrorM,
  StyledPasswordInput,
  AllForm,
} from './Auth.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// function Signin({ signin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const error = useSelector(errorSelector);

//   const handleSubmit = e => {
//     e.preventDefault();
//     signin({ email, password });
//   };
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const Signin = ({ signin }) => {
  // const [passwordVisible, setPasswordVisible] = useState(false);
  // const error = useSelector(errorSelector);
  const handleSubmit = (values, { setSubmitting }) => {
    signin(values);
    setSubmitting(false);
  };

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  return (
    <Wrapper>
      <Container>
        <Box>
          <AllForm>
            {/* {error && <h4>{error}</h4>} */}

            {/* <Form onSubmit={handleSubmit}>
              <div>
                <Label>Enter your email</Label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={({ target: { value } }) => setEmail(value)}
                  required
                />
              </div>
              <div>
                <Label>Enter your password</Label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={({ target: { value } }) => setPassword(value)}
                  required
                />
              </div>
              <RegisterButton type="submit">Sign In</RegisterButton>
            </Form> */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <StyledForm>
                <Title>Sign In</Title>
                <div>
                  <Label>Enter your email</Label>
                  <Field
                    as={StyledInput}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ErrorMessage name="email" component={ErrorM} />
                </div>
                <div>
                  <Label>Enter your password</Label>
                  <StyledPasswordInput>
                    <Field
                      as={StyledInput}
                      // type={passwordVisible ? 'text' : 'password'}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    {/* <span onClick={togglePasswordVisibility}>
                      {passwordVisible ? ( */}
                        {/* <svg className="eye">
                          <use href={sprite + '#eye'} />
                        </svg>
                      ) : (
                        <svg className="eye">
                          <use href={sprite + '#hidden'} />
                        </svg>
                      )}
                    </span> */}
                  </StyledPasswordInput>
                  <ErrorMessage name="password" component={ErrorM} />
                </div>
                <SigninButton type="submit">Sign In</SigninButton>
              </StyledForm>
            </Formik>

            {/* <LinkToPage to="/forgot-password">Forgot password?</LinkToPage> */}

            <LinkToPage to="/signup">Sign up</LinkToPage>
          </AllForm>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Signin;