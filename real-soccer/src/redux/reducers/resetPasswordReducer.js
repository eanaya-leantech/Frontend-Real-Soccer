import * as actionsTypes from "../actions/actionsTypes";

const initialState = { error: null, isLoading: null, resetPasswordConfirm: null };

export const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.RESET_PASSWORD_START:
      return {
        ...state,
        isLoading: true
      };
    case actionsTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resetPasswordConfirm: action.payload
      };
    case actionsTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};