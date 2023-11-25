import { authReducer } from './auth/sliceUser';
import { modalReducer } from './showModal/sliceShowModal';
// import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';
import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';
import { combineReducers } from 'redux';
import { progressDrink } from './portionOfDrinking/sliceProgressDrink';

export const reducer = combineReducers({
  auth: authReducer,
  // portion: portionDrink,
  modal: modalReducer,
  progress: progressDrink,
  portion: portionDrink,
});