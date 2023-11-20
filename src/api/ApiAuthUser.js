import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://project-backend-7eyy.onrender.com/api',
});

const setToken = token => {
  // const token = localStorage.getItem('token');
  localStorage.setItem('token', token);

  const a = localStorage.getItem('token');

  return (instance.defaults.headers.common['Authorization'] = `Bearer ${a}`);
};
export const signUp = async body => {
  const { data } = await instance.post('/auth/signup', body);
  // setToken(data.token);
  return data;
};
export const signIn = async body => {
  console.log('body', body);
  const { data } = await instance.post('/auth/signin', body);
  console.log('data', data);
  setToken(data.token);
  return data;
};
export const refresh = async body => {
  const { data } = await instance.get('/auth/refresh');

  console.log('data', data.email);

  return data;
};
export const logOut = async () => {
  const token = localStorage.getItem('token');
  const { data } = await instance.post('/auth/logout', token);
  console.log('data', data);
  return data;
};
