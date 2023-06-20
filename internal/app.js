const express = require('express');

const app = express();


// Custom typechecks
global.typeOf = (obj) => {
    return ({}).toString.call(obj).match(/\s(\w+)/)[1].toLowerCase();
}

global.checkArgs = (args, types) => {
    args = [].slice.call(args);

    if (types == undefined) {
        throw new Error("Types are not provided for function");
    }

    for (let i = 0; i < types.length; ++i) {
        if (typeof (args[i]) != types[i]) {
            throw new TypeError(`param ${i} must be of type ${types[i]}`);
        }
    }
}

module.exports = app;