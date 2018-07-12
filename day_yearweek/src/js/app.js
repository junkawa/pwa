'use strict';

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

const invalidDate_ = (yh, yt, yo, m, dt, dop) => {
    if (dt+dop === '00') return true;

    {
	const dStr = `${yh}${yt}${yo}/${m}/1`;
	let d = new Date(dStr);
	const lastDay = (new Date(d.getFullYear(), d.getMonth() + 1, 0)).getDate();
	if (Number(dt+dop) > lastDay) return true;
    }

    const dStr = `${yh}${yt}${yo}/${m}/${dt}${dop}`;
    let d = new Date(dStr);
    if (d.toString() === 'Invalid Date') return true;
    
    return false;
};

const isNextYearsWeek_ = (m, d, w) => {
    if (!(m===12 && d >= 29)) return false;

    const day = (w+6)%7; // mon:0, tue:1, ...

    switch (d) {
    case 29:
	if (day === 0) return true; // 12/29 (mon)
	break;
    case 30:
	if (day <= 1) return true; // 12/30 (mon or tue)
	break;
    case 31:
	if (day <= 2) return true; // 12/31 (mon, tue, or wed)
	break;
    }
    return false;
}

const getWeek_ = (y, m, d) => {
    let last = new Date(y, m-1, d);

    if (isNextYearsWeek_(m, d, last.getDay())) return 1; // 12/29,30,31 is next year's week
    
    // http://ltd.hatenablog.com/entry/2014/07/02/181833
    let oneJan = new Date(y, 0, 1); // JAN/1
    let day = Math.ceil((last - oneJan) / 86400000);
    const offset = oneJan.getDay() - 1;
    const week = Math.floor((day + offset) / 7) + 1;

    let diff = 0;
    if ((oneJan.getDay()+6)%7 >= 4) diff = 1; // 1/1 and 1/4 are not in the same week

    if (week-diff === 0) return getWeek_(y-1,12,28); // last weeks of the last year
 

    return week - diff;
}

const getTextView1_ = (yh, yt, yo, m, dt, dop) => {
    if (invalidDate_(yh, yt, yo, m, dt, dop)) return '--';

    if (dt === '0') dt = '';

    return `${yh}${yt}${yo}年${m}月${dt}${dop}日`;
};

const getTextView1 = () => {
    return getTextView1_(yearHundredsPlace, yearTensPlace, yearOnesPlace, month, dayTensPlace, dayOnesPlace);
};

const getTextView2_ = (yh, yt, yo, m, dt, dop) => {
    if (invalidDate_(yh, yt, yo, m, dt, dop)) return '';

    const week = getWeek_(Number(yh+yt+yo),Number(m),Number(dt+dop));
    return `第${week}週`;
};

const getTextView2 = () => {
    return getTextView2_(yearHundredsPlace, yearTensPlace, yearOnesPlace, month, dayTensPlace, dayOnesPlace);
};

module.exports = {setYearHundredsPlace, setYearTensPlace, setYearOnesPlace, setMonth, setDayTensPlace, setDayOnesPlace, getTextView1, getTextView2};
