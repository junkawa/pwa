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

const getWeek_ = (y, m, d) => {
    let oneJan = new Date(y, 0, 1); // JAN/1
    let last = new Date(y, m-1, d);
    
    // http://ltd.hatenablog.com/entry/2014/07/02/181833
    let day = Math.ceil((last - oneJan) / 86400000);
    const offset = oneJan.getDay() - 1;
    const week = Math.floor((day + offset) / 7) + 1;

    let diff = 0;
    if ((oneJan.getDay()+6)%7 >= 4) diff = 1; // 1/1 and 1/4 are not in same week;

    return week - diff;
}

const getLastWeek_ = (y) => {
    return getWeek_(y, 12, 28);
}

const getWeek = (y, m, d) => {
    return getWeek_(y, m, d);
}

const invalidWeek_ = (y, w) => {
    if (w === 0) return true;
    const lastWeek = getLastWeek_(y);
    // console.log(lastWeek);
    if (lastWeek < w) return true;

    return false;
}

const getTextView1_ = (yh, yt, yo, wt, wo) => {
    if (invalidWeek_(Number(yh+yt+yo), Number(wt+wo))) return '--';

    if (wt === '0') wt = '';
    
    return `${yh}${yt}${yo}年第${wt}${wo}週`;
};

const getTextView1 = () => {
    return getTextView1_(yearHundredsPlace, yearTensPlace, yearOnesPlace, weekTensPlace, weekOnesPlace);
};

const getTextView2_ = (yh, yt, yo, wt, wo) => {
    if (invalidWeek_(Number(yh+yt+yo), Number(wt+wo))) return '';

    const startStr = `${yh}${yt}${yo}/1/4`;
    let startDate = new Date(startStr);
    const dayFromMonday = (startDate.getDay()+6)%7; 	// 0,1,2,3,4,5,6 -> 6,0,1,2,3,4,5
    // console.log(startDate);

    const targetTime = startDate.getTime() + (-dayFromMonday+(Number(wt+wo)-1)*7)*24*60*60*1000;
    let targetDate = new Date(targetTime);
    // console.log(targetDate);

    
    const targetTime2 = targetDate.getTime() + 6*24*60*60*1000;
    let targetDate2 = new Date(targetTime2);
    // console.log(targetDate2);

    return `${targetDate.getMonth()+1}月${targetDate.getDate()}日 〜 ${targetDate2.getMonth()+1}月${targetDate2.getDate()}日`;
};

const getTextView2 = () => {
    return getTextView2_(yearHundredsPlace, yearTensPlace, yearOnesPlace, weekTensPlace, weekOnesPlace);
};

module.exports = {setYearHundredsPlace, setYearTensPlace, setYearOnesPlace, setWeekTensPlace, setWeekOnesPlace, getTextView1, getTextView2, getWeek};
