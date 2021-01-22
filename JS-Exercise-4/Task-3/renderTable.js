//Render Data
const array=[{firstName:"neel",lastName:"Dani"},{firstName:"smit",lastName:"hapani"},{firstName:"romit",lastName:"gandhi"},{firstName:"smit",lastName:"panchal"},{firstName:"abc",lastName:"def"},{firstName:"ghi",lastName:"jkl"},{firstName:"mno",lastName:"pqr"},{firstName:"stu",lastName:"vwx"},{firstName:"yza",lastName:"bcd"},{firstName:"efg",lastName:"hij"}];
let rowCount=1;
let userTable=document.getElementById("userData");
let duplicateCheck=[];


function renderData()
{
    for(let i=0;i<array.length;i++)
    {
        if(duplicateCheck.includes(array[i].firstName+array[i].lastName))
        {
            alert(`object with firstName ${array[i].firstName} and lastName ${array[i].lastName} already displayed in table below`)
        }
        else{

            let objAddRender=array[i].firstName+array[i].lastName;
            duplicateCheck.push(objAddRender);

            let row = document.createElement("TR");
            row.id=`row${rowCount}`;

            let c1 = document.createElement("TH");
            let c2 = document.createElement("TH");
            let c3 = document.createElement("TH");
            let c4 = document.createElement("TH");

        
            let fNameElement = document.createElement("INPUT");
            fNameElement.id=`fname${rowCount}`;
            fNameElement.value=array[i].firstName;
            fNameElement.readOnly=true;
            fNameElement.setAttribute("type", "text");
            fNameElement.classList.add("bg-light");
            fNameElement.classList.add("border");

            let lNameElement = document.createElement("INPUT");
            lNameElement.id=`lname${rowCount}`;
            lNameElement.value=array[i].lastName;
            lNameElement.readOnly=true;
            lNameElement.setAttribute("type", "text");
            lNameElement.classList.add("bg-light");
            lNameElement.classList.add("border");

            
            c1.appendChild(fNameElement);
            c2.appendChild(lNameElement);
            c3.innerHTML=`<button type="button"  class="btn btn-success pl-5 pr-5" onClick="editData(this)">Edit</button>`;
            c4.innerHTML=`<button type="button"  class="btn btn-danger pl-5 pr-5" onClick="deleteData(this)" >Delete</button>`;

            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);

            userTable.appendChild(row);
            rowCount++;
        }
    }
 }



//Add Data


function addData()
{

    let f=document.getElementById("fname").value;
    let l=document.getElementById("lname").value;
    if(f=="" || l=="")
    {
        alert("FirstName And LastName Both Fields Are Required");
    }
    else{

        let obj=f+l;
        console.log(obj);
        if(duplicateCheck.includes(obj))
        {
            
            alert("object already exists");
            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
        }
        else
        {

                 let objAdd=f+l;
                duplicateCheck.push(objAdd);
                console.log(duplicateCheck);
                let row = document.createElement("TR");
                row.id=`row${rowCount}`;

                let c1 = document.createElement("TH");
                let c2 = document.createElement("TH");
                let c3 = document.createElement("TH");
                let c4 = document.createElement("TH");

            
                let fNameElement = document.createElement("INPUT");
                fNameElement.id=`fname${rowCount}`;
                fNameElement.value=f;
                fNameElement.readOnly=true;
                fNameElement.setAttribute("type", "text");
                fNameElement.classList.add("bg-light");
                fNameElement.classList.add("border");

                let lNameElement = document.createElement("INPUT");
                lNameElement.id=`lname${rowCount}`;
                lNameElement.value=l;
                lNameElement.readOnly=true;
                lNameElement.setAttribute("type", "text");
                lNameElement.classList.add("bg-light");
                lNameElement.classList.add("border");

                
                c1.appendChild(fNameElement);
                c2.appendChild(lNameElement);
                c3.innerHTML=`<button type="button"  class="btn btn-success pl-5 pr-5" onClick="editData(this)">Edit</button>`;
                c4.innerHTML=`<button type="button"  class="btn btn-danger pl-5 pr-5" onClick="deleteData(this)" >Delete</button>`;

                row.appendChild(c1);
                row.appendChild(c2);
                row.appendChild(c3);
                row.appendChild(c4);

                userTable.appendChild(row);
                rowCount++;
        }
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";    
    }
}


//Delete Data
function deleteData(delbutnElement)
{
    let delId=delbutnElement.parentNode.parentNode.id;
    let ftoDelete=document.getElementById(`fname${delId[3]}`).value;
    let ltoDelete=document.getElementById(`lname${delId[3]}`).value;
    let objtoDelete=ftoDelete+ltoDelete;
    let Dindex = duplicateCheck.indexOf(objtoDelete);
    duplicateCheck.splice(Dindex, 1);

        console.log(duplicateCheck);
   delbutnElement.parentNode.parentNode.remove();
   document.getElementById("fname").value="";
   document.getElementById("lname").value="";
   document.getElementById("btnDiv").innerHTML=`<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
}

//Edit Data
let rowId;
let ftoUpdate;
let ltoUpdate;
function editData(edibutnElement)
{
    rowId=edibutnElement.parentNode.parentNode.id;
    
  
    ftoUpdate=document.getElementById(`fname${rowId[3]}`).value;
   ltoUpdate=document.getElementById(`lname${rowId[3]}`).value;
    document.getElementById("fname").value=ftoUpdate;
    document.getElementById("lname").value=ltoUpdate;
   

    document.getElementById("btnDiv").innerHTML=`<button type="button" id="updateBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="updateData()" style="color:blue;">Update</button>`
}

function updateData()
{
    
    let fUpdated=document.getElementById("fname").value;
    let lUpdated=document.getElementById("lname").value;
    let objUpdated=fUpdated+lUpdated;
    
        
    if(fUpdated=="" || lUpdated=="")
    {
        alert("FirstName And LastName Both Fields Are Required")
    }
    else{
        if(duplicateCheck.includes(objUpdated))
        {
            
            alert("Updated object already exists");
            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
            document.getElementById("btnDiv").innerHTML=`<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;


        }
        else
        {

            let objAddUpdated=fUpdated+lUpdated;
            duplicateCheck.push(objAddUpdated);
            
            objtoRemove=ftoUpdate+ltoUpdate;
            let index = duplicateCheck.indexOf(objtoRemove);
            duplicateCheck.splice(index, 1);
           
            document.getElementById(`fname${rowId[3]}`).value=fUpdated;
            document.getElementById(`lname${rowId[3]}`).value=lUpdated;
            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
        
            document.getElementById("btnDiv").innerHTML=`<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
    
        }
    }
}