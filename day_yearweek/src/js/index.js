'use strict';

var app = require('./app');

const updateView = () => {
    $('#view1').text(app.getTextView1());
    $('#view2').text(app.getTextView2());
};

$('#yearHundredsPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setYearHundredsPlace($(this).attr('id'));

    updateView();
});

$('#yearTensPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setYearTensPlace($(this).attr('id'));

    updateView();
});

$('#yearOnesPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setYearOnesPlace($(this).attr('id'));

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
    app.setDayTensPlace($(this).attr('id'));

    updateView();
});

$('#dayOnesPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setDayOnesPlace($(this).attr('id'));

    updateView();
});

const setDate = (d) => {
    const y = d.getFullYear();
    const day = d.getDate();

    const yearHundredsPlace = String( parseInt(y/100) );
    app.setYearHundredsPlace(yearHundredsPlace);
    $('#yearHundredsPlaceList a#'+yearHundredsPlace).tab('show');

    const yearTensPlace = String( parseInt((y%100)/10) );
    app.setYearTensPlace(yearTensPlace);
    $('#yearTensPlaceList a#'+yearTensPlace).tab('show');

    const yearOnesPlace = String((y%100)%10);
    app.setYearOnesPlace(yearOnesPlace);
    $('#yearOnesPlaceList a#'+yearOnesPlace).tab('show');

    const month = String(d.getMonth()+1);
    app.setMonth(month);
    $('#monthList a#'+month).tab('show');

    const dayTensPlace = String(parseInt(day/10));
    app.setDayTensPlace(dayTensPlace);
    $('#dayTensPlaceList a#'+dayTensPlace).tab('show');

    const dayOnesPlace = String(day%10);
    app.setDayOnesPlace(dayOnesPlace);
    $('#dayOnesPlaceList a#'+dayOnesPlace).tab('show');
};

const firstView = () => {
    setDate(new Date());
    updateView();
};

(function() {
    firstView();
})();

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js');
    }
})();
