const axios = require("axios");
const https = require("https");
const { messages } = require("./messages");

const CODE_SUCCESS = process.env.CODE_SUCCESS;

const doRequest = (config) => {
  return new Promise(async (resolve, reject) => {
    try {
      const agent = new https.Agent({
        rejectUnauthorized: false,
      });
      config.httpsAgent = agent;
      let axiosResponse = await axios(config);
      const { data, code } = axiosResponse.data;

      if (code == CODE_SUCCESS) {
        resolve(data);
      } else {
        throw { message: messages.NO_FOUND, code: 404 };
      }
    } catch (error) {
      reject({ message: error.message, code: error.code ? error.code : 500 });
    }
  });
};

module.exports = {
  doRequest,
};
