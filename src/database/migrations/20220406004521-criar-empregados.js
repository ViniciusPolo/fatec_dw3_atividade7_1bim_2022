'use strict';

const { query } = require("express");


module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('empregados', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      departamento_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'departamentos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      emp_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      emp_funcao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      emp_turno: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      emp_sexo: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      emp_data_admissao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull:false,
      }
    });
  },


  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('empregados');
  }
}

  