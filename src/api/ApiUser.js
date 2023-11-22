import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://project-backend-7eyy.onrender.com/api',
});

const token = localStorage.getItem('token');
console.log('token', token);

export const setToken = token => {
  // const token = localStorage.getItem('token');
  localStorage.setItem('token', token);

  const a = localStorage.getItem('token');

  return (instance.defaults.headers.common['Authorization'] = `Bearer ${a}`);
};
export const apiUserUpdate = async body => {
  setToken(token);
  const { data } = await instance.patch('/user/update', body);
  console.log('data', data);
  return data;
};
export const apiUserUpdsateAvatar = async body => {
  setToken(token);
  const { data } = await instance.patch('/user/add-avatar', body);
  console.log('data', data);
  return data;
};
