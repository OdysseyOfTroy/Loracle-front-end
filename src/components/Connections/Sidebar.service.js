import http from "../../http-common";

class SidebarService {
    index() {
        return http.get("/users/1/containers/1/categories");
    }

}

export default new SidebarService();