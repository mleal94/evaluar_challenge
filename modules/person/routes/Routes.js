const { Router } = require('express');

const PersonRouter = Router();
const { PersonService } = require('../services');
const { findPerson } = require('../middlewares');
const { verifyToken } = require('../../core/utils/VerifyToken');

const prefix = '/person';

PersonRouter.post(`${prefix}`, verifyToken, PersonService.create);
PersonRouter.post(`${prefix}/list`, verifyToken, PersonService.list);
PersonRouter.get(`${prefix}/:id`, [verifyToken, findPerson], PersonService.get);
PersonRouter.patch(`${prefix}/:id`, [verifyToken, findPerson], PersonService.update);
PersonRouter.delete(`${prefix}/:id`, [verifyToken, findPerson], PersonService.remove);

module.exports = PersonRouter;
