(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlpUnpack = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
var efrtUnpack = _dereq_('efrt-unpack');

var unpackPlurals = function(str) {
  return str.split(/,/g).reduce((h, s) => {
    var arr = s.split(/\|/g)
    if (arr.length == 3) {
      h[arr[0] + arr[1]] = arr[0] + arr[2]
    } else if (arr.length == 2) {
      h[arr[0]] = arr[0] + arr[1]
    } else {
      h[arr[0]] = arr[0]
    }
    return h;
  }, {});
}

var unpack = function(obj) {
  if (typeof obj === 'string') {
    obj = JSON.parse(obj);
  }
  //words is packed with efrt
  if (obj.words && typeof obj.words === 'string') {
    obj.words = efrtUnpack(obj.words)
  }
  //tags are just stringified
  if (obj.tags && typeof obj.tags === 'string') {
    obj.tags = JSON.parse(obj.tags);
  }

  //plurals is packed in a weird way
  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpackPlurals(obj.plurals)
  }
  return obj
};
module.exports = unpack;

},{"efrt-unpack":1}]},{},[2])(2)
});(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlpUnpack = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
var efrtUnpack = _dereq_('efrt-unpack');

var unpackPlurals = function(str) {
  return str.split(/,/g).reduce((h, s) => {
    var arr = s.split(/\|/g)
    if (arr.length == 3) {
      h[arr[0] + arr[1]] = arr[0] + arr[2]
    } else if (arr.length == 2) {
      h[arr[0]] = arr[0] + arr[1]
    } else {
      h[arr[0]] = arr[0]
    }
    return h;
  }, {});
}

var unpack = function(obj) {
  if (typeof obj === 'string') {
    obj = JSON.parse(obj);
  }
  //words is packed with efrt
  if (obj.words && typeof obj.words === 'string') {
    obj.words = efrtUnpack(obj.words)
  }
  //tags are just stringified
  if (obj.tags && typeof obj.tags === 'string') {
    obj.tags = JSON.parse(obj.tags);
  }

  //plurals is packed in a weird way
  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpackPlurals(obj.plurals)
  }
  return obj
};
module.exports = unpack;

},{"efrt-unpack":1}]},{},[2])(2)
});(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlpUnpack = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.unpack=e()}}(function(){return function e(r,n,o){function t(f,u){if(!n[f]){if(!r[f]){var s="function"==typeof _dereq_&&_dereq_;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[f]={exports:{}};r[f][0].call(c.exports,function(e){var n=r[f][1][e];return t(n?n:e)},c,c.exports,e,r,n,o)}return n[f].exports}for(var i="function"==typeof _dereq_&&_dereq_,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,r,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(e,r,n){return e[r]=n,e},{}),f=function(e){if(void 0!==t[e])return t[e];for(var r=1,n=o,i="";e>=n;e-=n,r++,n*=o);for(;r--;){var f=e%o;i=String.fromCharCode((f<10?48:55)+f)+i,e=(e-f)/o}return i},u=function(e){if(void 0!==i[e])return i[e];for(var r=0,n=1,t=o,f=1;n<e.length;r+=t,n++,t*=o);for(var u=e.length-1;u>=0;u--,f*=o){var s=e.charCodeAt(u)-48;s>10&&(s-=7),r+=s*f}return r};r.exports={toAlphaCode:f,fromAlphaCode:u}},{}],2:[function(e,r,n){"use strict";var o=e("./unpack");r.exports=function(e){"string"==typeof e&&(e=JSON.parse(e));var r={};return Object.keys(e).forEach(function(n){var t=o(e[n]);"true"===n&&(n=!0);for(var i=0;i<t.length;i++){var f=t[i];r.hasOwnProperty(f)===!0?Array.isArray(r[f])===!1?r[f]=[r[f],n]:r[f].push(n):r[f]=n}}),r}},{"./unpack":4}],3:[function(e,r,n){"use strict";var o=e("../encoding");r.exports=function(e){for(var r=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var t=r.exec(e.nodes[n]);if(!t){e.symCount=n;break}e.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)}},{"../encoding":1}],4:[function(e,r,n){"use strict";var o=e("./symbols"),t=e("../encoding"),i=function(e,r,n){var o=t.fromAlphaCode(r);return o<e.symCount?e.syms[o]:n+o+1-e.symCount},f=function(e){var r=[],n=function n(o,t){var f=e.nodes[o];"!"===f[0]&&(r.push(t),f=f.slice(1));for(var u=f.split(/([A-Z0-9,]+)/g),s=0;s<u.length;s+=2){var a=u[s],c=u[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(e,c,o);n(p,d)}else r.push(d)}}};return n(0,""),r},u=function(e){var r={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&o(r),f(r)};r.exports=u},{"../encoding":1,"./symbols":3}]},{},[2])(2)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
var efrtUnpack = _dereq_('efrt-unpack');

var unpackPlurals = function(str) {
  return str.split(/,/g).reduce((h, s) => {
    var arr = s.split(/\|/g)
    if (arr.length == 3) {
      h[arr[0] + arr[1]] = arr[0] + arr[2]
    } else if (arr.length == 2) {
      h[arr[0]] = arr[0] + arr[1]
    } else {
      h[arr[0]] = arr[0]
    }
    return h;
  }, {});
}

var unpack = function(obj) {
  if (typeof obj === 'string') {
    obj = JSON.parse(obj);
  }
  //words is packed with efrt
  if (obj.words && typeof obj.words === 'string') {
    obj.words = efrtUnpack(obj.words)
  }
  //tags are just stringified
  if (obj.tags && typeof obj.tags === 'string') {
    obj.tags = JSON.parse(obj.tags);
  }

  //plurals is packed in a weird way
  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpackPlurals(obj.plurals)
  }
  return obj
};
module.exports = unpack;

},{"efrt-unpack":1}]},{},[2])(2)
});