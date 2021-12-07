const { DEFAULT_PROJECTIONS } = require('../constanst');
const CustomErrors = require('../../core/utils/CustomErrors');
const db = require('../../../models');
const { Regex } = require('../../core/utils');

const { Child } = db;
class ChildService {
  async create(req, res) {
    try {
      const { body } = req;
      const nameRegex = new RegExp(Regex.NAME);
      if (!nameRegex.test(body.name)) {
        return res.status(400).json({ message: CustomErrors.WRONG_VALUE_NAME_ERROR });
      }

      const idRegex = new RegExp(Regex.NUMBER);
      if (!idRegex.test(body.PersonId)) {
        return res.status(400).json({ message: CustomErrors.WRONG_DATATYPE_PERSON_ID });
      }
      delete body.id;
      body.PersonId = +body.PersonId;
      const newChild = await Child.create(body);
      const childDb = await Child.findByPk(newChild.id, {
        attributes: DEFAULT_PROJECTIONS,
        raw: true,
      });
      return res.status(201).json(childDb);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async update(req, res) {
    try {
      const { entity, body: updatedData } = req;
      // ignoring internal fields
      delete updatedData.id;
      const nameRegex = new RegExp(Regex.NAME);
      if (updatedData.name && !nameRegex.test(updatedData.name)) {
        return res.status(400).json({ message: CustomErrors.WRONG_VALUE_NAME_ERROR });
      }
      const updated = await entity.update(updatedData);
      return res.status(200).json(updated);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async remove(req, res) {
    try {
      const { entity } = req;
      await Child.destroy({
        where: {
          id: entity.id,
        },
      });
      return res.status(200).json({ message: 'Child removed successfully' });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  get(req, res) {
    try {
      const { entity } = req;
      return res.status(200).json(entity);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async list(req, res) {
    try {
      const result = await Child.findAll();
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new ChildService();
