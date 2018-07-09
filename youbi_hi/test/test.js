var assert = require('assert');
var app = require('../src/js/app');
 
describe('app', function () {
    describe('getTextView1', function () {
	const expect1 = '2018年12月 水曜日';
        it('returns '+expect1, function () {
	    app.setTensplace('1');
	    app.setOnesplace('8');
	    app.setMonth('12');
	    app.setWeek('3');
            assert.equal(app.getTextView1(), expect1);
        });
	const expect2 = '2017年12月 火曜日';
        it('returns '+expect2, function () {
	    app.setTensplace('1');
	    app.setOnesplace('7');
	    app.setMonth('12');
	    app.setWeek('2');
            assert.equal(app.getTextView1(), expect2);
        });
    });
    describe('getTextView2', function () {
	const expect1 = '5日 12日 19日 26日';
        it('returns '+expect1, function () {
	    app.setTensplace('1');
	    app.setOnesplace('8');
	    app.setMonth('12');
	    app.setWeek('3');
            assert.equal(app.getTextView2(), expect1);
        });
	const expect2 = '3日 10日 17日 24日 31日';
        it('returns '+expect2, function () {
	    app.setTensplace('1');
	    app.setOnesplace('8');
	    app.setMonth('3');
	    app.setWeek('6');
            assert.equal(app.getTextView2(), expect2);
        });
	const expect3 = '3日 10日 17日 24日';
        it('returns '+expect3, function () {
	    app.setTensplace('1');
	    app.setOnesplace('8');
	    app.setMonth('4');
	    app.setWeek('2');
            assert.equal(app.getTextView2(), expect3);
        });
	const expect4 = '3日 10日 17日 24日 31日';
        it('returns '+expect4, function () {
	    app.setTensplace('0');
	    app.setOnesplace('0');
	    app.setMonth('1');
	    app.setWeek('1');
            assert.equal(app.getTextView2(), expect4);
        });
    });
});
