import http from "../../http-common"

class IdentifierService {
  index(containerId, categoryId) {
    return http.get(`/containers/${containerId}/categories/${categoryId}/identifiers`);
  }
}

export default new IdentifierService;