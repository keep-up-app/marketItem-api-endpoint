/**
 * Include all dependencies
 */

const axios = require('axios');
const MarketItem = require('../models/MarketItem');
// const DB_MarketItem = require('../models/DB_MarketItem');
const validator = require('../util/validator');

module.exports = {
    getMarketItemFromApp
}


/**
 * Gets all item by appid
 * 
 * params = {
 *    appid: 252490,
 *    range: 100    // default
 *    page: 1       // default
 * }
 * 
 * @param {Object} params 
 */

function getMarketItemFromApp(params) {
    return new Promise(async(resolve, reject) => {
        
        await validator.make(params).catch(err => reject(err));

        let appid = params.appid;
        let range = params.range || 100;
        let page = params.page || 1;
        let start = (page - 1) * range;

        let baseUrl = `${process.env.GAME_MARKET_ITEMS}${appid}&count=${range}&start=${start}`;

        let data = await axios.get(baseUrl)
            .then(res => res.data)
            .catch(err => reject(err));

        let count = data.total_count;
        var items = []

        for (var i = 0; i < range; i++)
            items.push(MarketItem.constructModel(data.results[i]))

        if (items.count == 0) return reject({
            message: "This game has no market items.",
            code: 400
        });

        return resolve({ total: count, content: items });
    });
};

