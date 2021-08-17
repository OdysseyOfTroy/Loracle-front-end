import http from "../../http-common";

class IdentifierService {
  index(containerId, categoryId) {
    return http.get(
      `/containers/${containerId}/categories/${categoryId}/identifiers`
    );
  }

  delete(containerId, categoryId, id) {
    return http.delete(
      `/containers/${containerId}/categories/${categoryId}/identifiers/${id}`
    );
  }
}

export default new IdentifierService();
