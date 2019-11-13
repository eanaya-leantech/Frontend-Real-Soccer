export const loadStorage = (key = null) => {
    try {
        const serializedData = localStorage.getItem(key || 'state');
        return (serializedData === null) ? undefined : JSON.parse(serializedData);
    } catch (error) {
        throw new Error('');
    }
};
export const saveStorage = (state, key = 'state') => {
    try {
        const serializedData = JSON.stringify(state);
        localStorage.setItem(key, serializedData)
    } catch (error) {
        throw new Error('');
    }
};

export const persistStorage = (store, whiteList = [], key = 'persist') => {
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
