import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://project-backend-7eyy.onrender.com/api',
});

export const setToken = token => {
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
  const { data } = await instance.post('/auth/signin', body);

  setToken(data.token);
  return data;
};

export const refresh = async body => {
  const token = localStorage.getItem('token');

  try {
    setToken(token);
    const data = await instance('/user/current');
    setToken(data.token);

    return data;
  } catch (error) {
    return null;
  }
};
export const logOut = async () => {
  const token = localStorage.getItem('token');
  const { data } = await instance.post('/auth/logout', token);
  return data;
};
