const { DEFAULT_PROJECTIONS } = require('../constanst');
const CustomErrors = require('../../core/utils/CustomErrors');
const db = require('../../../models');
const { Regex } = require('../../core/utils');

const { Person, Child, Sequelize } = db;
class PersonService {
  async create(req, res) {
    try {
      const { body } = req;
      if (!body.gender) {
        return res.status(400).json({ message: CustomErrors.MISSING_GENDER_ERROR });
      }
      const nameRegex = new RegExp(Regex.NAME);
      if (!nameRegex.test(body.name)) {
        return res.status(400).json({ message: CustomErrors.WRONG_VALUE_NAME_ERROR });
      }
      if (!body.name) {
        return res.status(400).json({ message: CustomErrors.MISSING_NAME_ERROR });
      }
      if (!body.lastName) {
        return res.status(400).json({ message: CustomErrors.MISSING_LASTNAME_ERROR });
      }
      const numberRegex = new RegExp(Regex.NUMBER);
      if (!numberRegex.test(body.age)) {
        return res.status(400).json({ message: CustomErrors.WRONG_DATATYPE_ERROR });
      }
      if (body.age) {
        body.age = +body.age;
      }
      delete body.id;
      const newPerson = await Person.create(body);
      const personDb = await Person.findByPk(newPerson.id, {
        attributes: DEFAULT_PROJECTIONS,
        raw: true,
      });
      return res.status(201).json(personDb);
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
      const lastName = new RegExp(Regex.NAME);
      if (updatedData.lastName && !lastName.test(updatedData.lastName)) {
        return res.status(400).json({ message: CustomErrors.WRONG_VALUE_LASTNAME_ERROR });
      }
      if (updatedData.age) {
        updatedData.age = +updatedData.age;
      }
      console.log(updatedData)
      const updated = await entity.update(updatedData);
      return res.status(200).json(updated);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async remove(req, res) {
    try {
      const { entity } = req;
      await Person.destroy({
        where: {
          id: entity.id,
        },
      });
      if (entity.ChildList.length) {
        const childIds = entity.ChildList.map((child) => child.id);
        await Child.destroy({
          where: {
            id: {
              [Sequelize.Op.in]: childIds,
            },
          },
        });
      }
      return res.status(200).json({ message: 'Person removed successfully' });
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
      const result = await Person.findAll({
        include: [
          {
            model: Child,
            as: 'ChildList',
          },
        ],
      });
      result.forEach((person) => {
        person.dataValues.childQuantity = person.ChildList.length;
        delete person.dataValues.ChildList;
      });
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new PersonService();
