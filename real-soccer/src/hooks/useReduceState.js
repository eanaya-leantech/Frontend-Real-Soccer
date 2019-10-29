import  { useReducer} from 'react';

export const useReduceState = (initialState) => {

    const reducer = ((prevState, nextState) => {
        return {
            ...prevState,
            ...nextState
        }
    });

    const [state, setState] = useReducer(reducer, initialState);

    return [
        state,
        setState
    ]
};
