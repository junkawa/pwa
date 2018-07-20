'use strict';

const sleep = (waitSeconds, callback) => {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(callback());
    }, waitSeconds * 1000);
  });
};

const svgShow = (id) => {
    $('#'+id).show();
};

const svgHide = (id) => {
    $('#'+id).hide();
};

const getBarcodeSelector = () => {
    return '.barcode-container .menu-container .loading';
}

const showBarcodeLoading = () => {
    $(getBarcodeSelector()).show();
};

const hideBarcodeLoading = () => {
    $(getBarcodeSelector()).hide();
};

const defaultSvgAttr = (svgId, gId) => {
    $(svgId)
        .on({
            'mouseover': function() {
                $(gId).attr('fill','#141414');
            },
            'mouseout': function() {
                $(gId).attr('fill','#747474');
            }
        });
};

const setStartDecodeIcon = () => {
    showBarcodeLoading();
    svgHide('outline-check');
    svgHide('outline-cancel');
};

const setDecodeSuccessIcon = () => {
    hideBarcodeLoading();
    svgShow('outline-check');
    sleep(3, () => {svgHide('outline-check');});
};

const setDecodeErrorIcon = () => {
    hideBarcodeLoading();
    svgShow('outline-cancel');
    sleep(3, () => {svgHide('outline-cancel');});
};

// const updateBarcodeImage = () => {
    // const canvas = Quagga.canvas.dom.image;
    //const canvasBoxSelector = $('.canvas-box');
    //canvasBoxSelector.empty();
    //canvasBoxSelector.append($('<img>').attr('id','picture').attr('src', canvas.toDataURL())); // #picture for css
    // $('#picture').attr('src', canvas.toDataURL());
// };

const App = {
    decodeSuccessCallback: null,
    init: function(callback) {
        this.decodeSuccessCallback = callback;
        this.attachListeners();
    },
    decode: function(src) {
        setStartDecodeIcon();

        Quagga.decodeSingle(
            {
                locate: true,
                decoder:{ readers: [{format: 'ean_reader',
                                     config: {
                                         supplements: [
                                             //'ean_5_reader', 'ean_2_reader'
                                         ]}
                                    }]},
                src: src
            }, (result) => {
                // console.log('decodeSingle callback');
                if (result && result.codeResult) {
                    const code = result.codeResult.code;
                    setDecodeSuccessIcon();
                    this.decodeSuccessCallback(result.codeResult.code);
                } else {
                    setDecodeErrorIcon();
                }
                // updateBarcodeImage();
            }
        );
    },
    attachListeners: function() {
        const self = this;
        const fileInput = document.querySelector('#uploadFileElem');

        fileInput.addEventListener('change', function onChange(e) {
            e.preventDefault();
            // fileInput.removeEventListener('change', onChange); // ??
            if (e.target.files && e.target.files.length) {
                self.decode(URL.createObjectURL(e.target.files[0]));
            }
        });
    }
};

Quagga.onProcessed(function(result) {
    // console.log('onProcessed');
    // console.log(result);
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
        if (result.boxes) {
            drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
            result.boxes.filter(function (box) {
                return box !== result.box;
            }).forEach(function (box) {
                Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2});
            });
        }

        if (result.box) {
            Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: '#00F', lineWidth: 2});
        }

        if (result.codeResult && result.codeResult.code) {
            Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
        }
    }
});

// Quagga.onDetected(function(result) {
//     // console.log('onDetected');
// });

const init = (callback) => {
    App.init(callback);
    
    defaultSvgAttr('#outline-insert-photo', '#outline-insert-photo-line');
    $('#outline-insert-photo').on({
        'click': function() {
            $('#uploadFileElem').click();
        }
    });
};
 
module.exports = {init};
