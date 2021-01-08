//const d1=prompt("please enter date in format mm/dd/yyyy","00/00/0000");
//const d2=prompt("please enter date in format mm/dd/yyyy","00/00/0000");
const d1='12/31/2018';
const d2='12/29/2020';
const date1 = new Date(d1);
const date2 = new Date(d2);
const diffMs = Math.abs(date1 - date2);
let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); 
console.log(diffDays + " days");
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
console.log(years + " " +"yaer"+" "+months + " " +"month"+" "+days+ " " +"day");