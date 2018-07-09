'use strict';

const numWeekMap = ['san','mon','tue','wed','thu','fi','sat'];
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
	throw new Error('invalid argument');
    }
};

const setDate = (d) => {
    const y = d.getFullYear();
    const m = d.getMonth();
    setTensplace(String((y-2000)/10));
    setOnesplace(String((y-2000)%10));
    setMonth(String(m+1));
    setWeek(String(d.getDay()));
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
    const myFirstDay = 1 + Math.abs(w-weekOfTheFirstDay);

    let ret = '';
    for (let day = myFirstDay; day <= lastDay; day+=7) {
	ret += `${day}日 `;
    }

    return ret.trim();
};

const getTextView2 = () => {
    return getTextView2_(tensplace, onesplace, month, week);
};

module.exports = {setTensplace, setOnesplace, setMonth, setWeek, setDate, getTextView1, getTextView2};
