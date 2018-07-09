'use strict';

const numWeekMap = ['sun','mon','tue','wed','thu','fri','sat'];
const weekStrMap = {'mon':'月曜日','tue':'火曜日','wed':'水曜日','thu':'木曜日','fri':'金曜日','sat':'土曜日','sun':'日曜日'};

let tensplace = '1';
let onesplace = '8';
let week = '1';
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
	throw new Error('invalid argument:'+t);
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

const setWeek = (w) => {
    switch(w) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
	week = w;
	break;
    default:
	throw new Error('invalid argument:'+w);
    }
};

const getTextView1_ = (t, o, m, w) => {
    return `20${t}${o}年${m}月 ${weekStrMap[numWeekMap[w]]}`;
};

const getTextView1 = () => {
    return getTextView1_(tensplace, onesplace, month, week);
};

const getTextView2_ = (t, o, m, w) => {
    const firstDayOfTheMonth = `20${t}${o}/${m}/1`;
    let d = new Date(firstDayOfTheMonth);
    const lastDay = (new Date(d.getFullYear(), d.getMonth() + 1, 0)).getDate();
    
    const weekOfTheFirstDay = d.getDay();
    let myFirstDay = 1;
    if (w>=weekOfTheFirstDay) {
	myFirstDay += w-weekOfTheFirstDay;
    } else {
	myFirstDay += w-weekOfTheFirstDay+7;
    }

    let ret = '';
    for (let day = myFirstDay; day <= lastDay; day+=7) {
	ret += `${day}日 `;
    }

    return ret.trim();
};

const getTextView2 = () => {
    return getTextView2_(tensplace, onesplace, month, week);
};

module.exports = {setTensplace, setOnesplace, setMonth, setWeek, getTextView1, getTextView2};
