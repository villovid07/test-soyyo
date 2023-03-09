const sendJsonResponse = (res, status, data) => {
  res.status(status);
  res.json(data);
};

module.exports = {
  sendJsonResponse,
};
