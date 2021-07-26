import http from "../../http-common";

class CategoryDataService {
    index() {
        return http.get("/containers/${containerId/categories");
    }

    get(containerId, id) {
        return http.get("/containers/${containerId}/categories/${id}");
    }

}

export default new CategoryDataService;
