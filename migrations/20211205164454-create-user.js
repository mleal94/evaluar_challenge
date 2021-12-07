module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      salt: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      createdAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: true,
        type: Sequelize.DATE,
      },
    }, { tableName: 'User' });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User');
  },
};
