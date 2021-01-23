let colors=["rgb(255, 255, 0)","rgb(102, 0, 204)","rgb(153, 51, 51)","rgb(0, 204, 0)","rgb(255, 128, 0)"];
let direction="right";
function onLoadBody(){
    let result;
    result=alert('Greetings Mr. X Please choose the surprise box.');
    
if (result==undefined){
    let box1=document.getElementById("box1");
    box1.innerHTML="Click Me First";
}

}
let count=0;
function getNext(cc){
    let newColor;
    let current=colors.indexOf(cc);
    
    if (direction=="right"){
        if (current==colors.length-1){
            newColor=colors[0];
        }
        else{
            newColor=colors[current+1];
        }

    }
    else{
        if (current==0){
            newColor=colors[colors.length-1]
        }
        else{
            newColor=colors[current-1];
        }
    } 
    
    return newColor;
}
function changeColor(){
    let box4=document.getElementById("boxes4");
    let cc=box4.style.backgroundColor;
      box4.style.backgroundColor=getNext(cc);
    
}

function displayBox3(){
    let box3=document.getElementById("box3");
    box3.innerHTML="Oops,something is wrong";
    changeColor("right");
    setInterval(changeColor,5000);
}

document.addEventListener('keyup', (key) => {

    if (key.code =="ArrowLeft" || key.code=="ArrowDown") {
        direction="left";
        changeColor();
       
    }
    
    else if (key.code =="ArrowUp" || key.code=="ArrowRight"){
        direction="right";
        changeColor();
        
    }
  
    
});