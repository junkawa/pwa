var assert = require('assert');
var app = require('../src/js/app');
 
describe('app', function () {
    describe('getTextView1', function () {
        it('returns ', function () {
	    app.setTensplace('1');
	    app.setOnesplace('8');
	    app.setMonth('12');
	    app.setWeek('wed');
            assert.equal(app.getTextView1(), '2018年12月 水曜日');
        });
        it('returns ', function () {
	    app.setTensplace('1');
	    app.setOnesplace('7');
	    app.setMonth('12');
	    app.setWeek('wed');
            assert.equal(app.getTextView1(), '2017年12月 水曜日');
        });
    });
});
