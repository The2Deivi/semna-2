const { getAll, create, getOne, destroy } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/") // representa "/users"
  .get(getAll)
  .post(create);

userRouter.route("/:id") // representa "/users/:id" los dos ":" puntos es el parametro
  .get(getOne)
  .delete(destroy);

module.exports = userRouter;