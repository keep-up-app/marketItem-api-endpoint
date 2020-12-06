/**
 * Include all dependencies
 */

const MarketItemController = require('../controllers/MarketItemController');
const format = require('../util/format');
const express = require("express");
const router = express.Router();

module.exports = router;


/**
 * Retrieves items from given Game with Id
 * URI: item/all/
 * 
 * @method {GET}
 */

router.get('/all/:appid', async(req, res) => {

    let appid = req.params.appid;
    let page = parseInt(req.query.page != null ? req.query.page : 1);
    let range = parseInt(req.query.range != null ? req.query.range : 10);

    MarketItemController.getMarketItemFromApp({
        appid: appid,
        page: page,
        range: range
    })
    .then(data => {
        let baseUrl = `${process.env.BASE_URL}/item/all/${appid}`;
        let json = format.constructJSONPagination(baseUrl, data, page, range);
        return res.send(json);
    })
    .catch(err => res.status(err.code).send({ error: err.message, details: err.details }))
});

