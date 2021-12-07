const secret = 'BsvxfyGdmRMahlESioFjFSLnfuvu8pz5';
const bcrypt = require('bcrypt');
const { genSalt } = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = await genSalt(10);
    await queryInterface.bulkInsert('User', [{
      salt,
      email: 'admin@admin.admin',
      password: await bcrypt.hash('123456.Abd', salt),
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};
