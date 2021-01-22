
//Add Data
let rowCount=1;
function addData()
{

    let firstName=document.getElementById("fname").value;
    let lastName=document.getElementById("lname").value;
    if(firstName=="" || lastName=="")
    {
        alert("FirstName And LastName Both Fields Are Required")
    }
    else{

        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        let userTable=document.getElementById("userData");
        
        let row = document.createElement("TR");
        row.id=`row${rowCount}`;

        let c1 = document.createElement("TH");
        let c2 = document.createElement("TH");
        let c3 = document.createElement("TH");
        let c4 = document.createElement("TH");

      
        let fNameElement = document.createElement("INPUT");
        fNameElement.id=`fname${rowCount}`;
        fNameElement.value=firstName;
        fNameElement.readOnly=true;
        fNameElement.setAttribute("type", "text");
        fNameElement.classList.add("bg-light");
        fNameElement.classList.add("border");

        let lNameElement = document.createElement("INPUT");
        lNameElement.id=`lname${rowCount}`;
        lNameElement.value=lastName;
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


//Delete Data
function deleteData(delbutnElement)
{

   delbutnElement.parentNode.parentNode.remove();
   document.getElementById("fname").value="";
   document.getElementById("lname").value="";
   document.getElementById("btnDiv").innerHTML=`<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
}

//Edit Data
let rowId;
function editData(edibutnElement)
{
    rowId=edibutnElement.parentNode.parentNode.id;
    
  
    
   
    document.getElementById("fname").value=document.getElementById(`fname${rowId[3]}`).value;
    document.getElementById("lname").value=document.getElementById(`lname${rowId[3]}`).value;
   

    document.getElementById("btnDiv").innerHTML=`<button type="button" id="updateBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="updateData()" style="color:blue;">Update</button>`
}

function updateData()
{
    let firstName=document.getElementById("fname").value;
    let lastName=document.getElementById("lname").value;
    if(firstName=="" || lastName=="")
    {
        alert("FirstName And LastName Both Fields Are Required")
    }
    else{
        
        let newFname=document.getElementById("fname").value;
        let newLname=document.getElementById("lname").value;
        document.getElementById(`fname${rowId[3]}`).value=newFname;
        document.getElementById(`lname${rowId[3]}`).value=newLname;
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        
        document.getElementById("btnDiv").innerHTML=`<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
    }
}