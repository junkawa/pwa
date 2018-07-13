'use strict';

var app = require('./app');
var app = require('./croppie.min');

(function() {
    $('.my-image').croppie();
})();

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js');
    }
})();
