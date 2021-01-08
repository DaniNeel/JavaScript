
while(true){
     let input=prompt("Please Enter Number","1");    
    if(isFinite(input) && input>0){
        break;
    }
}
let out=[];
out.push(input[0]);
for(let i=0;i<input.length-1;i++)
{
        
    if(+input[i]%2==0 && +input[i+1]%2==0)
    {
        out.push("-");
    }
    out.push(input[i+1]);
}
console.log(out.join(""));

