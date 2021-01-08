let action;
while(true)
    {
        action=+prompt("please enter 1 for delete and 2 for insert","1");
        if(action==1 || action== 2)
        {
            break;
        }
    }
let pos=+prompt("please enter position of delete or insert","1");
// let action=1;
// let pos=1;
// let name="neel";
// let age="21";
array = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ];



    if(action==1)
    {
        if(pos < array.length && pos >=0)
        {
            array.splice(pos,1)
            console.log("element deleted");
            console.log(array);
            console.log("------------------");
        }
        else{
            console.log("please enter valid position");
        }
    }
    else{
        if(pos <= array.length && pos >=0)
        {
            let name=prompt("please enter name","h");
            let age=+prompt("please enter age","1");
            let user={
                name:name,
                age:age,
            }
            array.splice(pos,0,user);
            console.log("element inserted");
            console.log(array);
        }
        else{
            console.log("please enter valid position");
        }
    }

