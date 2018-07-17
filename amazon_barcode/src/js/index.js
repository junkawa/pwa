'use strict';

const app = require('./app');

(() => {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js');
    }
})();
