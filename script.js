console.log("Hello Stop-Watch");
let watch=document.getElementById("watch");
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');

// flag to handle multiple click on start button 
//clock will start only once when flag is set to false if we click several time repeatedly on start
let startFlag=false;
let milliseconds=0;
let seconds=0;
let minutes=0;
let hours=0;
let startid;
// for adding Timer functionality logic
function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
}
// Adding "click" event on clicking start button to start the watch
start.addEventListener('click',()=>{
  if(startFlag==false)
  {
    startFlag=true;
    startId= setInterval(()=>{
        displayTimer();
       watch.innerHTML=`<h1>${(minutes<10)?"0"+minutes:minutes} : ${(seconds<10)?"0"+seconds:seconds} </h1>`
    },10)
  }
})

// Adding "click" event on clicking stop button to stop the watch
stop.addEventListener('click',()=>{
    console.log("Time out watch should stop")
    clearInterval(startId);
    startFlag=false;
})

// Adding "click" event on clicking reset button to reset the watch to 00:00
reset.addEventListener('click',()=>{
    clearInterval(startId);
    startFlag=false;
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    watch.innerHTML=`<h1>${minutes+"0"} : ${seconds+"0"} </h1>`
})