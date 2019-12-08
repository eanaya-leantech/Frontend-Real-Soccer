import * as actionsTypes from "./actionsTypes";

export const resetPasswordStart = payload => {
  return {
    type: actionsTypes.RESET_PASSWORD_START,
    payload
  };
};

export const resetPasswordSuccess = payload => {
  return {
    type: actionsTypes.RESET_PASSWORD_SUCCESS,
    payload
  };
};

export const resetPasswordError = payload => {
  return {
    type: actionsTypes.RESET_PASSWORD_ERROR,
    payload
  };
};