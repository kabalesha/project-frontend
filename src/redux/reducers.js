import { authReducer } from './auth/sliceUser';
import { modalReducer } from './showModal/sliceShowModal';
// import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';
import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';

export const reducer = {
  auth: authReducer,
  portion: portionDrink,
  modal: modalReducer,
};
