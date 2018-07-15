'use strict';

const noun = import('./noun.json');
const app = require('./app');


(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js');
    }
})();
