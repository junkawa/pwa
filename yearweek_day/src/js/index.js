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

$('#weekTensPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setWeekTensPlace($(this).attr('id'));

    updateView();
});

$('#weekOnesPlaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setWeekOnesPlace($(this).attr('id'));

    updateView();
});

const setDate = (d) => {
    const y = d.getFullYear();
    const m = d.getMonth()+1;
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

    const week = app.getWeek(y, m, day);

    const weekTensPlace = String(parseInt(week/10));
    app.setWeekTensPlace(weekTensPlace);
    $('#weekTensPlaceList a#'+weekTensPlace).tab('show');

    const weekOnesPlace = String(week%10);
    app.setWeekOnesPlace(weekOnesPlace);
    $('#weekOnesPlaceList a#'+weekOnesPlace).tab('show');
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
