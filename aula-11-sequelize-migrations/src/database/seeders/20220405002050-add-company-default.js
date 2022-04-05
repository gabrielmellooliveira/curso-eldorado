'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      { name: 'Chevrolet' },
      { name: 'Renault' },
      { name: 'Nissan' },
      { name: 'Honda' },
      { name: 'Toyota' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
