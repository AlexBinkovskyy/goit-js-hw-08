const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("playing",function(e){console.log(e),localStorage.setItem("timeCode:")}),o.getVideoTitle().then(function(e){console.log("title:",e)});// const onPlay = function(timeupdate) {
//     console.log(timeupdate);
//     // data is an object containing properties specific to that event
// };
// player.on('play', onPlay);
// player.on('timeupdate').then(function(seconds) {
//     console.log(seconds);
// })
//# sourceMappingURL=02-video.4f6b3855.js.map

//# sourceMappingURL=02-video.4f6b3855.js.map
