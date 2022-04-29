'use strict';
import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('news', 'author', {
      type: DataTypes.STRING,
    });
  },

  async down(queryInterface: QueryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('news', 'author');
  },
};
