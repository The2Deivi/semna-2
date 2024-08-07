const { getAll, create, getOne, destroy, update } = require('../controllers/car.controllers');
const express = require('express');

const carRouter = express.Router();

carRouter.route("/") //rutas estaticas
  .get(getAll)
  .post(create);

carRouter.route("/:id") // rutas dinamicas
  .get(getOne)
  .delete(destroy)
  .put(update)

module.exports = carRouter;