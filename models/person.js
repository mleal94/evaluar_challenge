module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define('Person', {
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
      defaultValue: false,
    },
    age: {
      type: Sequelize.INTEGER,
    },
  }, { tableName: 'Person' });
  Person.associate = function () {
    const { models } = sequelize;
    Person.hasMany(models.Child, {
      as: 'ChildList',
      foreignKey: 'PersonId',
    });
  };
  return Person;
};
