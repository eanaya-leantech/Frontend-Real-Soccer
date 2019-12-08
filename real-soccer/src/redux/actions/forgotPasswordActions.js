import * as actionsTypes from "./actionsTypes";

export const recoverPasswordStart = payload => {
  return {
    type: actionsTypes.RECOVER_PASSWORD_START,
    payload
  };
};

export const recoverPasswordSuccess = payload => {
  return {
    type: actionsTypes.RECOVER_PASSWORD_SUCCESS,
    payload
  };
};

export const recoverPasswordError = payload => {
  return {
    type: actionsTypes.RECOVER_PASSWORD_ERROR,
    payload
  };
};