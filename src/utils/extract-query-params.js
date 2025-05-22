//query:?filter=fabiano
//query.substr(1): filter=fabiano
/**
 * @description esse query.substr(1).split("&"), é pra tratar os cases de mais de um query params
 */
//query.substr(1).split("&"): ['filter=fabiano', 'page=2']

/**
query
    .substr(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [] = param.split("=");
    }, {}) : vai me devolver assim => ['filter', 'fabiano'], ['page', '2']
 */

/**
 *  query
    .substr(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});

    vai me retornar: 
 */

export function extractQueryParams(query) {
  return query
    .substr(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});
}
