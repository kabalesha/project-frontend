import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
const setToken = token => {
  // const token = localStorage.getItem('token');
  localStorage.setItem('token', token);
  const a = localStorage.getItem('token');

  return (instance.defaults.headers.common['Authorization'] = `Bearer ${a}`);
};
export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  // setToken(data.token);
  return data;
};
export const signIn = async body => {
  const { data } = await instance.post('/users/login', body);
  setToken(data.token);
  return data;
};
