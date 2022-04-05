const { Sequelize } = require('sequelize')
const configDatabase = require('../config/database')

const sequelize = new Sequelize(configDatabase)

module.exports = sequelize