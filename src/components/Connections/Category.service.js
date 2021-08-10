import http from "../../http-common";

class CategoryService {
  index() {
    return http.get(`/containers/2/categories`);
  }

  get(containerId, id) {
    return http.get("/containers/${containerId}/categories/${id}");
  }

create(name, description) {
  let params = {};
  params["category"] = {};
  params["category"]["name"] = name;
  params["category"]["description"] = description;
  return http.post("/containers/2/categories", params);
}
}

export default new CategoryService;
