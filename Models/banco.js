const Sequelize = require('sequelize');
const Banco = new Sequelize('dadospessoais', 'root', '12345', {

    host: "localhost",
    dialect: "mysql"
});

module.exports = {Sequelize, Banco};