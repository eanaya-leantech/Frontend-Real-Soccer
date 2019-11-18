import axios from 'axios';
import {loadStorage} from "../tools/storage";

export const FETCH = async (method, endpoint, payload = {}, url = null) => {

    const Authorization = await loadStorage('token');
    const URL = url || `${process.env.REACT_APP_BASE_URL}${endpoint}`;

    const instance = axios.create({
        headers: {
            'content-type': 'application/json',
            Authorization: Authorization ? `Bearer ${Authorization}` : undefined
        }
    });

    return new Promise(async (resolve, reject) => {
        const _method = method.toLocaleLowerCase();
        if (instance[_method]) {

            try {

                const response = await instance[_method](URL, payload);
                return resolve(response);

            } catch (error) {

                return reject(error);

            }
        }
        return reject(new Error('method not is valid'))
    });
};
