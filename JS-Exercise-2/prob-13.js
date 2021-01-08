//let input=prompt("please enter positive number","1");
let input="1023165454197";
const pos=3;
let out=[];
let putComma=[];
for (let i=input.length-4;i>=0;i-=3)
{
    out.push(i) 
}
console.log(out);
for (let i=0;i<out.length;i++)
{
        input=input.slice(0,out[i]+1)+","+input.slice(out[i]+1);
}
console.log(input);