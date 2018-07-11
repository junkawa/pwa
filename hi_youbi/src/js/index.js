'use strict';

var app = require('./app');

const updateView = () => {
    $('#view1').text(app.getTextView1());
    $('#view2').text(app.getTextView2());
};

$('#yearHundredsPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setHundredsPlace($(this).attr('id'));

    updateView();
});

$('#yearTensPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setTensPlace($(this).attr('id'));

    updateView();
});

$('#yearOnesPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setOnesPlace($(this).attr('id'));

    updateView();
});

$('#monthList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setMonth($(this).attr('id'));

    updateView();
});

$('#dayTensPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setDayTensplace($(this).attr('id'));

    updateView();
});

$('#dayOnesPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setDayOnesplace($(this).attr('id'));

    updateView();
});

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js');
    }
})();
