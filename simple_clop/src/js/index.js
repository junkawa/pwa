'use strict';

var app = require('./app');
var croppie = require('./croppie.min');
var uploadCrop = null;
var uploadFileObj;
var cropType = 'square';

const destroyCrop = () => {
    if (uploadCrop === null) return;

    uploadCrop.croppie('destroy');
    uploadCrop = null;
};

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
        enableResize: true,
        viewport: {
            width: vw,
            height: vh,
            type: cropType
        },
        boundary: {
            width: bw,
            height: bh
        }
    });
    return uploadCrop;
};

const uploadFile = (file) => {
    if (file) {
        let reader = new FileReader();
        
        reader.onload = function (e) {
            // console.log(file['name']);
            uploadFileObj = file;
            let crop = getCrop();
            crop.croppie('bind', {
                url: e.target.result
            });
        }
        
        reader.readAsDataURL(file);
    }
};

const download = (url, filename) => {
    let a = document.createElement('a');
    let e = document.createEvent('MouseEvent');
    a.download = filename;
    a.href = url;
    e.initEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
    // let a = $('<a>').attr({
    //     href: url,
    //     download: filename
    // });
    // a.trigger('click');
};

const saveFile = () => {
    if (uploadCrop === null) return;
    
    const fmt = 'png'

    let crop = uploadCrop;
    crop.croppie('result', {
        type: 'rawcanvas',
        format: fmt
    }).then(function (canvas) {
        const reg=/(.*)(?:\.([^.]+$))/;
        const uploadFileName = uploadFileObj['name'];
        const downloadFilename = `${uploadFileName.match(reg)[1]}.${fmt}`;
        download(canvas.toDataURL(), downloadFilename);
    });
};

const setCropType = (type) => {
    if (cropType === type) return;
    if (uploadCrop === null) return;
    if (uploadFileObj === null) return;

    destroyCrop();

    cropType = type;
    uploadFile(uploadFileObj);
};

const setCropTypeSquare = () => {
    setCropType('square');
};

const setCropTypeCircle = () => {
    setCropType('circle');
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
    // Webpack production mode changes uploadFile name in js file.
    // uploadFile in input tag in html can't the method in js file.
    $('#uploadFileElem').change(function() { uploadFile($(this).prop('files')[0]); });
    
    defaultSvgAttr('#outline-insert-photo', '#outline-insert-photo-line');
    $('#outline-insert-photo').on({
        'click': function(e) {
            $('#uploadFileElem').click();
        }
    });
    
    defaultSvgAttr('#outline-save-alt', '#outline-save-alt-line');
    $('#outline-save-alt').on({
        'click': function(e) {
            saveFile();
        }
    });

    defaultSvgAttr('#outline-crop-square', '#outline-crop-square-line');
    $('#outline-crop-square').on({
        'click': function(e) {
            setCropTypeSquare();
        }
    });

    defaultSvgAttr('#outline-crop-circle', '#outline-crop-circle-line');
    $('#outline-crop-circle').on({
        'click': function(e) {
            setCropTypeCircle();
        }
    });
})();

(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
})();
