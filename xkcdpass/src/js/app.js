'use strict';

const noun = require('./noun.json');

const getHepburn = (str) => {
    return str.replace(/si/g, 'shi').replace(/ti/g, 'chi').replace(/tu/g, 'tsu').replace(/hu/g, 'fu').replace(/zi/g, 'ji').replace(/di/g, 'ji').replace(/du/g, 'zu');
};

const getPassword = (wordNum, isHepburn) => {
    const max = noun.length;
    const ret = [];
    for (let i=0; i< wordNum; i++) {
        //const n = Math.floor(Math.random() * max);
        const rand = window.crypto.getRandomValues(new Uint32Array(1))[0]/65536/65536;
        // console.log(window.crypto.getRandomValues(new Uint8Array(1))[0]);
        
        // 0..nounJson.length-1
        const n = Math.floor(rand * max);
        let out = noun[n].replace(/-/g, '');
        if (isHepburn) out = getHepburn(out);
        ret.push(out);
    }
    return ret;
};

module.exports = {getPassword}
