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

const defaultSvgAttr = (svgId, gId) => {
    $(svgId)
        .on({
            'mouseover': function(e) {
                $(gId).attr('fill','#141414');
            },
            'mouseout': function(e) {
                $(gId).attr('fill','#747474');
            }
        });
};

(function() {
    // Webpack production mode changes handleFiles name in js file.
    // handleFiles in input tag in html can't the method in js file.
    $('#uploadFileElem').change(function() { handleFiles($(this).prop('files')[0]); });
    
    defaultSvgAttr('#outline-insert-photo', '#outline-insert-photo-line');
    $('#outline-insert-photo').on({
        'click': function(e) {
            $('#uploadFileElem').click();
        }
    });
    
    defaultSvgAttr('#outline-save-alt', '#outline-save-alt-line');
    $('#outline-save-alt').on({
        'click': function(e) {
        }
    });
})();

(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
})();
