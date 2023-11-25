import axios from 'axios';
import { setToken } from './ApiAuthUser';
import { useSelector } from 'react-redux';
import { getCurrentToken } from '../redux/selectors';
export const instance = axios.create({
  baseURL: 'https://project-backend-7eyy.onrender.com/api',
});

export const portonWater = () => {};
export const getPortionOfWater = () => {};

export const addPortionOfWater = async body => {
  const a = setToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWI1ODRiODI0NWIzZjI4OTA1NzAzZiIsImlhdCI6MTcwMDU4NTE3NywiZXhwIjoxNzAwNjY3OTc3fQ.cWJIrFoxVWxfn8xHNET_1GWzf9i7Xrggif4Gf8Q5X9k'
  );

  console.log('add', body);
  const data = await instance.post('/water/add', body);
  console.log('data', data);
  return data;
};

export const getWaterForMonth = async body => {
  const data = await instance.get('/water/month', body);
  console.log(data);
  return data;
};

export const getStats = async body => {
  const data = await instance.get('/water/stats', body);
  console.log(data);
  return data;
};
