const min = 1;
const max = 20;

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

const validateEveryParameter = (parameter) => {
  let type = typeof parameter;
  if (type == "number" && parameter >= min && parameter <= max) {
    return true;
  }
  return false;
};

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
};
