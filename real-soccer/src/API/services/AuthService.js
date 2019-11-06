import {FETCH} from '../fetch';
import {POST} from "../routes";

export class AuthService {
    static async auth(payload) {
        try {
            const data = FETCH('POST', POST.auth, {...payload});
            //funcion que recibe data, la evalua y retorna.
            // return validateData(data);
            return data;
        } catch (e) {
            //funcion que cachea los errores
        }
    }
}
