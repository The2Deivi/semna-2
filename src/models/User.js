//!User -> users



//modelo:User --- orm:sequelize-- -> table:users

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

//En Mayusculas y singular  // en minusculas y singular
const User = sequelize.define('user', { //!users
  //Definimos las columnas aqui
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = User;