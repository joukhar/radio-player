var title = document.getElementById("title");
var main = document.getElementsByTagName("main")[0];
var music = document.getElementById("music");
var radio = document.createElement("audio");
var songName = document.getElementById("song-name");
var color = document.getElementsByClassName("color");
var backBtn = document.getElementById("back");
var playBtn = document.getElementById("play");
var forwardBtn = document.getElementById("forward");
var precedentBtn = document.getElementById("precedent");
var nextBtn = document.getElementById("next");
var switchBtn = document.getElementById("switch");
var volume = document.getElementById("volume");
var speed = document.getElementById("speed");

function _0x3510(_0xe59ad3,_0x2280c0){var _0x3cd35f=_0x3cd3();_0x3510=function(_0x3510c5,_0x2d33b2){_0x3510c5=_0x3510c5-0xf3;var _0x1a253e=_0x3cd35f[_0x3510c5];return _0x1a253e;};return _0x3510(_0xe59ad3,_0x2280c0);}var _0x318694=_0x3510;(function(_0x346230,_0x253b78){var _0x1fa2d3=_0x3510;var _0xac13c1=_0x346230();while(!![]){try{var _0x43da81=parseInt(_0x1fa2d3(0x107))/0x1+-parseInt(_0x1fa2d3(0x105))/0x2*(parseInt(_0x1fa2d3(0x101))/0x3)+-parseInt(_0x1fa2d3(0x104))/0x4*(parseInt(_0x1fa2d3(0xf5))/0x5)+parseInt(_0x1fa2d3(0xf3))/0x6+parseInt(_0x1fa2d3(0xf7))/0x7*(parseInt(_0x1fa2d3(0xfb))/0x8)+parseInt(_0x1fa2d3(0xfc))/0x9*(-parseInt(_0x1fa2d3(0xfa))/0xa)+-parseInt(_0x1fa2d3(0x103))/0xb*(parseInt(_0x1fa2d3(0xf4))/0xc);if(_0x43da81===_0x253b78){break;}else{_0xac13c1['push'](_0xac13c1['shift']());}}catch(_0x21c822){_0xac13c1['push'](_0xac13c1['shift']());}}}(_0x3cd3,0x200fb));function _0x3cd3(){var _0x10872e=['https://streamer.eagrpservices.com/audio/radiomars.mp3','60trPuJo','1993064Bwfszs','346734ahAlVd','https://broadcast.ice.infomaniak.ch/aswat-high.mp3','https://medinafm.ice.infomaniak.ch/medinafm-64.mp3','Musics/numb-official-music-video-linkin-park.mp3','https://stream.live.vc.bbcmedia.co.uk/bbc_arabic_radio','174BURUAj','https://stream.mixfeever.com/','56221tiHkMS','240116ludwVc','2938bWxnuI','https://live-reflector.ice.infomaniak.ch/chadafm-high.mp3','190804urcDHL','https://icecast.skyrock.net/s/casa_aac_64k?tvr_name=mytuner&tvr_section1=64aac','https://stream.live.vc.bbcmedia.co.uk/bbc_world_service','621300pmfJbq','84ZrTxKL','5JqmpaZ','Musics/in-the-end.mp3','7FLDuBY','https://streamer.eagrpservices.com/audio/medradio.mp3'];_0x3cd3=function(){return _0x10872e;};return _0x3cd3();}var musics=['Musics/the-weeknd-blinding-lights-slowed-reverb.mp3',_0x318694(0xff),_0x318694(0xf6)];var R=[_0x318694(0xf8),_0x318694(0x100),'https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3',_0x318694(0x108),_0x318694(0x109),_0x318694(0x102),_0x318694(0x106),_0x318694(0xf9),_0x318694(0xfd),'https://live.medi1.com/medi1',_0x318694(0xfe)];

// console.log(music.duration);
radio.src = R[R.length - 2];
let i = 0;
let iR = R.length - 2;
nextBtn.addEventListener("click", () => {
    if (switchBtn.innerText.toLowerCase().includes("radio") === true) {
        if (i < musics.length - 1) {
            i++;
        } else {
            i = 0;
        };
        music.setAttribute("src", musics[i]);
        songName.innerText = music.getAttribute("src").substring(7, music.getAttribute("src").match(".mp3").index).replace(/-/gi, " ");
        if (playBtn.classList.contains("bi-pause-circle")) {
            music.play();
        };
        
    } else {
        if (iR < R.length - 1) {
            iR++;
        } else {
            iR = 0;
        };
        radio.setAttribute("src", R[iR]);
         
        songName.innerText = radio.getAttribute("src").substring(radio.getAttribute("src").lastIndexOf("/") + 1).replace((/\-|\_|\?|\=|\.mp3|\&/gi), " ");
        if (playBtn.classList.contains("bi-pause-circle")) {
            radio.play();
        };
    };
    if (songName.innerText === "") {
        songName.innerText = "Otaku Desu";
    }
    // turn input to default if user change the song
    music.volume = 0.5;
    radio.volume = 0.5;
    volume.value = 50;
    speed.value = 100;
    music.playbackRate = 1;
    radio.playbackRate = 1;
});
precedentBtn.addEventListener("click", () => {

    if (switchBtn.innerText.toLowerCase().includes("radio") === true) {
        if (i <= musics.length - 1) {
            if (i > 0) {
                i--;
            } else if (i === 0) {
                i = musics.length - 1;
            }
        };

        music.setAttribute("src", musics[i]);
        if (playBtn.classList.contains("bi-pause-circle")) {
            music.play();
        }
        songName.innerText = music.getAttribute("src").substring(7, music.getAttribute("src").match(".mp3").index).replace(/-/gi, " ");

    } else if (switchBtn.innerText.toLowerCase().includes("radio") === false) {
        if (iR <= R.length - 1) {
            if (iR > 0) {
                iR--;
            } else if (iR === 0) {
                iR = R.length - 1;
            }
        };
        radio.setAttribute("src", R[iR]);
         
        if (playBtn.classList.contains("bi-pause-circle")) {
            radio.play();
        }
        songName.innerText = radio.getAttribute("src").substring(radio.getAttribute("src").lastIndexOf("/") + 1).replace((/\-|\_|\?|\=|\.mp3|\&/gi), " ");
    }
    if (songName.innerText === "") {
        songName.innerText = "Otaku Desu";
    }
    // turn input to default if user change the song
    music.volume = 0.5;
    radio.volume = 0.5;
    volume.value = 50;
    speed.value = 100;
    music.playbackRate = 1;
    radio.playbackRate = 1;
});


backBtn.addEventListener("click", () => {
    let minuseconds = document.getElementById("minuseconds");
    minuseconds.classList.add("active");
    setTimeout(() => {
        minuseconds.classList.remove("active");
    }, 800);

    if (switchBtn.innerText.toLowerCase().includes("radio") === true) {
        if (music.duration >= music.currentTime > 0) {
            music.currentTime -= 2;
        };
    } else {
        if (radio.duration >= radio.currentTime > 0) {
            radio.currentTime -= 2;
        };
    };

});

forwardBtn.addEventListener("click", () => {
    let addseconds = document.getElementById("addseconds");
    addseconds.classList.add("active");
    setTimeout(() => {
        addseconds.classList.remove("active");
    }, 800);

    if (switchBtn.innerText.toLowerCase().includes("radio") === true) {
        if (music.currentTime <= music.duration) {
            music.currentTime += 2;
        };
    } else {
        if (radio.currentTime <= radio.duration) {
            radio.currentTime += 2;
        };
    };
});


playBtn.addEventListener("click", () => {
    if (switchBtn.innerText.toLowerCase().includes("radio") === true) {
        if (playBtn.getAttribute("class").includes("bi-play-circle")) {
            playBtn.classList.replace("bi-play-circle", "bi-pause-circle");
            radio.pause();
            music.play();
            document.title = `Music Player - Enjoy ^_____^`;
        } else if (playBtn.getAttribute("class").includes("bi-pause-circle")) {
            playBtn.classList.replace("bi-pause-circle", "bi-play-circle");
            music.pause();
            document.title = `Music Player`;
        };
    } else {
        if (playBtn.getAttribute("class").includes("bi-play-circle")) {
            playBtn.classList.replace("bi-play-circle", "bi-pause-circle");
            music.pause();
            radio.play();
            document.title = `Radio Player - Enjoy ^_____^`;
        } else if (playBtn.getAttribute("class").includes("bi-pause-circle")) {
            playBtn.classList.replace("bi-pause-circle", "bi-play-circle");
            radio.pause();
            document.title = `Radio Player`;
        };
    };
});

for (let i = 0; i < color.length; i++) {
    const e = color[i];
    e.addEventListener("click", () => {
        let colorCS = window.getComputedStyle(e, null);
        let bgCS = window.getComputedStyle(document.body, null);
        // console.log(colorCS);
        document.body.style.background = colorCS.getPropertyValue("background");
        // console.log(bgCS.getPropertyValue("background").search("repeat"));
        // console.log(bgCS.getPropertyValue("background").substring(17,77));// 17 77
        if (i < 3) {
            localStorage.setItem("bg-color", bgCS.getPropertyValue("background").substring(17, 77));
        } else if (i === 3) {
            localStorage.setItem("bg-color", bgCS.getPropertyValue("background").substring(17, 98));
        };

    });
};
// volume functions
function volumeMusic() {
    music.volume = volume.value / 100;
};
function volumeRadio() {
    radio.volume = volume.value / 100;
};

// sound speed functions 
function speedMusic() {
    music.playbackRate = speed.value / 100;
};
function speedRadio() {
    radio.playbackRate = speed.value / 100;
};

volume.addEventListener("dblclick", () => {
    volume.value = 50;
    music.volume = 0.5;
    radio.volume = 0.5;
});
speed.addEventListener("dblclick", () => {
    speed.value = 100;
    music.playbackRate = 1;
    radio.playbackRate = 1;
});



switchBtn.addEventListener("click", () => {
    let RM = document.getElementById("radio-music-title");

    if (switchBtn.innerText.toLowerCase().includes("radio") === true) {
        document.title = `Radio Player`;
        RM.innerText = "Radio Channel";
        document.getElementById("title").innerText = "Radio Player";
        switchBtn.innerHTML = switchBtn.textContent.toLowerCase().substring(10, switchBtn.textContent.toLowerCase().lastIndexOf(0)) + 'music <i id="switchBtn" class="bi bi-arrow-clockwise"></i>';
        songName.innerText = radio.getAttribute("src").substring(radio.getAttribute("src").lastIndexOf("/") + 1).replace((/\-|\_|\?|\=|\.mp3|\&/gi), " ");
        playBtn.classList.replace("bi-pause-circle", "bi-play-circle");
        music.pause();
        volume.addEventListener("change", volumeRadio);
        speed.addEventListener("change", speedRadio);
        volume.value = 50;
        radio.volume = 0.5;
        speed.value = 100;
        radio.playbackRate = 1;

    } else if (switchBtn.innerText.toLowerCase().includes("radio") === false) {
        document.title = `Music Player`;
        RM.innerText = "Song name";
        document.getElementById("title").innerText = "Music Player";
        switchBtn.innerHTML = switchBtn.textContent.toLowerCase().substring(10, switchBtn.textContent.toLowerCase().lastIndexOf(0)) + 'radio <i id="switchBtn" class="bi bi-arrow-clockwise"></i>';
        songName.innerText = music.getAttribute("src").substring(7, music.getAttribute("src").match(".mp3").index).replace(/\-/gi, " ");
        playBtn.classList.replace("bi-pause-circle", "bi-play-circle");
        radio.pause();
        volume.addEventListener("change", volumeMusic);
        speed.addEventListener("change", speedMusic);
        volume.value = 50;
        music.volume = 0.5;
        speed.value = 100;
        music.playbackRate = 1;
    };

});

// console.log(document.getElementById("title").innerText.toLowerCase().includes(`r`||'g'));
if (switchBtn.innerText.toLowerCase().includes("radio") === true) {
    document.getElementById("radio-music-title").innerText = "Song name";
    document.getElementById("title").innerText = "Music Player";


    songName.innerText = music.getAttribute("src").substring(7, music.getAttribute("src").match(".mp3").index).replace(/-/gi, " ");
    volume.addEventListener("change", volumeMusic);
    speed.addEventListener("change", speedMusic);
} else {
    document.getElementById("radio-music-title").innerText = "Radio Channel";
    document.getElementById("title").innerText = "Radio Player";
    songName.innerText = radio.getAttribute("src").substring(radio.getAttribute("src").lastIndexOf("/") + 1).replace((/\-|\_|\?|\=|\.mp3|\&/gi), " ");
    volume.addEventListener("change", volumeRadio);
    speed.addEventListener("change", speedRadio);
};


window.addEventListener("load", () => {
    document.getElementById("loader").style.opacity = "0";
    document.getElementById("loader").style.pointerEvents = "none";
    document.body.style.background = localStorage.getItem("bg-color");
});

