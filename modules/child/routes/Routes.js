const { Router } = require('express');

const ChildRouter = Router();
const { ChildService } = require('../services');
const { findChild } = require('../middlewares');
const { verifyToken } = require('../../core/utils/VerifyToken');

const prefix = '/child';

ChildRouter.post(`${prefix}`, verifyToken, ChildService.create);
ChildRouter.post(`${prefix}/list`, verifyToken, ChildService.list);
ChildRouter.get(`${prefix}/:id`, [findChild, verifyToken], ChildService.get);
ChildRouter.patch(`${prefix}/:id`, [findChild, verifyToken], ChildService.update);
ChildRouter.delete(`${prefix}/:id`, [findChild, verifyToken], ChildService.remove);

module.exports = ChildRouter;
