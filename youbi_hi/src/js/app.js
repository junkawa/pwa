'use strict';

const weekMap = {'mon':'月曜日','tue':'火曜日','wed':'水曜日','thu':'木曜日','fri':'金曜日','sat':'土曜日','sun':'日曜日'};

let tensplace = '1';
let onesplace = '8';
let week = 'mon';
let month = '8';

const setTensplace = (t) => {
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
	tensplace = t;
	break;
    default:
	throw new Error('invalid argument');
    }
};

const setOnesplace = (o) => {
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
	onesplace = o;
	break;
    default:
	throw new Error('invalid argument');
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
	throw new Error('invalid argument');
    }
};

const setWeek = (w) => {
    switch(w) {
    case 'mon':
    case 'tue':
    case 'wed':
    case 'thu':
    case 'fri':
    case 'sat':
    case 'sun':
	week = w;
	break;
    default:
	throw new Error('invalid argument');
    }
};

const getTextView1_ = (t, o, m, w) => {
    return `20${t}${o}年${m}月 ${weekMap[w]}`;
};

const getTextView1 = () => {
    return getTextView1_(tensplace, onesplace, month, week);
};

module.exports = {setTensplace, setOnesplace, setMonth, setWeek, getTextView1}
