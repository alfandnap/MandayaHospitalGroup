const { Product, Sequelize } = require('../models')
const { Op } = Sequelize;


class ControllerProduct {

  static async getAll(req, res, next) {
    try {
      const { location, date, capacity } = req.query;
      const paramQuerySQL = {};

      if (date !== '' && typeof date !== 'undefined') {
        const pushedDate = []
        const query = date.split(',').map(el => {
          pushedDate.push(el)
        })

        paramQuerySQL.where = {
          date: {
            [Op.between]: pushedDate
          }
        }
      }

      if (capacity !== '' && typeof capacity !== 'undefined') {
        if (paramQuerySQL.where) {
          paramQuerySQL.where.capacity = {
            [Op.gte]: capacity,
          };
        } else {
          paramQuerySQL.where = {
            capacity: {
              [Op.gte]: capacity,
            },
          };
        }
      }
  
      if (location !== '' && typeof location !== 'undefined') {
        if (paramQuerySQL.where) {
          paramQuerySQL.where.location = location;
        } else {
          paramQuerySQL.where = {
            location: location,
          };
        }
      }

      const results = await Product.findAll(paramQuerySQL);

      res.status(200).json(results);

    } catch (error) {
      next(error)
    }
  }

  static async getById(req, res, next) {
    try {
      const {id} = req.params

      const productById = await Product.findByPk(id)

      if (!productById) {
        throw {name: 'NOTFOUND'}
      }

      res.status(200).json(productById)

    } catch (error) {
      next(error)
    }
  }

}

module.exports = ControllerProduct