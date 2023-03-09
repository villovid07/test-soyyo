const Express = require("express");
const { filterEntitiesByCode } = require("../controllers/EntitiesController");
const router = Express.Router();

router.post("/entities/filters", filterEntitiesByCode);

module.exports = router;
