'use strict';

var app = require('./app');

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

const setDate = (d) => {
    const y = d.getFullYear();
    const m = d.getMonth();

    const tensplace = String( parseInt((y-2000)/10) );
    app.setTensplace(tensplace);
    $('#tensplaceList a#'+tensplace).tab('show');

    const onesplace = String((y-2000)%10);
    app.setOnesplace(onesplace);
    $('#onesplaceList a#'+onesplace).tab('show');

    const month = String(m+1);
    app.setMonth(month);
    $('#monthList a#'+month).tab('show');

    const week = String(d.getDay());
    app.setWeek(week);
    $('#weekList a#'+week).tab('show');
};

const firstView = () => {
    setDate(new Date());
    updateView();
};

(function() {
    firstView();
})();

$('#tensplaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setTensplace($(this).attr('id'));

    updateView();
});

$('#onesplaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setOnesplace($(this).attr('id'));

    updateView();
});

$('#monthList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setMonth($(this).attr('id'));

    updateView();
});

$('#weekList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setWeek($(this).attr('id'));

    updateView();
});

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
})();
