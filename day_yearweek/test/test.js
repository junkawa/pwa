var assert = require('assert');
var app = require('../src/js/app');
 
describe('app', function () {
    describe('getTextView1', function () {
	{
	    const expect = '2018年12月23日';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('8');
		app.setMonth('12');
		app.setDayTensPlace('2');
		app.setDayOnesPlace('3');
		assert.equal(app.getTextView1(), expect);
            });
	}
	{
	    const expect = '--';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('8');
		app.setMonth('12');
		app.setDayTensPlace('0');
		app.setDayOnesPlace('0');
		assert.equal(app.getTextView1(), expect);
            });
	}
	{
	    const expect = '1900年1月4日';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('19');
		app.setYearTensPlace('0');
		app.setYearOnesPlace('0');
		app.setMonth('1');
		app.setDayTensPlace('0');
		app.setDayOnesPlace('4');
		assert.equal(app.getTextView1(), expect);
            });
	}
    });
});
