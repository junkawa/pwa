'use strict';

var app = require('./app');
var croppie = require('./croppie.min');
var uploadCrop = null;

const getCrop = () => {
    if (uploadCrop != null) return uploadCrop;
    
    const h = $(window).height();
    const vw = h / 3.5; // reflect browser height for responsive design
    const vh = vw; // 1:1
    const bw = h / 2; // fit crop-container(width:50vh)
    const bh = bw * 5 / 7; // 7:5

    //7:5
    uploadCrop = $('#upload-image').croppie({
        // enableExif: true,
        // enableResize: true,
        viewport: {
            width: vw,
            height: vh,
            // type: 'circle'
        },
        boundary: {
            width: bw,
            height: bh
        }
    });
    return uploadCrop;
};

const handleFiles = (file) => {
    if (file) {
        let reader = new FileReader();
        
        reader.onload = function (e) {
            let crop = getCrop();
            crop.croppie('bind', {
                url: e.target.result
            });
        }
        
        reader.readAsDataURL(file);
    }
};

const defaultSvgAttr = () => {
    $('#outline-insert-photo')
        .on({
            'mouseover': function(e) {
                $('#outline-insert-photo-line').attr('fill','#141414');
            },
            'mouseout': function(e) {
                $('#outline-insert-photo-line').attr('fill','#747474');
            },
            'click': function(e) {
                $('#fileElem').click();
            }
        });
};

(function() {
    defaultSvgAttr();
    
    // Webpack production mode changes handleFiles name in js file.
    // handleFiles in input tag in html can't the method in js file.
    $('#fileElem').change(function() { handleFiles($(this).prop('files')[0]); });
})();

(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
})();
