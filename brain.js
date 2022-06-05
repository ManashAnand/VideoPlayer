window.onload = () => {

    vid = document.getElementById("videoPlayer");
    boxBelow = document.getElementById("boxBelow");
    boxMed = document.getElementById("boxMed");
    container = document.getElementById("container");
    toogle = document.getElementById("toogle");
    forw = document.getElementById('forw');
    back = document.getElementById("back");
    sound = document.getElementById('sound');
    speed = document.getElementById('speed');
    videoTime = document.getElementById('videoTime');
    input = document.querySelector("input");
    same = document.querySelectorAll(".same");




// Eventlistener
 vid.addEventListener('mouseover',ThingsUp)
 vid.addEventListener('dblclick',ThingsDown)
toogle.addEventListener('click',toogleSound);
vid.addEventListener('click',toogleSound);
forw.addEventListener('click',forward);
back.addEventListener('click',backward);

sound.addEventListener('change',soundControll);
sound.addEventListener('mousemove',soundControll);

speed.addEventListener('mousemove',speeddControll);
speed.addEventListener('change',speeddControll);

input.addEventListener('change',changeVideoTime);

// Function
function ThingsUp()
{
    boxBelow.classList.add('onPlayer');
    boxMed.classList.add('onPlayer');
}
function ThingsDown()
{
    boxBelow.classList.remove('onPlayer');
    boxMed.classList.remove('onPlayer');

}
function toogleSound(){
    if(vid.paused)
    { 
        vid.play();
        toogle.innerText = "⏸︎";
  
    }
        else 
        {
            vid.pause()
            toogle.innerText = "▶";
            updateTime();
    
        }
}
function forward()
{
    vid.currentTime += 10 ;
}     
 function backward()
 {
     vid.currentTime -= 10;
 }   

function soundControll()
{

    vid.volume = sound.value ;
    
}
function speeddControll()
{
    vid.playbackRate = speed.value;
}

function changeVideoTime()
{
    console.log(vid.currentTime)
    console.log(this.value);
    vid.currentTime = this.value;
    
}

function updateTime()
{
    step = vid.currentTime;


    if(vid.paused)
    {
    input.value = step;

    }
    step++;
}



}
