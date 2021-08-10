import http from "../../http-common";

class CategoryService {
  index(containerId) {
    return http.get(`/containers/${containerId}/categories`);
  }

  get(containerId, id) {
    return http.get(`/containers/${containerId}/categories/${id}`);
  }

create(containerId, name, description) {
  let params = {};
  params["category"] = {};
  params["category"]["name"] = name;
  params["category"]["description"] = description;
  return http.post(`/containers/${containerId}/categories`, params);
}
}

export default new CategoryService;
