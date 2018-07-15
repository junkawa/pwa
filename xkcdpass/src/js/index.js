'use strict';

const app = require('./app');

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

const updateView = () => {
    const maxWordNum = 6;
    const wordNum = $("input[name='wordNumRadios']:checked").val();
    const isHepburn = $("#hepburn").prop("checked");
    const passwords = app.getPassword(wordNum, isHepburn);
    let updateNum = 0;
    passwords.forEach( (v, i) => {
        const id = '#word'+i;
        $(id).text(v);
        updateNum = i;
    });
    for (let i = updateNum+1; i<maxWordNum; i++) {
        const id = '#word'+i;
        $(id).text('');
    }
};

(() => {
    updateView();
    
    defaultSvgAttr('#svg-replay', '#svg-replay-line');
    $('#svg-replay').on({
        'click': function() {
            updateView();
        }
    });
    
    defaultSvgAttr('#outline-open-in-new', '#outline-open-in-new-line');
    $('#outline-open-in-new').on({
        'click': function() {
            let a = $('<a></a>').on({
                'click': function() {
                    location.href = "../";
                }
            });
            a.trigger('click');
        }
    });
})();

(() => {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker
            .register('./sw.js');
    }
})();
