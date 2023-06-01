const baseUrl = "http://localhost:4000";

function getParsedResponse(r) {
  return r.json();
}

const httpService = {
  getAll: function (resource) {
    return fetch(`${baseUrl}/${resource}`).then(getParsedResponse);
  },

  getById: function (resource, id) {
    return fetch(`${baseUrl}/${resource}/${id}`).then(getParsedResponse);
  },

  create: function (resource, body) {
    return fetch({
      url: `${baseUrl}/${resource}/${id}`,
      body,
    }).then(getParsedResponse);
  },
};

export default httpService;
