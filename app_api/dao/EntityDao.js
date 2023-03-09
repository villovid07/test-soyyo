const { messages } = require("../helpers/messages");
const { doRequest } = require("../helpers/Request");
const { formatEntity } = require("../helpers/Validations");

const url = process.env.URL;

/**
 * Funcion que permite hacer la llamada a la peticion y consolidar los resultados de la
 * busqueda de una entidad en particular
 * @param {*} code
 * @returns
 */
const findEntityByCode = (code) => {
  return new Promise(async (resolve, reject) => {
    try {
      let configPeticion = {
        method: "get",
        url: `${url}${code}`,
      };
      let resEntity = await doRequest(configPeticion);
      let { isValid, entity } = formatEntity(resEntity);
      if (isValid) {
        resolve(entity);
      } else {
        throw { message: messages.NO_VALID_ATTR, code: 404 };
      }
    } catch (error) {
      reject({ ...error, message: error.message + code });
    }
  });
};

module.exports = {
  findEntityByCode,
};
