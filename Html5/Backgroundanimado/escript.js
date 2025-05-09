var video=document.getElementById("meuVideo");
var btn=document.getElementById("btnPausa");

function pausarVideo(){
    if(video.paused){
        video.play();
        btn.innerHTML="pausa";
    }else{
        video.pause();
        btn.innerHTML="play";
    }
}