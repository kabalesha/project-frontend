import axios from 'axios';
import { setToken } from './ApiAuthUser';
import { useSelector } from 'react-redux';
import { getCurrentToken } from '../redux/selectors';

// export const addPortionOfWater = async body => {
//   const a = setToken(
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWI1ODRiODI0NWIzZjI4OTA1NzAzZiIsImlhdCI6MTcwMDU4NTE3NywiZXhwIjoxNzAwNjY3OTc3fQ.cWJIrFoxVWxfn8xHNET_1GWzf9i7Xrggif4Gf8Q5X9k'
//   );

//   console.log('add', body);
//   const data = await instance.post('/water/add', body);
//   console.log('data', data);
//   return data;
// };

// export const getStats = async body => {
//   try {
//     const data = await instance.get('/water/stats', body);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const instance = axios.create({
  baseURL: 'https://project-backend-7eyy.onrender.com/api',
  // baseURL: 'http://localhost:4000/api',
});

export const setTokenUser = () => {
  localStorage.getItem('token');
  const a = localStorage.getItem('token');
  return (instance.defaults.headers.common['Authorization'] = `Bearer ${a}`);
};

export const portonWater = () => {};

export const getWaterForMonth = async month => {
  setTokenUser();
  const data = await instance.get(`/water/month/${month}`);
  return data;
};

export const addPortionOfWater = async body => {
  setTokenUser();
  console.log('body', body);
  const data = await instance.post('/water/add', body);
  console.log('data', data);
  return data;
};
export const apiDeleteWater = async id => {
  setTokenUser();
  console.log('id', id);
  const { data } = await instance.delete(`/water/delete/${id}`);
  console.log('data', data);
  return data;
};
export const apiRemoveWater = async ({ id, body }) => {
  setTokenUser();

  const { data } = await instance.patch(`/water/update/${id}`, body);

  return data;
};
export const getPortionOfWaterToday = async () => {
  setTokenUser();

  const { data } = await instance.get('/water/today');
  console.log(data);
  return data;
};
export const getDalyNorma = async () => {
  setTokenUser();

  const { data } = await instance.patch('/update/dailyNorma');

  return data;
};
