const Month=['jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const date=prompt("please enter date in dd/mm/yyyy or dd-mm-yyyy format ","00-00-0000");
//const date="01/07/2000";
let s;
if(date.charAt(2) == "-")
{
    s=date.split('-');
}else{
    s=date.split('/');
}
console.log(Month[s[1]-1]);