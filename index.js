let video = document.getElementById("video");


function boo() {
    let playIcon = document.getElementById("playPause");
    if (playIcon.classList.contains('fa-play')) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        video.play();
    } else {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        video.pause();
    }

}

function openPopup() {
    let myElement=document.getElementsByClassName("popup")[0];
    myElement.style.visibility="visible";
}

 function closePopup(){
    let myElement=document.getElementsByClassName("popup")[0];
    myElement.style.visibility="hidden";
}