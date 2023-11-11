import { authReducer } from './auth/sliceUser';
import { portionDrink } from './portionOfDrinking/slicePortionOfDrinking';

export const reducer = {
  auth: authReducer,
  portion: portionDrink,
};
