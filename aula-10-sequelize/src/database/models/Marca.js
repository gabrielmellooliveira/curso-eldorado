const { Sequelize } = require('sequelize')
const database = require('../database')

const Marca = database.define('marca', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'marca_id'
  },
  nome: {
    type: Sequelize.STRING(200),
    allowNull: false,
    field: 'marca_nome'
  },
}, {
  timestamps: false,
  tableName: 'marcas'
})

module.exports = Marca