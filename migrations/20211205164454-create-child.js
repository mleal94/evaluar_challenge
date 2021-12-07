module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Child', {
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
      PersonId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Person',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, { tableName: 'Child' });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Child');
  },
};
