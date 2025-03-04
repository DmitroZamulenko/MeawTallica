let money=0;
let shop=['site_project_home_background.jpg','site_project_home_currency.png','site_project_home_manager.png'];
let i=0;
document.getElementById("manager").addEventListener('click',tap);
function tap(event){
    document.getElementById("manager").animate([
        {
            height:"130px",
            transform: "translateY(90px)"
        }
    ],{
        duration:150,
        iterations:1
    });
    money++;
    document.getElementById("money").innerHTML=`${money}`;
    document.getElementById("money").title=`${money}`;
};
let music=['trek1.mp3','trek2.mp3','trek3.mp3'];
let sound=document.getElementById('sound');
let button=document.getElementById('play');
let j=0;
button.addEventListener('click',play);
function play(event){
    if(sound.paused){
        sound.play()
        button.innerHTML='OFF';
    }
    else{
        sound.pause();
        button.innerHTML='ON';
    }
}
sound.onended=function(){
    j=(j+1)%3;
    sound.src=music[j];
    sound.play();
}