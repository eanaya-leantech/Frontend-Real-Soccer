const initialState = {};
export const user = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state
            };
        default:
            return state;
    }
};
