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
  const result = await User.destroy({ where: { id } }); // primero que todo localizar el usuario 
  if (!result) return res.status(404).json('User not found 😕');

  return res.sendStatus(204);
});

// una forma
// const update = catchError(async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findByPk(id);
//   if (!user) return res.status(404).json('User not found 😕');

//   const userUpdate = await user.update(req.body);
//   return res.status(200).json(userUpdate);
// });

// otra forma
const update = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.update(req.body, { where: { id }, returning: true });

  if (user[0] === 0) return res.sendStatus(404);
  return res.status(200).json(user[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
}