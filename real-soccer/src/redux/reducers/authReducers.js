const initialState = { userData: {}, isLoading: false, error: null};
export const signProccess = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,  userData: action.userData
            };
        case 'SIGN_IN_ERROR':

            return {
                ...state, error: action.error
                
            }
        case 'SIGN_IN_LOADING':
            return {
                ...state, isLoading: action.isLoading
            }
        case 'SIGN_OUT':
            return {} 
        default:
            return state;
    }
};
