/**
 * Loading .env config file.
 */

require('custom-env').env();


/**
 * Include all dependencies
 */

const express = require('express');
const parser = require('body-parser');
const Database = require('./util/connect');


/**
 * Connecting to database
 */

Database.authenticate()
    .then(() => console.log("Conntected to Database: [ITEM]"))
    .catch(err => console.log("Database Connection Error: " + err.message));


/**
 * Initializing express server instance and include body-parser,
 * then export it as global varable along with mongoose
 */

const server = express();
server.use(parser.json());

module.exports = server;


/**
 * Connection feedback, optional
 */

server.listen(process.env.PORT || 3535, console.log("\nEndpoint Active..."));
server.get('/', (req, res) => res.json({
    message: "ITEM API Endpoint",
}));


/**
 * Add any additional api routes from api folder
 */

server.use('/item', require('./api/route')); // User API


/**
 * Automatically send error code 404 for unmatched links
 */

server.use(function(req, res) {
    res.sendStatus(404);
});