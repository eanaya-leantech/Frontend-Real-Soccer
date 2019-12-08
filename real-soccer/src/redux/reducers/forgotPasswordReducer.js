import * as actionsTypes from "../actions/actionsTypes";

const initialState = { error: null, isLoading: null, forgotPasswordConfirm: null };

export const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.RECOVER_PASSWORD_START:
      return {
        ...state,
        isLoading: true
      };
    case actionsTypes.RECOVER_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forgotPasswordConfirm: action.payload
      };
    case actionsTypes.RECOVER_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};