
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('playing', function(timeupdate) {
        console.log(timeupdate);
        localStorage.setItem("timeCode:")
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    // const onPlay = function(timeupdate) {
    //     console.log(timeupdate);
    //     // data is an object containing properties specific to that event
    // };
    
    // player.on('play', onPlay);
    
    
    // player.on('timeupdate').then(function(seconds) {
    //     console.log(seconds);
    // })
