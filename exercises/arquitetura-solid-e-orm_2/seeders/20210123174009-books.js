'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', 
    [
      {
        title: 'As aventuras de um jovem qualquer',
        author: 'Jorgin',
        pageQuantity: '529',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'As desventuras de uma jovem qualquer',
        author: 'Ly',
        pageQuantity: '736',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
