import http from "../../http-common";

class NavigationService {
    index() {
        return http.get("/users/1/containers/1/categories");
    }

}

export default new NavigationService();