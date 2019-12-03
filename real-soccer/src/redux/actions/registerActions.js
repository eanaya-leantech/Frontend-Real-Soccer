import * as actionsTypes from "./actionsTypes";

export const registerStart = payload => {
  return {
    type: actionsTypes.REGISTER_START,
    payload
  };
};

export const registerSuccess = payload => {
  return {
    type: actionsTypes.REGISTER_SUCCESS,
    payload
  };
};

export const registerError = payload => {
  return {
    type: actionsTypes.REGISTER_ERROR,
    payload
  };
};
