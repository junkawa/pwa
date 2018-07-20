'use strict';

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

const updateKeywords = (jan) => {
    sendRequest(jan);
};

const init = () => {
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

    // addButtons(['AAAA','FUUUUUUU']);

    // $('#outline-search').on({
    //     'click': function(e) {
    //         console.log('search click');
    //         createSearchLink(getSelectedKeywords());
    //     }
    // });
};

module.exports = {init, updateKeywords};
