'use strict';

var app = require('./app');

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
    firstView();
})();

$('#tensplaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setTensplace($(this).attr('id'));

    updateView();
})

$('#onesplaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setOnesplace($(this).attr('id'));

    updateView();
})

$('#monthList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setMonth($(this).attr('id'));

    updateView();
})

$('#weekList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setWeek($(this).attr('id'));

    updateView();
})

const updateView = () => {
    updateView1();
    updateView2();
};

const updateView1 = () => {
    $('#view1').text(app.getTextView1());
};

const updateView2 = () => {
    $('#view2').text(app.getTextView2());
};

const firstView = () => {
    app.setDate(new Date());
    updateView();
};
