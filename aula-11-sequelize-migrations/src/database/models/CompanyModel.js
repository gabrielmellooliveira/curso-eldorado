const { Sequelize } = require('sequelize')
const database = require('../index')

const CompanyModel = database.define('companies', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false })

module.exports = CompanyModel