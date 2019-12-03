export const loadStorage = (key = 'real-app') => {
    try {
        const serializedData = localStorage.getItem(key);
        return (serializedData === null) ? undefined : JSON.parse(serializedData);
    } catch (error) {
        return undefined;
    }
};
export const saveStorage = (state, key = 'real-app') => {
    try {
        const serializedData = JSON.stringify(state);
        localStorage.setItem(key, serializedData)
    } catch (error) {
        throw new Error('');
    }
};

export const persistStorage = (store, whiteList = [], key = 'app-persist') => {
    try {

        if (!store.getState()) {
            return new Error('');
        }

        let storage = null;
        const _store = store.getState();

        if (whiteList.length) {
            whiteList.forEach(list => {
                if (_store.hasOwnProperty(list)) {
                    storage = {
                        ...storage,
                        [list]: _store[list]
                    }
                }
            });
        }
        localStorage.setItem(key, JSON.stringify(storage || _store));
    } catch (error) {
        throw new Error('');
    }
};
