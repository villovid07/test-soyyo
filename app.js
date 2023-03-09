require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

const routesApi = require("./app_api/routes/index");
app.use("/", routesApi);
// configuracion del servidor de node
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
