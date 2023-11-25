import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://project-backend-7eyy.onrender.com/api',
});

export const setTokenUser = () => {
  localStorage.getItem('token');
  const a = localStorage.getItem('token');
  return (instance.defaults.headers.common['Authorization'] = `Bearer ${a}`);
};

export const apiUserUpdate = async body => {
  setTokenUser();

  const { data } = await instance.patch('/user/update', body);
  console.log('data', data);
  return data;
};
export const apiUserUpdsateAvatar = async body => {
  console.log('body', body);
  setTokenUser();
  const { data } = await instance.patch('/user/update', body);
  console.log('data', data);
  return data;
};
