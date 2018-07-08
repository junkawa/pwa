'use strict';

const warekiMap = {'heisei':'平成', 'showa':'昭和', 'taisho':'大正', 'meiji':'明治'};
const nenMap = {'nen':'年'};
const genMap = {'gen':'元'};

let hundredsplace = '20';
let tensplace = '1';
let onesplace = '8';

const getTextView1_ = (h, t, o) => {
    var year = h+t+o;
    return year;
};

const getTextView1 = () => {
    return getTextView1_(hundredsplace, tensplace, onesplace);
};

const getTextView2_ = (h, t, o) => {
    var wareki = getWareki(h, t, o);
    return wareki;
};

const getTextView2 = () => {
    return getTextView2_(hundredsplace, tensplace, onesplace);
};

const meijiBaseSeireki = 1868;
const isMeiji = (seireki) => {
    return (meijiBaseSeireki<=seireki && seireki<=1911);
};

const taishoBaseSeireki = 1912;
const isTaisho = (seireki) => {
    return (taishoBaseSeireki<=seireki && seireki<=1925);
};

const showaBaseSeireki = 1926;
const isShowa = (seireki) => {
    return (showaBaseSeireki<=seireki && seireki<=1988);
};

const heiseiBaseSeireki = 1989;
const isHeisei = (seireki) => {
    return (heiseiBaseSeireki<=seireki && seireki<=2018);
};

const getWareki = (h, t, o) => {
    let seireki = Number(h+t+o);
    let gengou = '';
    let wareki = 0;
    
    if (isMeiji(seireki)) {
	gengou='meiji';
	wareki = seireki-meijiBaseSeireki+1;
    } else if (isTaisho(seireki)) {
	gengou='taisho';
	wareki = seireki-taishoBaseSeireki+1;
    } else if (isShowa(seireki)) {
	gengou='showa';
	wareki = seireki-showaBaseSeireki+1;
    } else if (isHeisei(seireki)) {
	gengou='heisei';
	wareki = seireki-heiseiBaseSeireki+1;
    }

    if (wareki === 1) wareki=genMap['gen'];

    if (gengou === '')
	return '--';

    return warekiMap[gengou]+wareki+nenMap['nen'];
};

const setHundredsplace = (h) => {
    switch(h) {
    case '19':
    case '20':
	hundredsplace = h;
	break;
    default:
	throw new Error('invalid argument');
    }
};

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

module.exports = {getTextView1, getTextView2, setHundredsplace, setTensplace, setOnesplace}

