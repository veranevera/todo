var jsdom = require('jsdom');
var chai = require('chai');
var chaiImmutable = require('chai-immutable');

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

var hook = require('css-modules-require-hook');
var stylus = require('stylus');

hook({
    generateScopedName: '[name]_[local]__[hash:base64:5]',
    extensions: ['.styl'],
    preprocessCss: function (css, filename) {
        return stylus(css)
            .set('filename', filename)
            .render();
    }
});

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

chai.use(chaiImmutable);