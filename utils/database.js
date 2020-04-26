const Sequelize = require('sequelize')

const DB_NAME = 'node-todo'
const DB_USERNAME = 'rambutan'
const DB_PASSWORD = 'admin'

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize