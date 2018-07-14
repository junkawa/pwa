'use strict';

var app = require('./app');

const getWStr = (str) => {
    
    const returnEscaped = str.replace(/\r\n/, '\n');
    let spread = [...returnEscaped];
    
    let ret = '';
    
    for (let c of spread) {
        if (c === '\n')
            ret += 'ww'+c;
        else
            ret += c+'w';
        // console.log(c);
    }
    ret += 'ww';
    
    const sanitizedOutput = ret.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    return sanitizedOutput.replace(/\n/g, '<br>');
};

const updateView = () => {
    const input = $('#inputTextarea').val();
    if (input.length === 0) {
        $('#viewArea').text('');
        return;
    }

    const output = getWStr(input);
    
    //$('#viewArea').text(output);
    $('#viewArea').html(output);
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

(function() {
    defaultSvgAttr('#svg-w', '#svg-w-line');
    $('#svg-w').on({
        'click': function() {
            updateView();
        }
    });
    
    // defaultSvgAttr('#outline-open-in-new', '#outline-open-in-new-line');
    // $('#outline-open-in-new').on({
    //     'click': function() {
    //         let a = $('<a></a>').on({
    //             'click': function() {
    //                 location.href = "../";
    //             }
    //         });
    //         a.trigger('click');
    //     }
    // });
})();

(function() {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js');
    }
})();
