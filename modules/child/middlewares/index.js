const db = require('../../../models');
const CustomErrors = require('../../core/utils/CustomErrors');

const { Child } = db;
const findChild = async (req, res, next) => {
  try {
    const { params: { id } } = req;

    const person = await Child.findByPk(id);
    if (!person) {
      return res.status(404).json({ message: CustomErrors.PERSON_NOT_FOUND_ERROR.MESSAGE });
    }
    req.entity = person;
    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  findChild,
};
