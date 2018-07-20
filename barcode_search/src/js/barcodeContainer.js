'use strict';

const sleep = (waitSeconds, callback) => {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(callback());
    }, waitSeconds * 1000);
  });
};

// TODO jquery
const BR = require('./BarcodeReader');
const Quagga = require('./quagga.min').default;

let showPicture;

const svgShow = (id) => {
    $('#'+id).show();
};

const svgHide = (id) => {
    $('#'+id).hide();
};

const showBarcodeLoading = () => {
    $('.barcode-container .menu-container .loading').show();
};

const hideBarcodeLoading = () => {
    $('.barcode-container .menu-container .loading').hide();
};

const initBarcodeReader = (callback) => {
    showPicture = document.createElement('img');

    const canvas =document.getElementById('picture');
    const ctx = canvas.getContext('2d');
    BR.BarcodeReader.Init();
    BR.BarcodeReader.SetImageCallback(function(result) {
        hideBarcodeLoading();
        if(result.length > 0){
            const jan = result[0].Value;
            // console.log(`jan:${jan}`)
            svgShow('outline-check');
            sleep(3, () => {svgHide('outline-check');});
            // sendRequest(jan);
            callback(jan);
        } else {
            svgShow('outline-cancel');
            sleep(3, () => {svgHide('outline-cancel');});
            // console.log('barcode failed')
        }
        // if(result.length > 0){
        //     var tempArray = [];
        //     for(var i = 0; i < result.length; i++) {
        //         tempArray.push(result[i].Format+' : '+result[i].Value);
        //     }
        //     Result.innerHTML=tempArray.join('<br />');
        // }else{
        //     if(result.length === 0) {
        //         Result.innerHTML='Decoding failed.';
        //     }
        // }
    });
    BR.BarcodeReader.PostOrientation = true;
    BR.BarcodeReader.OrientationCallback = function(result) {
        canvas.width = result.width;
        canvas.height = result.height;
        const data = ctx.getImageData(0,0,canvas.width,canvas.height);
        //const data = ctx.getImageData(0,0,result.width,result.height);
        for(let i = 0; i < data.data.length; i++) {
            data.data[i] = result.data[i];
        }
        ctx.putImageData(data,0,0);
    };
    BR.BarcodeReader.SwitchLocalizationFeedback(true);
    BR.BarcodeReader.SetLocalizationCallback(function(result) {
        ctx.beginPath();
        ctx.lineWIdth = '2';
        ctx.strokeStyle='red';
        for(let i = 0; i < result.length; i++) {
            ctx.rect(result[i].x,result[i].y,result[i].width,result[i].height); 
        }
        ctx.stroke();
    });
};

const uploadFile = (file) => {
    if (file) {
        let reader = new FileReader();
        try {
            showBarcodeLoading();
            svgHide('outline-check');
            svgHide('outline-cancel');
            reader.onload = function (e) {
                showPicture.onload = function(event) {
                    //Result.innerHTML='';
                    BR.BarcodeReader.DecodeImage(showPicture);
                };
                showPicture.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
        catch (e) {
            //Result.innerHTML = 'Neither createObjectURL or FileReader are supported';
        }
    }
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

const init = (callback) => {
    initBarcodeReader(callback);
    
    defaultSvgAttr('#outline-insert-photo', '#outline-insert-photo-line');
    $('#outline-insert-photo').on({
        'click': function() {
            $('#uploadFileElem').click();
        }
    });
    $('#uploadFileElem').change(function() { uploadFile($(this).prop('files')[0]); }); // TODO
    // var takePicture = document.querySelector('#takePicture');
    // if(takePicture && showPicture) {
    //     takePicture.onchange = function (event) {
    //         var files = event.target.files;
    //         if (files && files.length > 0) {
    //             var file = files[0];
    //             try {
    //              var URL = window.URL || window.webkitURL;
    //              showPicture.onload = function(event) {
    //                  Result.innerHTML='';
    //                  BR.BarcodeReader.DecodeImage(showPicture);
    //                  URL.revokeObjectURL(showPicture.src);
    //              };
    //              showPicture.src = URL.createObjectURL(file);
    //             }
    //             catch (e) {
    //             }
    //         }
    //     };
    // }
};
 
module.exports = {init};
