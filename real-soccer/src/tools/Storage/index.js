export const loadState = async (key = null) => {
    try {
        const serializedData = await localStorage.getItem(key || 'state');
        return (serializedData === null) ? undefined : JSON.parse(serializedData);
    } catch (error) {
        return undefined;
    }
};
export const saveState = (state, key) => {
    try {
        const serializedData = JSON.stringify(state);
        localStorage.setItem(key, serializedData)
    } catch (error) {
        return undefined;
    }
};

export const persistor  = (store, key = null, whileList = [] ) => {
    try {
        const state = store.getState();
        if(whileList.length){
            console.log(state);
        }
        // let serializedData = JSON.stringify(state);
        // localStorage.setItem('state', serializedData)
    } catch (error) {
        return undefined;
    }
};
