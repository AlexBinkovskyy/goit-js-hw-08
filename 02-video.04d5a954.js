!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n.register;var o=n("1WSnx");let i=document.querySelector("iframe"),l=new Vimeo.Player(i);l.on("timeupdate",(o&&o.__esModule?o.default:o).throttle(function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))},1e3)),l.on("seeking",function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}),l.on("play",function(){let e=JSON.parse(localStorage.getItem("videoplayer-current-time"))??{};l.setCurrentTime(e.seconds)})}();//# sourceMappingURL=02-video.04d5a954.js.map

//# sourceMappingURL=02-video.04d5a954.js.map
