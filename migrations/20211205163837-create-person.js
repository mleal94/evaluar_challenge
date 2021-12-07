module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Person', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          is: {
            args: ['^[a-z]+$', 'i'],
            msg: 'Only letters allowed',
          },
          len: {
            args: [1, 150],
            msg: 'The name length is not in this range',
          },
        },
      },
      lastName: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [1, 150],
            msg: 'The name length is not in this range',
          },
        },
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['MALE', 'FEMALE', 'OTHERS'],
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, { tableName: 'Person' });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Person');
  },
};
