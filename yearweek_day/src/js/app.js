'use strict';

let yearHundredsPlace = '20';
let yearTensPlace = '1';
let yearOnesPlace = '8';
let month = '7';
let weekTensPlace = '1';
let weekOnesPlace = '0';

const setYearHundredsPlace = (h) => {
    switch(h) {
    case '19':
    case '20':
	yearHundredsPlace = h;
	break;
    default:
	throw new Error('invalid argument:'+h);
    }
};

const setYearTensPlace = (t) => {
    switch(t) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
	yearTensPlace = t;
	break;
    default:
	throw new Error('invalid argument:'+t);
    }
};

const setYearOnesPlace = (o) => {
    switch(o) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
	yearOnesPlace = o;
	break;
    default:
	throw new Error('invalid argument:'+o);
    }
};

const setMonth = (m) => {
    switch(m) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
    case '11':
    case '12':
	month = m;
	break;
    default:
	throw new Error('invalid argument:'+m);
    }
};

const setWeekTensPlace = (t) => {
    switch(t) {
    case '0':
    case '1':
    case '2':
    case '3':
	weekTensPlace = t;
	break;
    default:
	throw new Error('invalid argument:'+t);
    }
};

const setWeekOnesPlace = (o) => {
    switch(o) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
	weekOnesPlace = o;
	break;
    default:
	throw new Error('invalid argument:'+o);
    }
};

const getTextView1_ = (yh, yt, yo, m, wt, wo) => {
    return '';
};

const getTextView1 = () => {
    return getTextView1_(yearHundredsPlace, yearTensPlace, yearOnesPlace, month, weekTensPlace, weekOnesPlace);
};

const getTextView2_ = (yh, yt, yo, m, wt, wo) => {
    return '';
};

const getTextView2 = () => {
    return getTextView2_(yearHundredsPlace, yearTensPlace, yearOnesPlace, month, weekTensPlace, weekOnesPlace);
};

module.exports = {setYearHundredsPlace, setYearTensPlace, setYearOnesPlace, setMonth, setWeekTensPlace, setWeekOnesPlace, getTextView1, getTextView2};
