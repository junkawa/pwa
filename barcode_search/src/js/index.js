'use strict';

const barcodeContainer = require('./barcodeContainer');
const searchContainer = require('./searchContainer');

(() => {
    searchContainer.init();
    
    barcodeContainer.init((jan) => {
        searchContainer.updateKeywords(jan);
    });
})();

(() => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
})();
