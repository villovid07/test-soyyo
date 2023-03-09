const { findEntityByCode } = require("../dao/EntityDao");
const { messages } = require("../helpers/messages");
const { sendJsonResponse } = require("../helpers/Respuesta");
const { validateParameters } = require("../helpers/Validations");

/**
 * Filtro de entidades metodo que se expone para realizar la busqueda
 * @param {*} req
 * @param {*} res
 */
const filterEntitiesByCode = async (req, res) => {
  try {
    let arrEntitiesResultado = [];
    let isValidParameters = validateParameters(req.body);
    if (isValidParameters) {
      arrEntitiesResultado = await buildFilterEntities(req.body);
      sendJsonResponse(res, 200, { items: arrEntitiesResultado });
    } else {
      throw { message: messages.NO_VALID_PARAMS, code: 400 };
    }
  } catch (error) {
    sendJsonResponse(res, error.code ? error.code : 500, { error: error.message });
  }
};

/**
 * Funcion que permite construir las entidades que se filtran
 * @param {*} body
 * @returns
 */
const buildFilterEntities = (body) => {
  var arrFilterEntities = [];
  return new Promise(async (resolve, reject) => {
    const { startId, endId } = body;
    try {
      for (let iCode = startId; iCode <= endId; iCode++) {
        const entityFound = await findEntityByCode(iCode);
        arrFilterEntities = [...arrFilterEntities, entityFound];
      }
      resolve(arrFilterEntities);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  filterEntitiesByCode,
};
