const axios = require("axios");

class Swapi{
    static async get(){
        const planets = await axios.get(`https://swapi.dev/api/planets`);
        return planets.data;
    }
}

module.exports = Swapi;