module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
    salt: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    createdAt: {
      defaultValue: new Date(),
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      defaultValue: new Date(),
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, { tableName: 'User' });

  return User;
};
