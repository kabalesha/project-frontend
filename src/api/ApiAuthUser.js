import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  // setToken(data.token);
  return {
    name: 'alex',
    email: 'alex@gmail.com',
    password: '123456',
  };
};
export const signIn = async body => {
  const { data } = await instance.post('/users/signup', body);
  // setToken(data.token);
  return {
    email: 'alex@gmail.com',
    password: '123456',
  };
};
