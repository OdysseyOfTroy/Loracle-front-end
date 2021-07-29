import http from "../../http-common";

class SidebarService {
    index() {
        return http.get("/containers/2/categories");
    }

}

export default new SidebarService();