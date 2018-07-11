var assert = require('assert');
var app = require('../src/js/app');
 
describe('app', function () {
    describe('getTextView1', function () {
	const expect1 = '2018年12月23日';
        it('returns '+expect1, function () {
	    app.setYearHundredsPlace('20');
	    app.setYearTensPlace('1');
	    app.setYearOnesPlace('8');
	    app.setMonth('12');
	    app.setDayTensPlace('2');
	    app.setDayOnesPlace('3');
            assert.equal(app.getTextView1(), expect1);
        });
	const expect2 = '--';
        it('returns '+expect2, function () {
	    app.setYearHundredsPlace('20');
	    app.setYearTensPlace('1');
	    app.setYearOnesPlace('8');
	    app.setMonth('12');
	    app.setDayTensPlace('0');
	    app.setDayOnesPlace('0');
            assert.equal(app.getTextView1(), expect2);
        });
	const expect3 = '1900年1月4日';
        it('returns '+expect3, function () {
	    app.setYearHundredsPlace('19');
	    app.setYearTensPlace('0');
	    app.setYearOnesPlace('0');
	    app.setMonth('1');
	    app.setDayTensPlace('0');
	    app.setDayOnesPlace('4');
            assert.equal(app.getTextView1(), expect3);
        });
    });
    describe('getTextView2', function () {
	const expect1 = '第4日曜日';
        it('returns '+expect1, function () {
	    app.setYearHundredsPlace('20');
	    app.setYearTensPlace('1');
	    app.setYearOnesPlace('8');
	    app.setMonth('12');
	    app.setDayTensPlace('2');
	    app.setDayOnesPlace('3');
            assert.equal(app.getTextView2(), expect1);
        });
	const expect2 = '第1火曜日';
        it('returns '+expect2, function () {
	    app.setYearHundredsPlace('19');
	    app.setYearTensPlace('8');
	    app.setYearOnesPlace('1');
	    app.setMonth('5');
	    app.setDayTensPlace('0');
	    app.setDayOnesPlace('5');
            assert.equal(app.getTextView2(), expect2);
        });
	const expect3 = '';
        it('returns '+expect3, function () {
	    app.setYearHundredsPlace('19');
	    app.setYearTensPlace('8');
	    app.setYearOnesPlace('1');
	    app.setMonth('5');
	    app.setDayTensPlace('0');
	    app.setDayOnesPlace('0');
            assert.equal(app.getTextView2(), expect3);
        });
	const expect4 = '';
        it('returns '+expect4, function () {
	    app.setYearHundredsPlace('20');
	    app.setYearTensPlace('1');
	    app.setYearOnesPlace('8');
	    app.setMonth('2');
	    app.setDayTensPlace('2');
	    app.setDayOnesPlace('9');
            assert.equal(app.getTextView2(), expect4);
        });
    });
});
