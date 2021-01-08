let array=[0,1,2,3,4,5,6,7,8,9,10];
while(true)
{
    var input=+prompt("please enter positive Finite number","1");
    
    if(isFinite(input) && input>0)
    {
        break;
    }
}
let first=array.slice(0,input);
let last=array.slice(-input,array.length);
console.log(first);
console.log(last);
