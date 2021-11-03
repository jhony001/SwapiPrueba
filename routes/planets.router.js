const router = require("express").Router();
const PlanetsController = require("../controllers/planets.controller");

router.get("/planets", PlanetsController.getPlanets);

module.exports = router;