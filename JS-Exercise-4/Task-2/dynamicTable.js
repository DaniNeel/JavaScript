
//Add Data
let rowCount = 1;
const addData = () => {

    const firstName = document.getElementById("fname").value.trim().split(" ");
    const lastName = document.getElementById("lname").value.trim().split(" ");
    console.log(firstName);
    if (firstName[0] == "" || lastName[0] == "") {
        alert("FirstName And LastName Both Fields Are Required")
    }
    else {

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        let userTable = document.getElementById("userData");

        let row = document.createElement("TR");
        row.id = `row${rowCount}`;

        let c1 = document.createElement("TH");
        let c2 = document.createElement("TH");
        let c3 = document.createElement("TH");
        let c4 = document.createElement("TH");


        let fNameElement = document.createElement("INPUT");
        fNameElement.id = `fname${rowCount}`;
        fNameElement.value = firstName[0];
        fNameElement.readOnly = true;
        fNameElement.setAttribute("type", "text");
        fNameElement.classList.add("bg-light");
        fNameElement.classList.add("border");

        let lNameElement = document.createElement("INPUT");
        lNameElement.id = `lname${rowCount}`;
        lNameElement.value = lastName[0];
        lNameElement.readOnly = true;
        lNameElement.setAttribute("type", "text");
        lNameElement.classList.add("bg-light");
        lNameElement.classList.add("border");


        c1.appendChild(fNameElement);
        c2.appendChild(lNameElement);
        c3.innerHTML = `<button type="button"  class="btn btn-success pl-5 pr-5" onClick="editData(this)">Edit</button>`;
        c4.innerHTML = `<button type="button"  class="btn btn-danger pl-5 pr-5" onClick="deleteData(this)" >Delete</button>`;

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        userTable.appendChild(row);
        rowCount++;

    }
}


//Delete Data
const deleteData = (delbutnElement) => {

    delbutnElement.parentNode.parentNode.remove();
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
}

//Edit Data
let rowId;
const editData = (edibutnElement) => {
    rowId = edibutnElement.parentNode.parentNode.id;
     document.getElementById("fname").value = document.getElementById(`fname${rowId[3]}`).value;
    document.getElementById("lname").value = document.getElementById(`lname${rowId[3]}`).value;


    document.getElementById("btnDiv").innerHTML = `<button type="button" id="updateBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="updateData()" style="color:blue;">Update</button>`
}
const updateData = () => {
    const firstName = document.getElementById("fname").value.trim().split(" ");
    const lastName = document.getElementById("lname").value.trim().split(" ");
    if (firstName[0] == "" || lastName[0] == "") {
        alert("FirstName And LastName Both Fields Are Required")
    }
    else {


        document.getElementById(`fname${rowId[3]}`).value = firstName[0];
        document.getElementById(`lname${rowId[3]}`).value = lastName[0];
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";

        document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
    }
}