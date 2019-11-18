import  { useReducer} from 'react';

const useSetState = (state) => {
    const reducer = (prevState, state) => ({...prevState, state});

    const [state, setState] = useReducer(reducer, state);

    return [state, setState];
};
