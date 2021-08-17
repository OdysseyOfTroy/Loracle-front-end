import http from "../../http-common";

class InformationService {
  index(containerId, categoryId, identifierId) {
    return http.get(
      `/containers/${containerId}/categories/${categoryId}/identifiers/${identifierId}/information`
    );
  }

  create(containerId, categoryId, identifierId, infoTitle, info) {
    let params = {};
    params["information"] = {};
    params["information"]["infoTitle"] = infoTitle;
    params["information"]["info"] = info;
    return http.post(
      `/containers/${containerId}/categories/${categoryId}/identifiers/${identifierId}/information`,
      params
    );
  }

  update(containerId, categoryId, identifierId, id, infoTitle, info) {
    let params = {};
    params["information"] = {};
    params["information"]["infoTitle"] = infoTitle;
    params["information"]["info"] = info;
    return http.put(
      `/containers/${containerId}/categories/${categoryId}/identifiers/${identifierId}/information/${id}`,
      params
    );
  }

  delete(containerId, categoryId, identifierId, id) {
    return http.delete(
      `/containers/${containerId}/categories/${categoryId}/identifiers/${identifierId}/information/${id}`
    );
  }
}

export default new InformationService();
