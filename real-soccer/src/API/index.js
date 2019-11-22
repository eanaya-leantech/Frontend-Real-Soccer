import {Auth} from "./services/Auth";
import {User} from "./services/User";


class API {
    authService = new Auth();
    userService = new User();
}

export default new API();
