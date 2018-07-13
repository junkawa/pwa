'use strict';

var app = require('./app');
var app = require('./croppie.min');

const defaultSvgAttr = () => {
    $('#outline-insert-photo')
        .mouseover(function(e) {
            $('#outline-insert-photo-line').attr('fill','#141414');
        }).mouseout(function(e) {
            $('#outline-insert-photo-line').attr('fill','#747474');
        });
        // .attr('width', '30vw')
        // .attr('height', '30vw')
};

(function() {
    const h = $(window).height();
    const vw = h / 3.5; // reflect browser height for responsive design
    const vh = vw; // 1:1
    const bw = h / 2; // fit crop-container(width:50vh)
    const bh = bw * 5 / 7; // 7:5

    //7:5
    $('.my-image').croppie({
        //enableExif: true,
        viewport: {
            width: vw,
            height: vh,
//            type: 'circle'
        },
        boundary: {
            width: bw,
            height: bh
        }
    });
    defaultSvgAttr();
})();

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js');
    }
})();
