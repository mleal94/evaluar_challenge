const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../../config/.env' });

class UserTokenization {
  getToken(user) {
    try {
      return jwt.sign(user.dataValues, 'BsvxfyGdmRMahlESioFjFSLnfuvu8pz5');
    } catch (e) {
      return false;
    }
  }
}

// Singleton Instance
module.exports = new UserTokenization();
