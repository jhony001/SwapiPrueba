const Swapi = require("../models/Swapi");

async function getPlanets(req, res, next){
    const planets = await Swapi.get();
    res.json(planets);
}

module.exports = {
    getPlanets
}