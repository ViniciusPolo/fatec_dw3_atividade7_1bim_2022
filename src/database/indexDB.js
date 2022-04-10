const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)
const departamentos = require('../api/models/DepartamentosModels')
const empregados = require ('../api/models/EmpregadosModels')

try{
    //conexao.authenthicate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida =(')
}

departamentos.init(conexao)
empregados.init(conexao)

departamentos.associate(conexao.models)
empregados.associate(conexao.models)

module.exports = conexao