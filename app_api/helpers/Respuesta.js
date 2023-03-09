/**
 * Funcion que permite enviar respuestas en formato JSON
 * @param {*} res
 * @param {*} status
 * @param {*} data
 */
const sendJsonResponse = (res, status, data) => {
  res.status(status);
  res.json(data);
};

module.exports = {
  sendJsonResponse,
};
