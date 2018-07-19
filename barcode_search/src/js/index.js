'use strict';

const app = require('./app');
const BR = require('./BarcodeReader');

// TODO jquery
// BarcodeReader class
let showPicture; // TODO in class

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

const addButtons = (keywords) => {
    for (let i=0; i<keywords.length; i++) {
        const buttonStr = '<button type="button" id="keywords'+i+'" class="btn btn-primary key-button active" data-toggle="button" aria-pressed="false" autocomplete="off">'+keywords[i]+'</button>';
        const b = $(buttonStr);
        $('.keywords-container').append(b);
    }
};

const getSelectedKeywords = () => {
    let ret = [];
    for (let c of $('.keywords-container').children()) {
        const e = $(c);
        //console.log(e);
        if (e.hasClass('active')) {
            //console.log(e.text()+'is selected');
            ret.push(e.text());
        } else {
            //console.log(e.text()+'is not selected');
        }
    }
    return ret;
};

const getQuery = (keywords, s) => {
    let q='';
    for (let w of keywords) {
        q += w+s;
    }
    q = q.slice(0,-1*s.length);
    return q;
};

const getGoogleUrl = (keywords) => {
    const url='https://www.google.co.jp/search?q='+getQuery(keywords, '+');
    return url;
};

const getAmazonUrl = (keywords) => {
    const url='https://www.amazon.co.jp/s?field-keywords='+encodeURI(getQuery(keywords, '+'));
    return url;
};

const getRakutenUrl = (keywords) => {
    const url='https://search.rakuten.co.jp/search/mall/'+getQuery(keywords, '+')+'/';
    return url;
};

const getYahooShoppingUrl = (keywords) => {
    const url='https://search.shopping.yahoo.co.jp/search?p='+getQuery(keywords, '+');
    return url;
};

const getSevenNetUrl = (keywords) => {
    const url='https://7net.omni7.jp/search/?keyword='+getQuery(keywords, '+');
    return url;
};

const getMercariUrl = (keywords) => {
    const url='https://www.mercari.com/jp/search/?keyword='+getQuery(keywords, '+');
    return url;
};

const getRakumaUrl = (keywords) => {
    const url='https://fril.jp/search/'+getQuery(keywords, '%20');
    return url;
};

const getYahooAuctionsUrl = (keywords) => {
    const url='https://auctions.yahoo.co.jp/search/search?p='+getQuery(keywords, '+');
    return url;
};

const addSearchLink = (id, url) => {
    $('.dropdown-item#'+id).attr('href', url);
    // console.log(url);
};

const createSearchLink = (keywords) => {
    if (keywords.length === 0) return;

    addSearchLink('google', getGoogleUrl(keywords));
    addSearchLink('amazon', getAmazonUrl(keywords));
    addSearchLink('rakuten', getRakutenUrl(keywords));
    addSearchLink('yahooshopping', getYahooShoppingUrl(keywords));
    addSearchLink('sevennet', getSevenNetUrl(keywords));
    addSearchLink('mercari', getMercariUrl(keywords));
    addSearchLink('rakuma', getRakumaUrl(keywords));
    addSearchLink('yahooauctions', getYahooAuctionsUrl(keywords));

};

const clearButtons = () => {
    $('.keywords-container').empty();
};

const setLoading = () => {
    const loading = $('<div class="loading"></div>');
    $('.keywords-container').append(loading);
};

const clearLoading = () => {
    $('.keywords-container').empty();
};

const sendRequest = (searchJan) => {
    clearButtons();
    setLoading();
    //$('#janResult').text('loading');
    $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbzquZl9csXdZvehTLnUWWfdv_wf5Qbis4h53QFBGm-duR2gg3yd/exec',
        data: {
            jan: searchJan,
        },
        dataType: 'jsonp',
        jsonp: 'callback',
        crossDomain: true,
    }).done( (data) => {
        // console.log(data);
        clearLoading();
        addButtons(data);
        //$('#janResult').text('success');
    }).fail( (data) => {
        //$('#janResult').text('fail');
    }); // TODO always?
};

const barcodeInit = () => {
    // var Result = document.querySelector('#textbit');
    const canvas =document.getElementById('picture');
    const ctx = canvas.getContext('2d');
    BR.BarcodeReader.Init();
    BR.BarcodeReader.SetImageCallback(function(result) {
        hideBarcodeLoading();
        if(result.length > 0){
            const jan = result[0].Value;
            // console.log(`jan:${jan}`)
            svgShow('outline-check');
            sendRequest(jan);
        } else {
            svgShow('outline-cancel');
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
            clearButtons();
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

(() => {
    showPicture = document.createElement('img'); // TODO
    
    defaultSvgAttr('#outline-insert-photo', '#outline-insert-photo-line');
    $('#outline-insert-photo').on({
        'click': function() {
            $('#uploadFileElem').click();
        }
    });
    $('#uploadFileElem').change(function() { uploadFile($(this).prop('files')[0]); }); // TODO

    $('.dropdown-item').on({
        'click': function(e) {
            if (getSelectedKeywords().length === 0) {
                e.preventDefault();
                return;
            }
        }
    });

    $('#dropdownMenuLink').on({
        'click': function(e) {
            // console.log('search click');
            createSearchLink(getSelectedKeywords());
        }
    });
    // $('#outline-search').on({
    //     'click': function(e) {
    //         console.log('search click');
    //         createSearchLink(getSelectedKeywords());
    //     }
    // });
    //createSearchLink(['AAA','文字']);
    //$('.dropdown-toggle').dropdown('toggle');

})();

(() => {
    barcodeInit();
    
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
})();

(() => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
})();
