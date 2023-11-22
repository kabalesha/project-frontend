export const showModalSelector = state => state.modal;
export const quantityDrinkSelector = state => state.portion;
export const currentUserEmailSelector = state => state.auth.profile;
export const selectorUserProfile = state => state.auth.profile;
export const selectUserToken = state => state.auth.token;
export const isAuth = state => state.auth.isLoading;
export const getCurrentToken = state => state.profile.access_token;
export const selectIsAuth = state => Boolean(state.auth.access_token);
