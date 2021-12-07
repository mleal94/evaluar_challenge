const jwt = require('jsonwebtoken');
const config = require('../../../config/config.json');
const CustomErrors = require('./CustomErrors');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(401).json({ message: CustomErrors.MISSING_TOKEN_ERROR.MESSAGE });
  else {
    try {
      const withOutBearer = token.split('Bearer ')[1];
      const user = await jwt.verify(withOutBearer, config.EVALUAR_APP_SECRET);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: CustomErrors.MISSING_TOKEN_ERROR });
    }
  }
};

module.exports = {
  verifyToken,
};
