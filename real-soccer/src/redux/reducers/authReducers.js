const initialState = { userData: {}, isLoading: false, error: null};
export const signProccess = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN_USER':
            return {
                ...state, isLoading: true
            }
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,  userData: action.userData, isLoading: false
            };
        
        case 'SIGN_IN_ERROR':

            return {
                ...state, error: action.error, isLoading: false 
            }

        default:
            return state;
    }
};
