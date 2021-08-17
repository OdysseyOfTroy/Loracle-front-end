import http from "../../http-common";

class DashboardService {
  index() {
    return http.get("/containers");
  }

  create(title, description) {
    let params = {};
    params["container"] = {};
    params["container"]["title"] = title;
    params["container"]["description"] = description;
    return http.post("/containers", params);
  }

  update(id, param, value) {
    let params = {};
    params["container"] = {};
    params["container"][param] = value;
    return http.put(`/containers/${id}`, params);
  }

  delete(id) {
    return http.delete(`/containers/${id}`);
  }
}

export default new DashboardService();
