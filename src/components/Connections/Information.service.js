import http from "../../http-common"

class InformationService {
  index(containerId, categoryId, indentifierId) {
    return http.get(`/containers/${containerId}/categories/${categoryId}/identifiers/${indentifierId}/information`);
  }
}

export default new InformationService;