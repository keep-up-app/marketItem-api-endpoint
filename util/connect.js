/**
 * Including all dependencies
 */

const Sequelize = require('sequelize');


/**
 * Creating new Database connection with params
 */


const name = process.env.DB_NAME;
const host = process.env.DB_SERVER;
const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;

module.exports = new Sequelize(name, user, pass, {
    host: host,
    dialect: 'mssql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});