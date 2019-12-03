import * as actionsTypes from "../actions/actionsTypes";

const initialState = { error: null, isLoading: null, registerConfirm: null };
export const register = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.REGISTER_START:
      return {
        ...state,
        isLoading: true
      };
    case actionsTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registerConfirm: action.payload
      };
    case actionsTypes.REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
