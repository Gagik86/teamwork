let pause = document.getElementById("pause");
let video = document.getElementById("video");


function boo() {
    if(video.paused) {
        document.getElementById("fa-play").style.display="none";
        document.getElementById("pause").style.display="block";
        video.play();
    } else {
        video.pause()
        document.getElementById("fa-play").style.display="block";
        document.getElementById("pause").style.display="none";
    }
}

