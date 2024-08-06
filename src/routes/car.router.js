const { getAll, create, getOne } = require('../controllers/car.controllers');
const express = require('express');

const carRouter = express.Router();

carRouter.route("/")
  .get(getAll)
  .post(create);

carRouter.route("/:id")
  .get(getOne);

module.exports = carRouter;