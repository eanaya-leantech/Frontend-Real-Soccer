const initialState = {};
export const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE':
            return {
                ...state,  user: action.user
            };
        case 'UPDATE':
            return {...state, user: 'nick'} 
        default:
            return state;
    }
};
