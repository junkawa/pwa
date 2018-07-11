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
	    const expect = '2012年第2週';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('2');
		app.setWeekTensPlace('0');
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
		app.setWeekTensPlace('0');
		app.setWeekOnesPlace('0');
		assert.equal(app.getTextView1(), expect);
            });
	}
    });
    describe('getTextView2', function () {
	{
	    const expect = '12月24日 〜 12月30日';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('8');
		app.setWeekTensPlace('5');
		app.setWeekOnesPlace('2');
		assert.equal(app.getTextView2(), expect);
            });
	}
	{
	    const expect = '1月3日 〜 1月9日';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('1');
		app.setWeekTensPlace('0');
		app.setWeekOnesPlace('1');
		assert.equal(app.getTextView2(), expect);
            });
	}
	{
	    const expect = '12月31日 〜 1月6日';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('0');
		app.setYearOnesPlace('8');
		app.setWeekTensPlace('0');
		app.setWeekOnesPlace('1');
		assert.equal(app.getTextView2(), expect);
            });
	}
	{
	    const expect = '';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('0');
		app.setYearOnesPlace('5');
		app.setWeekTensPlace('5');
		app.setWeekOnesPlace('3');
		assert.equal(app.getTextView2(), expect);
            });
	}
	{
	    const expect = '';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('0');
		app.setYearOnesPlace('8');
		app.setWeekTensPlace('5');
		app.setWeekOnesPlace('3');
		assert.equal(app.getTextView2(), expect);
            });
	}
	{
	    const expect = '12月28日 〜 1月3日';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('0');
		app.setYearOnesPlace('9');
		app.setWeekTensPlace('5');
		app.setWeekOnesPlace('3');
		assert.equal(app.getTextView2(), expect);
            });
	}
	{
	    const expect = '12月29日 〜 1月4日';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('0');
		app.setYearOnesPlace('9');
		app.setWeekTensPlace('0');
		app.setWeekOnesPlace('1');
		assert.equal(app.getTextView2(), expect);
            });
	}
	{
	    const expect = '';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('8');
		app.setWeekTensPlace('0');
		app.setWeekOnesPlace('0');
		assert.equal(app.getTextView2(), expect);
            });
	}
	{
	    const expect = '';
            it('returns '+expect, function () {
		app.setYearHundredsPlace('20');
		app.setYearTensPlace('1');
		app.setYearOnesPlace('8');
		app.setWeekTensPlace('5');
		app.setWeekOnesPlace('3');
		assert.equal(app.getTextView2(), expect);
            });
	}
    });
});
