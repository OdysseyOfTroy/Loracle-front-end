import http from "../../http-common"

class DashboardService {
    index() {
        return http.get("/containers");
    }

    create(value) {
        let params = {};
        params["container"] = {};
        params["container"]["title"] = value;

        return http.post("/containers", params);
    }
}

export default new DashboardService();