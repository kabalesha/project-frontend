import axios from 'axios';
import { setToken } from './ApiAuthUser';
export const instance = axios.create({
  baseURL: 'https://project-backend-7eyy.onrender.com/api',
});
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWQwYTE5MzQ3OTBlNGI4MTljNTk4NyIsImlhdCI6MTcwMDY4NzIzOSwiZXhwIjoxNzAwNzcwMDM5fQ.00m_fVBoaR2gJp9M7EszBm3iouX28xYKWTDs1WhSfks';
export const apiUserUpdate = async body => {
  setToken(token);

  const { data } = await instance.patch('/user/update', body);
  console.log('data', data);
  return data;
};
// export const apiUserUpdsateAvatar = async body => {
//   setToken(token);
//   const { data } = await instance.patch('/user/add-avatar', body);
//   console.log('data', data);
//   return data;
// };
