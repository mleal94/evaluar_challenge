module.exports = (sequelize, Sequelize) => {
  const Child = sequelize.define('Child', {
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
  }, { tableName: 'Child' });
  Child.associate = function () {
    const { models } = sequelize;
    Child.belongsTo(models.Person);
  };
  return Child;
};
