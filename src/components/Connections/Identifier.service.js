import http from "../../http-common";

class IdentifierService {
  index(containerId, categoryId) {
    return http.get(
      `/containers/${containerId}/categories/${categoryId}/identifiers`
    );
  }

  create(containerId, categoryId, title) {
    let params = {};
    params["identifier"] = {};
    params["identifier"]["title"] = title;
    return http.post(
      `/containers/${containerId}/categories/${categoryId}/identifiers`,
      params
    );
  }

  update(containerId, categoryId, id, title) {
    let params = {};
    params["identifier"] = {};
    params["identifier"]["title"] = title;
    return http.put(
      `/containers/${containerId}/categories/${categoryId}/identifiers/${id}`,
      params
    );
  }

  delete(containerId, categoryId, id) {
    return http.delete(
      `/containers/${containerId}/categories/${categoryId}/identifiers/${id}`
    );
  }
}

export default new IdentifierService();
