const 
    music=document.querySelector("#music"),
    playBtn=music.querySelector(".play"),
    stopBtn=music.querySelector(".stop"),
    musicWrap=music.querySelector("audio");

function playMus(){
    musicWrap.play();
    musicWrap.volume = 0.3;
    playBtn.classList.add("hidden");
    stopBtn.classList.remove("hidden");    
};

function stopMus(){
    musicWrap.pause();
    stopBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
}

playBtn.addEventListener("click",playMus);
stopBtn.addEventListener("click",stopMus);