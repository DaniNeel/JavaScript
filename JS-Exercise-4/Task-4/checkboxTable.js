let rowCount = 1;
let userTable = document.getElementById("userData");
let totalRecords = [];

let para = document.createElement("P");
para.id = "pid";
para.classList.add("ml-2");

let newDiv = document.createElement("DIV");
newDiv.id = "allDelete";

//Add Data
function addData() {

    let f = document.getElementById("fname").value;
    let l = document.getElementById("lname").value;
    if (f == "" || l == "") {
        alert("FirstName And LastName Both Fields Are Required");
    }
    else {


        let objAdd = f + l;
        totalRecords.push(objAdd);
        let row = document.createElement("TR");
        row.id = `row${rowCount}`;

        let c0 = document.createElement("TH");
        let c1 = document.createElement("TH");
        let c2 = document.createElement("TH");
        let c3 = document.createElement("TH");
        let c4 = document.createElement("TH");
        c4.id = `col${rowCount}`;


        let check = document.createElement("INPUT");
        check.setAttribute("type", "checkbox");
        check.id = `check${rowCount}`;
        check.checked = false;
        check.addEventListener('change', function () {
            if (this.checked) {
                c4.innerHTML = `<button type="button" class="btn btn-danger pl-5 pr-5" onClick="deleteData(this)">Delete</button>`;

            } else {
                c4.innerHTML = `<button type="button" class="btn btn-danger pl-5 pr-5" onClick="deleteData(this)" disabled>Delete</button>`;
                document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
                document.getElementById("selectAll").checked = false;
                para.textContent = "";
                newDiv.innerHTML = "";

            }
        });


        let fNameElement = document.createElement("INPUT");
        fNameElement.id = `fname${rowCount}`;
        fNameElement.value = f;
        fNameElement.readOnly = true;
        fNameElement.setAttribute("type", "text");
        fNameElement.classList.add("bg-light");
        fNameElement.classList.add("border");

        let lNameElement = document.createElement("INPUT");
        lNameElement.id = `lname${rowCount}`;
        lNameElement.value = l;
        lNameElement.readOnly = true;
        lNameElement.setAttribute("type", "text");
        lNameElement.classList.add("bg-light");
        lNameElement.classList.add("border");

        c0.appendChild(check);
        c1.appendChild(fNameElement);
        c2.appendChild(lNameElement);
        //let bid=`delete${rowCount}`;
        c3.innerHTML = `<button type="button"  class="btn btn-success pl-5 pr-5" onClick="editData(this)">Edit</button>`;
        c4.innerHTML = `<button type="button"  class="btn btn-danger pl-5 pr-5" onClick="deleteData(this)" disabled>Delete</button>`;


        row.appendChild(c0);
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        userTable.appendChild(row);
        rowCount++;

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";

        if (totalRecords.length != 0) {

            document.getElementById("upCheckbox").innerHTML = `<input type="checkbox" id="selectAll" name="sa"><label class="pl-3" for="sa">Select All</label><br>`;
            let checkbox = document.querySelector("input[name=sa]");
            checkbox.addEventListener('change', function () {
                if (this.checked) {

                    document.getElementById("upCheckbox").appendChild(para);
                    para.textContent = `Total ${totalRecords.length} Rows Selected`;
                    document.getElementById("upCheckbox").appendChild(newDiv);
                    newDiv.innerHTML = `<button type="button" id=bid class="btn btn-danger pl-5 pr-5" onClick="deleteAllData()">Delete All</button>`;

                    document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;" disabled><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;


                    for (let e = 0; e < rowCount; e++) {
                        let element = document.getElementById(`check${e + 1}`);
                        if (typeof (element) != 'undefined' && element != null) {
                            element.checked = true;
                            document.getElementById(`col${e + 1}`).children[0].disabled = false;
                        }
                    }

                } else {

                    document.getElementById("upCheckbox").removeChild(para);
                    newDiv.innerHTML = "";
                    for (let c = 0; c < rowCount; c++) {
                        let diselement = document.getElementById(`check${c + 1}`);
                        if (typeof (diselement) != 'undefined' && diselement != null) {
                            diselement.checked = false;
                            document.getElementById(`col${c + 1}`).children[0].disabled = true;
                        }

                    }
                    document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;


                }
            });

        }
    }
}


//Delete Data
function deleteData(delbutnElement) {
    let delId = delbutnElement.parentNode.parentNode.id;
    let ftoDelete = document.getElementById(`fname${delId[3]}`).value;
    let ltoDelete = document.getElementById(`lname${delId[3]}`).value;
    let objtoDelete = ftoDelete + ltoDelete;
    let Dindex = totalRecords.indexOf(objtoDelete);
    totalRecords.splice(Dindex, 1);


    if (totalRecords.length == 0) {


        let checkboxDelete = document.querySelector("input[name=sa]");

        checkboxDelete.removeEventListener('change', function () {
            if (this.checked) {
                console.log("Checkbox is checked..");
            } else {
                console.log("Checkbox is not checked..");
            }
        });
        document.getElementById("upCheckbox").innerHTML = "";

    }

    delbutnElement.parentNode.parentNode.remove();

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
}

//Edit Data
let rowId;
let ftoUpdate;
let ltoUpdate;
function editData(edibutnElement) {
    rowId = edibutnElement.parentNode.parentNode.id;


    ftoUpdate = document.getElementById(`fname${rowId[3]}`).value;
    ltoUpdate = document.getElementById(`lname${rowId[3]}`).value;
    document.getElementById("fname").value = ftoUpdate;
    document.getElementById("lname").value = ltoUpdate;


    document.getElementById("btnDiv").innerHTML = `<button type="button" id="updateBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="updateData()" style="color:blue;">Update</button>`
}

function updateData() {

    let fUpdated = document.getElementById("fname").value;
    let lUpdated = document.getElementById("lname").value;
    let objUpdated = fUpdated + lUpdated;


    if (fUpdated == "" || lUpdated == "") {
        alert("FirstName And LastName Both Fields Are Required")
    }
    else {

        let objAddUpdated = fUpdated + lUpdated;
        totalRecords.push(objAddUpdated);

        objtoRemove = ftoUpdate + ltoUpdate;
        let index = totalRecords.indexOf(objtoRemove);
        totalRecords.splice(index, 1);

        document.getElementById(`fname${rowId[3]}`).value = fUpdated;
        document.getElementById(`lname${rowId[3]}`).value = lUpdated;
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";

        document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;


    }
}

//Delete All Data
function deleteAllData() {
    for (let t = 0; t < rowCount; t++) {
        let rowElement = document.getElementById(`row${t + 1}`);
        if (typeof (rowElement) != 'undefined' && rowElement != null) {
            rowElement.remove();
        }
    }
    rowCount = 1;
    totalRecords.splice(0, totalRecords.length);
    console.log(totalRecords);
    document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;

    document.getElementById("upCheckbox").innerHTML = "";
}
