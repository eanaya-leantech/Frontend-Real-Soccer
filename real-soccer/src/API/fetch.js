import axios from 'axios';

/**
 *
 * @param method
 * @param endpoint
 * @param params
 * @param url
 * @returns {Promise<unknown>}
 * @constructor
 */
export const FETCH = (method, endpoint, params = {}, url = null) => {
    const BASE_URL = 'http:/';
    const Authorization = localStorage.getItem('token');
    const URL = url || `${BASE_URL}${endpoint}`;
    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            Authorization
        }
    });

    return new Promise(async (resolve, reject) => {
        const _method = instance[method.toLocaleLowerCase()]
        if (_method) {
            try {
                const response = await instance[_method](URL, params);
                return resolve(response);
            } catch (error) {
                return reject(error);
            }
        }
        return reject(new Error('method not is valid'))
    });
};
