const express = require("express");
const app = express();


const PlanetsRouter = require("./routes/planets.router");

//settings
app.set("port", 3000);

app.use(PlanetsRouter);

module.exports = app;