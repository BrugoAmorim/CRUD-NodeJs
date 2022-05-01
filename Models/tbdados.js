
const Sequelize = require('./banco').Sequelize;
const Banco = require('./banco').Banco;

const Informacoes = Banco.define('tbInformacoes', {

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    datanascimento: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Informacoes;
// Informacoes.sync({force: true});