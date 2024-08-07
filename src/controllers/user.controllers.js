const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const result = await User.findAll(); //es como si en sql: select * from users;
  return res.status(200).json(result)
});

const create = catchError(async (req, res) => {
  const result = await User.create(req.body); // el req.body es el objeto que se envia en el body del request
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  // const id = req.params.id; // id del usuario
  const { id } = req.params; // es el mismo al de arriba, solo mas profesional o buena practica
  const result = await User.findByPk(id);
  return res.json(result);
});

const destroy = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await User.destroy({ where: { id } });
  if (!result) return res.status(404).json('User not found 😕');

  return res.sendStatus(204);
});

module.exports = {
  getAll,
  create,
  getOne,
  destroy
}