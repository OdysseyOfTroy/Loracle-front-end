import http from "../../http-common"

class InformationService {
  index(containerId, categoryId, identifierId) {
    return http.get(`/containers/${containerId}/categories/${categoryId}/identifiers/${identifierId}/information`);
  }

  delete(containerId, categoryId, identifierId, id) {
    return http.delete(
      `/containers/${containerId}/categories/${categoryId}/identifiers/${identifierId}/information/${id}`
    );
  }
}

export default new InformationService;