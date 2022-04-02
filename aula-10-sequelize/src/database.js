const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('testeMySql2', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
})

module.exports = sequelize