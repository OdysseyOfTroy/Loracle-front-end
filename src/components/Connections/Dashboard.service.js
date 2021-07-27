import http from "../../http-common"

class DashboardDataService {
    index() {
        return http.get("/containers");
    }

    get(id) {
        return http.get("/containers/${id}");
    }

    create(value) {
        let params = {};
        params["container"] = {};
        params["container"]["title"] = value;

        return http.post("/containers", params);
    }
}

export default new DashboardDataService;