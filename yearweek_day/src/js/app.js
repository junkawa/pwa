'use strict';

let yearHundredsPlace = '20';
let yearTensPlace = '1';
let yearOnesPlace = '8';
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

const setWeekTensPlace = (t) => {
    switch(t) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
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

const getLastWeek_ = (y, w) => {
    var onejan = new Date(y, 0, 1); // JAN/1
    var last = new Date(y, 11, 28); // DEC/28
    return Math.ceil((((last - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

const getTextView1_ = (yh, yt, yo, wt, wo) => {
    if (wt+wo === '00') return '--';
    const lastWeek = getLastWeek_(Number(yh+yt+yo), Number(wt+wo));
    console.log(lastWeek);
    if (lastWeek < Number(wt+wo)) return '--';
    
    return `${yh}${yt}${yo}年第${wt}${wo}週`;
};

const getTextView1 = () => {
    return getTextView1_(yearHundredsPlace, yearTensPlace, yearOnesPlace, weekTensPlace, weekOnesPlace);
};

const getTextView2_ = (yh, yt, yo, wt, wo) => {
    const startStr = `${yh}${yt}${yo}/1/4`;
    let startDate = new Date(startStr);
    const day = startDate.getDay(); 	// 0-6 dayOfWeek
    console.log(startDate);

    const targetTime = startDate.getTime() + (-day+(Number(wt+wo)-1)*7)*24*60*60*1000;
    let targetDate = new Date(targetTime);
    console.log(targetDate);

    
    const targetTime2 = targetDate.getTime() + 6*24*60*60*1000;
    let targetDate2 = new Date(targetTime2);
    console.log(targetDate2);

    return `${targetDate.getMonth()+1}月${targetDate.getDate()}日 〜 ${targetDate2.getMonth()+1}月${targetDate2.getDate()}`;
};

const getTextView2 = () => {
    return getTextView2_(yearHundredsPlace, yearTensPlace, yearOnesPlace, weekTensPlace, weekOnesPlace);
};

module.exports = {setYearHundredsPlace, setYearTensPlace, setYearOnesPlace, setWeekTensPlace, setWeekOnesPlace, getTextView1, getTextView2};
