import "../css/base.css";
window._ = require('lodash');

try {
 window.$ = window.jQuery = require('jquery');

 require('popper.js');
 require('bootstrap');
} catch (e) {}

function preLoaderStuffs() {
 console.log("hello world!!, working async/await process()");
}

async function pageLoader() {
 await document.addEventListener('DOMContentLoaded', function () {
  preLoaderStuffs();
 });
}

pageLoader();
/* */