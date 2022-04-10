'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('departamentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      dep_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      dep_local: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      dep_responsavel: {
        type: Sequelize.STRING(60),
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
    return queryInterface.dropTable('departamentos');
  }
};