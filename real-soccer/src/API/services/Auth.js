import {FETCH} from "../fetch";
import {authRoutes} from "../routes/auth";
import {loadStorage} from "../../tools/storage";

export class Auth {
    /**
     *
     * @param payload
     * @returns {Promise<unknown|*>}
     */
    async auth(payload) {
        try {
            const response = FETCH('post', authRoutes.auth, payload);
            //here validate response data.
            return response;
        } catch (error) {
            return error;
        }
    }

    /**
     *
     * @param payload
     * @returns {Promise<unknown|*>}
     */
    async register(payload) {
        try {
            const response = FETCH('post', authRoutes.register, payload);
            //here validate response data.
            return response;
        } catch (error) {
            return error;
        }
    }

    /**
     *
     * @param payload
     * @returns {Promise<unknown|*>}
     */
    async forgotPassword(payload) {
        try {
            const response = FETCH('post', authRoutes.forgotPassword, payload);
            //here validate response data.
            return response;
        } catch (error) {
            return error;
        }
    }

    /**
     *
     * @returns {any | undefined | boolean}
     */
    isAuthenticated() {

        const {token} = loadStorage()||{};
        return token
    }
}
