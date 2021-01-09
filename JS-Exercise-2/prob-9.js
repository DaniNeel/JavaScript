//const input=+prompt("please enter time stamp","1212");
const input="1607518718";
let date=new Date(input*1000);
const hr=date.getHours();
const min=date.getMinutes();
const sec=date.getSeconds();
console.log(date + ':' + hr + ':' + min + ':' + sec);