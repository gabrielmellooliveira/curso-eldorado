const { Sequelize } = require('sequelize')
const database = require('../index')
const CompanyModel = require('./CompanyModel')

const CarModel = database.define('cars', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  companyId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING(25),
    allowNull: false
  }
}, { timestamps: false })

CarModel.belongsTo(CompanyModel, { 
  foreignKey: 'companyId' 
})

CompanyModel.hasMany(CarModel, {
  foreignKey: 'companyId'
})

module.exports = CarModel