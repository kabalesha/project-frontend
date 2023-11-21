import { authReducer } from './auth/sliceUser';
import { modalReducer } from './showModal/sliceShowModal';
// import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';
import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  auth: authReducer,
  portion: portionDrink,
  modal: modalReducer,
});
