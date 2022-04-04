const { Sequelize } = require('sequelize')
const database = require('../database')
const Marca = require('./Marca')

const Carro = database.define('carro', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'carro_id'
  },
  modelo: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: 'carro_modelo'
  },
  marca_id: {
    type: Sequelize.INTEGER,
    field: 'carro_marca_id'
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'carro_ano'
  },
  cor: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: 'carro_cor'
  }
}, {
  timestamps: false,
  tableName: 'carros'
})

Carro.belongsTo(Marca, { 
  foreignKey: 'marca_id' 
})

Marca.hasMany(Carro, {
  foreignKey: 'marca_id'
})

module.exports = Carro