//let d1 = prompt(" Please Enter date 1 in 'MM/DD/YYYY' format");
//let d2 = prompt("Please Enter date 2 in 'MM/DD/YYYY' format");

let d1= '07/01/2018';
let d2='05/03/2020';
let date1 = new Date(d1);
let date2 = new Date(d2);
let min = parseInt((date2 - date1) / (1000 * 60), 10);

let hou = Math.floor(min/60);
let daysout = Math.floor(hou/24);
let week = Math.floor(daysout/7)+"weeks" +daysout%7+"day";
let mon = Math.floor(daysout/30)+"months"+daysout%30+"day";


//for year same as question 8
const diffMs = Math.abs(date1 - date2);
let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); 
let months = 0, years = 0, days = 0, weeks = 0;
let flag=0;
while(diffDays){
      if(diffDays >= 365){
         years++;
         diffDays -= 365;
      }
      else if(diffDays >= 30){
         months++;
         if(flag==0)
         {
             diffDays -= 31;
             flag=1;
         }
         else{
            diffDays -= 30;
            flag=0;
         }
      }
        else{
         days++;
         diffDays--;
      }
}
let y=years + " " +"yaer"+" "+months + " " +"month"+" "+days+ " " +"day";

console.log(y+"or "+ "\n" +mon+"or "+"\n" +week+"or"+"\n" +daysout+" days "+"oR"+"\n"+hou+" hours"+"or "+"\n"+min+" minutes");