var assert = require('assert');
var app = require('../src/js/app');
 
describe('app', function () {
    describe('setHundredsplace', function () {
        it('set "20" with no exception', function () {
	    let errorOccured = false;
	    try {
		app.setHundredsplace('20');
	    } catch(e) {
		errorOccured = true;
	    }
	    assert.equal(errorOccured, false);
        });
	
        it('set "19" with no exception', function () {
	    let errorOccured = false;
	    try {
		app.setHundredsplace('19');
	    } catch(e) {
		errorOccured = true;
	    }
	    assert.equal(errorOccured, false);
        });

        it('set "1" with exception', function () {
	    let errorOccured = false;
	    try {
		app.setHundredsplace('1');
	    } catch(e) {
		errorOccured = true;
	    }
	    assert.equal(errorOccured, true);
        });
    });

    describe('getTextView1', function () {
        it('returns 2000', function () {
	    app.setHundredsplace('20');
	    app.setTensplace('0');
	    app.setOnesplace('0');
            assert.equal(app.getTextView1(), '2000');
        });

        it('returns 1999', function () {
	    app.setHundredsplace('19');
	    app.setTensplace('9');
	    app.setOnesplace('9');
            assert.equal(app.getTextView1(), '1999');
        });
    });

    describe('getTextView2', function () {
	describe('明治', function () {
            it('returns 明治33年', function () {
		app.setHundredsplace('19');
		app.setTensplace('0');
		app.setOnesplace('0');
		assert.equal(app.getTextView2(), '明治33年');
            });
            it('returns 明治44年', function () {
		app.setHundredsplace('19');
		app.setTensplace('1');
		app.setOnesplace('1');
		assert.equal(app.getTextView2(), '明治44年');
            });
	    //45
        });
	describe('大正', function () {
            it('returns 大正元年', function () {
		app.setHundredsplace('19');
		app.setTensplace('1');
		app.setOnesplace('2');
		assert.equal(app.getTextView2(), '大正元年');
            });
            it('returns 大正14年', function () {
		app.setHundredsplace('19');
		app.setTensplace('2');
		app.setOnesplace('5');
		assert.equal(app.getTextView2(), '大正14年');
            });
	    //15
        });
	describe('昭和', function () {
            it('returns 昭和元年', function () {
		app.setHundredsplace('19');
		app.setTensplace('2');
		app.setOnesplace('6');
		assert.equal(app.getTextView2(), '昭和元年');
            });
            it('returns 昭和56年', function () {
		app.setHundredsplace('19');
		app.setTensplace('8');
		app.setOnesplace('1');
		assert.equal(app.getTextView2(), '昭和56年');
            });
            it('returns 昭和63年', function () {
		app.setHundredsplace('19');
		app.setTensplace('8');
		app.setOnesplace('8');
		assert.equal(app.getTextView2(), '昭和63年');
            });
	    //64
        });
	describe('平成', function () {
            it('returns 平成元年', function () {
		app.setHundredsplace('19');
		app.setTensplace('8');
		app.setOnesplace('9');
		assert.equal(app.getTextView2(), '平成元年');
            });
            it('returns 平成30年', function () {
		app.setHundredsplace('20');
		app.setTensplace('1');
		app.setOnesplace('8');
		assert.equal(app.getTextView2(), '平成30年');
            });
	    //30
        });
	describe('平成以降', function () {
            it('returns --', function () {
		app.setHundredsplace('20');
		app.setTensplace('1');
		app.setOnesplace('9');
		assert.equal(app.getTextView2(), '--');
            });
            it('returns --', function () {
		app.setHundredsplace('20');
		app.setTensplace('9');
		app.setOnesplace('9');
		assert.equal(app.getTextView2(), '--');
            });
        });
    });
});
