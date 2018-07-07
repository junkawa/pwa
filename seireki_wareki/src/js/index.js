'use strict';

var app = require('./app');

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
})();

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
    $('#view1').text(app.getTextView1(wareki, tensplace, onesplace))
}

function updateView2() {
    $('#view2').text(app.getTextView2(wareki, tensplace, onesplace))
}

