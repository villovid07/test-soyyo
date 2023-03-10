const min = 1;
const max = 20;

/**
 * Validacion de los parametros enviados al body
 * @param {*} body
 * @returns
 */
const validateParameters = (body) => {
  try {
    const { startId, endId } = body;
    if (startId && endId) {
      if (validateEveryParameter(startId) && validateEveryParameter(endId)) {
        return startId <= endId;
      }
      return false;
    }
  } catch (error) {
    return false;
  }
};

/**
 * Validacion de las condiciones particulares de cada parametro de entrada
 * @param {*} parameter
 * @returns
 */
const validateEveryParameter = (parameter) => {
  let type = typeof parameter;
  if (type == "number" && parameter >= min && parameter <= max) {
    return true;
  }
  return false;
};

/**
 * Formateo de la entidad que se obtiene desde el servicio
 * @param {*} entityOrigin
 * @returns
 */
const formatEntity = (entityOrigin) => {
  const { entityId, name, identificationNumber, expirationDate, contactName, contactMail, logo } = entityOrigin;
  const isValid = !!name && !!expirationDate && !!identificationNumber && !!contactMail && !!contactName;

  return {
    entity: {
      entityId,
      name,
      identificationNumber,
      expirationDate,
      contactName,
      contactMail,
      logo,
    },
    isValid,
  };
};

module.exports = {
  validateParameters,
  formatEntity,
  validateEveryParameter,
};
