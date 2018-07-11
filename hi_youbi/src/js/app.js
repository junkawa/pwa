'use strict';

const numWeekMap = ['sun','mon','tue','wed','thu','fri','sat'];
const weekStrMap = {'mon':'月曜日','tue':'火曜日','wed':'水曜日','thu':'木曜日','fri':'金曜日','sat':'土曜日','sun':'日曜日'};

let yearHundredsPlace = '20';
let yearTensPlace = '1';
let yearOnesPlace = '8';
let month = '7';
let dayTensPlace = '1';
let dayOnesPlace = '0';

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

const setDayTensPlace = (t) => {
    switch(t) {
    case '0':
    case '1':
    case '2':
    case '3':
	dayTensPlace = t;
	break;
    default:
	throw new Error('invalid argument:'+t);
    }
};

const setDayOnesPlace = (o) => {
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
	dayOnesPlace = o;
	break;
    default:
	throw new Error('invalid argument:'+o);
    }
};

const getDate_ = (yh, yt, yo, m, dt, dop) => {
    if (dt+dop === '00') return null;

    {
	const dStr = `${yh}${yt}${yo}/${m}/1`;
	let d = new Date(dStr);
	const lastDay = (new Date(d.getFullYear(), d.getMonth() + 1, 0)).getDate();
	if (Number(dt+dop) > lastDay) return null;
    }

    const dStr = `${yh}${yt}${yo}/${m}/${dt}${dop}`;
    let d = new Date(dStr);
    if (d.toString() === 'Invalid Date') return null;
    return d;
};

const getTextView1_ = (yh, yt, yo, m, dt, dop) => {
    if (getDate_(yh, yt, yo, m, dt, dop) === null) return '--';

    if (dt === '0') dt = '';
    return `${yh}${yt}${yo}年${m}月${dt}${dop}日`;
};

const getTextView1 = () => {
    return getTextView1_(yearHundredsPlace, yearTensPlace, yearOnesPlace, month, dayTensPlace, dayOnesPlace);
};

const getTextView2_ = (yh, yt, yo, m, dt, dop) => {
    let d = getDate_(yh, yt, yo, m, dt, dop);
    if (d === null) return '';

    const weekth = parseInt(Number(`${dt}${dop}`)/7) + 1;
    const ret = `第${weekth}${weekStrMap[numWeekMap[d.getDay()]]}`;
    return ret;
};

const getTextView2 = () => {
    return getTextView2_(yearHundredsPlace, yearTensPlace, yearOnesPlace, month, dayTensPlace, dayOnesPlace);
};

module.exports = {setYearHundredsPlace, setYearTensPlace, setYearOnesPlace, setMonth, setDayTensPlace, setDayOnesPlace, getTextView1, getTextView2};
