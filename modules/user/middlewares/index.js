const db = require('../../../models');
const CustomErrors = require('../../core/utils/CustomErrors');

const { User } = db;

const findUser = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: CustomErrors.USER_NOT_FOUND_ERROR.MESSAGE });
    }
    req.entity = user;
    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  findUser,
};
