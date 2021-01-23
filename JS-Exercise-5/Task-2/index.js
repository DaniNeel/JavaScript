let arr = [

    { name: "Ashish Shah" },
    { name: "Rashmin Chattrala" },
    { name: "Yash Dubey" },
    { name: "Prakash Jain" },
    { name: "Yashraj Singh" },
    { name: "viraj Sinha" },
    { name: "Rajesh Kumar" },
    { name: "Mahesh Marwadi" },
    { name: "Suresh Sahani" },
    { name: "Amar Vilas" },


];

let table = document.getElementById("disp");
table.innerHTML = "";

for(let i=0;i<arr.length;i++){
    
            let row = `<tr>
                <td>${arr[i].name}</td>
                 </tr>`;
    table.innerHTML += row;          
    
}
document.getElementById("search").addEventListener("input", function () {

    let searched = document.getElementById("search").value;
    if(!(searched.length<1))
    {
        document.getElementById("disp").innerHTML="";

        let re = new RegExp(searched, "g");

        var resultl = arr.filter(function (el) {
            return re.test(el.name);
        });

        for(let j=0;j<resultl.length;j++)
        {
            
            let display=resultl[j].name;
            let newDisplay=display.replace(re,`<mark style="color:blue">${searched}</mark>`);
            let row = `<tr>
                        <td>${newDisplay}</td>
                        </tr>`;
            document.getElementById("disp").innerHTML +=row;
        
        } 
    }
    else{
        let table = document.getElementById("disp");
        table.innerHTML = "";

        for(let i=0;i<arr.length;i++){
    
            let row = `<tr>
                <td>${arr[i].name}</td>
        </tr>`
    table.innerHTML += row;          
    
}
       
    }


});