var assert = require('assert');
var app = require('../src/js/app');
 
describe('app', function () {
    describe('getNumber', function () {
        it('returns (first arg * 10) + second arg', function () {
            assert.equal(app.getNumber('5','1'), '51');
        });
    });
});
