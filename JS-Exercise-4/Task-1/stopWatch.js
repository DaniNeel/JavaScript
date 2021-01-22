//Code For showTime and showDate
function showTimeDate(){
    let date = new Date();
    const Month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    let d=`${date.getDate()}  ${Month[date.getMonth()]}  ${date.getFullYear()}`; 
    
    document.getElementById("time").textContent = `Time  ${time}`;
    document.getElementById("date").textContent = `Date  ${d}`;
    setTimeout(showTimeDate, 1000);
    
}
showTimeDate();

//Code For StopWatch Start
let mseconds=0,seconds = 0, minutes = 0, hours = 0;
let watchElement=document.getElementById("sw");

function timeChange() {
    mseconds++;
    if(mseconds>=100){
        mseconds=0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
}

watchElement.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + ":" + (mseconds > 9 ? mseconds : "0" + mseconds);

watchStart();
}
function watchStart() {
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    document.getElementById("btnReset").disabled = false;
    t = setTimeout(timeChange, 9);
}

//Code For StopWatch Stop
function watchStop() {
    document.getElementById("btnStop").disabled = true;
    document.getElementById("btnResume").disabled = false;
    document.getElementById("btnReset").disabled = false;
    clearTimeout(t);
}

//Code For StopWatch Resume
function watchResume()
{
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    document.getElementById("btnReset").disabled = false;
    document.getElementById("btnResume").disabled = true;
    watchStart();

}

//Code For StopWatch Reset
function watchReset() {
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
    document.getElementById("btnResume").disabled = true; 
    document.getElementById("btnReset").disabled = true;  
    clearTimeout(t);
    watchElement.textContent = "00:00:00:00";
    mseconds=0,seconds = 0; minutes = 0; hours = 0;
}