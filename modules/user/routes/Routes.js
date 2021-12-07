const { Router } = require('express');

const UserRouter = Router();
const { UserAuthentication } = require('../services');
const { findUser } = require('../middlewares');

const prefix = '/users';

UserRouter.post(`${prefix}/auth`, UserAuthentication.signIn);
module.exports = UserRouter;
