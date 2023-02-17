const homeRoute = require("./homeRoute");

const initRoutes = (app) => {
  app.use("/api/v1/home", homeRoute);
};

module.exports = initRoutes;
