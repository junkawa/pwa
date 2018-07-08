'use strict';

var app = require('./app');

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
})();

$('#hundredsplaceList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    app.setHundredsplace($(this).attr('id'));

    updateView();
})

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
