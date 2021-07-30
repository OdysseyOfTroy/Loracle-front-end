import http from "../../http-common"

class DashboardService {
    index() {
        return http.get("/containers");
    }

    create(value) {
        let params = {};
        params["container"] = {};
        params["container"]["title"] = value;
        params["container"]["description"] = value;

        return http.post("/containers", params);
    }

    update(id, param, value) {
        let params = {};
        params["container"] = {};
        params["container"][param] = value;
    
        return http.put(`/container/${id}`, params);
    }

    delete(id) {
        return http.delete(`/container/${id}`);
    }
}

export default new DashboardService;