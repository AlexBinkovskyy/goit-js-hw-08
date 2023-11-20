!function(){let e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("playing",function(e){console.log(e),localStorage.setItem("timeCode:")}),o.getVideoTitle().then(function(e){console.log("title:",e)});//     console.log(timeupdate);
//     // data is an object containing properties specific to that event
// };
// player.on('play', onPlay);
// player.on('timeupdate').then(function(seconds) {
//     console.log(seconds);
// })
}();//# sourceMappingURL=02-video.a5fbe7f8.js.map

//# sourceMappingURL=02-video.a5fbe7f8.js.map
