var assert = require('assert');
var app = require('../src/js/app');
 
describe('app', function () {
    describe('getTextView1', function () {
	{
	    const expect = '2018年第52週';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('8');
		app.setWeekTensPlace('5');
		app.setWeekOnesPlace('2');
		assert.equal(app.getTextView1(), expect);
            });
	}
	{
	    const expect = '--';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('8');
		app.setWeekTensPlace('5');
		app.setWeekOnesPlace('3');
		assert.equal(app.getTextView1(), expect);
            });
	}
	{
	    const expect = '2009年第53週';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('0');
		app.setYearOnesPlace('9');
		app.setWeekTensPlace('5');
		app.setWeekOnesPlace('3');
		assert.equal(app.getTextView1(), expect);
            });
	}
	{
	    const expect = '--';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('8');
		app.setWeekTensPlace('0');
		app.setWeekOnesPlace('0');
		assert.equal(app.getTextView1(), expect);
            });
	}
    });
});
