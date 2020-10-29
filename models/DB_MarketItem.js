/**
 * Inclufing all required dependencies
 */

const Sequelize = require('sequelize');
const db = require('../util/connect');


/**
 * Creating Item model with sequelize
 */

const Item = db.define('item', {
    name: {
        type: Sequelize.STRING
    },
    appid: {
        type: Sequelize.INTEGER
    },
    volume: {
        type: Sequelize.INTEGER
    },
    current_price: {
        type: Sequelize.INTEGER
    },
    lowest_price: {
        type: Sequelize.INTEGER
    },
    median_price: {
        type: Sequelize.INTEGER
    }
});

module.exports = Item;