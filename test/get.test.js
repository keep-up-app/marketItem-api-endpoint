/**
 * Loading test dependencies
 */

const parser = require('body-parser');
const request = require('supertest');
const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');


/**
 * Apply deps.
 */

chai.use(chaiHttp);
server.use(parser.json());


/**
 * Short hands for chai functions
 */

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();



describe('GET/ all', function() {

    let validAppId = "252490";
    let invalidAppId = "wef234";

    it('find user with VALID appid', done => {
        request(server).get(`/item/all/${validAppId}`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });

    it('find user with INVALID appid', done => {
        request(server).get(`/item/all/${invalidAppId}`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                expect(res.body.error).to.equal("Invalid Steam App ID.");
                done();
            });
    });
});