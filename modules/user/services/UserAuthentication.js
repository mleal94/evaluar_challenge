const bcrypt = require('bcrypt');
const db = require('../../../models');
const { CustomErrors } = require('../../core/utils');
const UserTokenization = require('./UserTokenization');
const matchPassword = require('../../core/utils/MatchPassword');

const { User } = db;
class UserAuthentication {
  async signIn(req, res) {
    try {
      const { body } = req;
      if (!body.email) {
        return res.status(400).json({ message: CustomErrors.MISSING_EMAIL_ERROR.MESSAGE });
      }
      if (!body.password) {
        return res.status(400).json({ message: CustomErrors.MISSING_PASSWORD_ERROR.MESSAGE });
      }
      const { email } = body;
      const filter = {
        where: {
          email,
        },
      };

      const user = await User.findOne(filter, { raw: true });
      if (!user) {
        return res.status(404).send({ message: CustomErrors.USER_NOT_FOUND_ERROR.MESSAGE });
      }
      body.password = await bcrypt.hash(body.password, user.dataValues.salt);
      const validPassword = user.password === body.password;
      if (!validPassword) {
        return res.status(401).send({ auth: false, token: null });
      }
      const token = UserTokenization.getToken(user, res);
      if (token) {
        return res.status(200).json({ auth: true, token });
      }
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new UserAuthentication();
