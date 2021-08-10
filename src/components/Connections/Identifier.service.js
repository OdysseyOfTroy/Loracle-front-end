import http from "../../http-common"

class IdentifierService {
  index() {
    return http.get(`/containers/2/categories/2/identifiers`);
  }
}

export default new IdentifierService;