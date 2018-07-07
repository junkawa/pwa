'use strict';

const warekiMap = {"heisei":"平成", "showa":"昭和", "taisho":"大正", "meiji":"明治"};
const nenMap = {"nen":"年"};
const genMap = {"gen":"元"};

let wareki = "heisei";
let tensplace = "3";
let onesplace = "0";

var getTextView1_ = function(w, t, o) {
    var year = t+o;
    if (t === "0") year = o;
    if (year === "0") return "--";
    if (year === "1") year = genMap["gen"];
    return warekiMap[wareki]+year+nenMap["nen"];
}

var getTextView1 = function() {
    getTextView1_(wareki, tensplace, onesplace);
}

var getTextView2_ = function(w, t, o) {
    var year = t+o;
    if (year === "00") return "--";
    
    var seireki = getSeireki(wareki, tensplace, onesplace);
    return seireki;
}

var getTextView2 = function() {
    getTextView2_(wareki, tensplace, onesplace);
}

var getNumber = function(t, o) {
    return Number(t)*10 + Number(o);
}

var getBase = function(w) {
    switch(w) {
    case "heisei":
	return 1989;
    case "showa":
	return 1926;
    case "taisho":
	return 1912;
    case "meiji":
	return 1868;
    default:
	return 0;
    }
}

var getSeireki = function(w, t, o) {
    var num = getNumber(t, o);
    var base = getBase(w);
    return base + (num-1);
}

var setWareki = function(w) {
    wareki = w;
}

var setTensplace = function(t) {
    tensplace = t;
}

var setOnesplace = function(o) {
    onesplace = o;
}

module.exports = {getNumber, getTextView1, getTextView2, setWareki, setTensplace, setOnesplace}

