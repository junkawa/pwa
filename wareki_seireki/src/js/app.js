(function() {
  'use strict';
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
})();

var warekiMap = {"heisei":"平成", "showa":"昭和", "taisho":"大正", "meiji":"明治"}
var nenMap = {"nen":"年"}
var genMap = {"gen":"元"}

var wareki = "heisei"
var tensplace = "3"
var onesplace = "0"

$('#eraList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
    wareki = $(this).attr("id")

    updateView()
})

$('#tensplaceList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
    tensplace = $(this).attr("id")

    updateView()
})

$('#onesplaceList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
    onesplace = $(this).attr("id")

    updateView()
})

function updateView() {
    updateView1()
    updateView2()
}

function updateView1() {
    //var wareki = $('#eraList').tabs('option', 'active')//.attr("id")
    $('#view1').text(getTextView1(wareki, tensplace, onesplace))
}

function updateView2() {
    $('#view2').text(getTextView2(wareki, tensplace, onesplace))
}

function getTextView1(w, t, o) {
    var year = t+o
    if (t === "0") year = o
    if (year === "0") return "--"
    if (year === "1") year = genMap["gen"]
    return warekiMap[wareki]+year+nenMap["nen"]
}

function getTextView2(w, t, o) {
    var year = t+o
    if (year === "00") return "--"
    
    var seireki = getSeireki(wareki, tensplace, onesplace)
    return seireki
}

function getNumber(t, o) {
    return Number(t)*10 + Number(o)
}

function getBase(w) {
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

function getSeireki(w, t, o) {
    var num = getNumber(t, o)
    var base = getBase(w)
    return base + (num-1)
}
