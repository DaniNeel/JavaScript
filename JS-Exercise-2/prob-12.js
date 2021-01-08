//let input=prompt("please enter string","1");
//const pos=+prompt("please enter positive number","1");
let input="RapidOpsSolution";
const pos=2;
let out=[];
function chop(s,jump){
    for(i=0;i<s.length;i=i+jump)
    {
        out.push(s.substr(i,jump));
     
    }
}
chop(input,pos);
console.log(out);