const bcrypt = require('bcrypt');

module.exports = async function (passwordStore, password) {
  const result = await bcrypt.compare(passwordStore, password);
  return result;
};
