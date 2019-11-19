const initialState = {
    count:0
};
export const other = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_OTHER':
            return {
                ...state,
                count: state.count+1
            };
        default:
            return state;
    }
};
