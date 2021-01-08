
while(true){
   var input=prompt("Please Enter positive Number","1");    
   if(isFinite(input) && input>=0){
       break;
   }
}
const array = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];
let out=[];
function fillArray(a,b,jump)
{
    const inda=array.indexOf(a);
    const indb=array.indexOf(b);
    for(let i=inda;i<=indb;i=i+jump)
    {
        out.push(array[i]);
    }
}
fillArray("a","q",input);
console.log(out);
