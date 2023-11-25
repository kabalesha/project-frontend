import { authReducer } from './auth/sliceUser';
import { modalReducer } from './showModal/sliceShowModal';
// import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';
import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';
import { combineReducers } from 'redux';
import { progressDrink } from './portionOfDrinking/sliceProgressDrink';
import { modalNameReducer } from './changeModal/changeModal';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const persistAuthConfig = {
  key: 'token',
  storage,
  whiteList: ['access_token'],
};
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedAuthReducer,
  portion: portionDrink,
  modal: modalReducer,
  progress: progressDrink,
  modalName: modalNameReducer,
  portion: portionDrink,
});
