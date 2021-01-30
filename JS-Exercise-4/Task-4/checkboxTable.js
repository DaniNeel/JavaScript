let rowCount = 1;
let userTable = document.getElementById("userData");
let totalRecords = [];

let para = document.createElement("P");
para.id = "pid";
para.classList.add("ml-2");

let newDiv = document.createElement("DIV");
newDiv.id = "allDelete";

//Add Data
const addData = () => {

    let f = document.getElementById("fname").value.trim().split(" ");
    let l = document.getElementById("lname").value.trim().split(" ");
    if (f[0] == "" || l[0] == "") {
        alert("FirstName And LastName Both Fields Are Required");
    }
    else {


        let objAdd = f[0] + l[0];
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


                let checCount = 0;
                for (let i = 0; i < rowCount; i++) {

                    if (document.getElementById(`check${i}`) != undefined) {
                        if (document.getElementById(`check${i}`).checked == true) {
                            checCount++;
                        }

                    }
                }
                document.getElementById("upCheckbox").appendChild(para);
                para.textContent = `Total ${checCount} Rows Selected`;
                document.getElementById("upCheckbox").appendChild(newDiv);
                newDiv.innerHTML = `<button type="button" id=bid class="btn btn-danger pl-5 pr-5" onClick="deleteAllData()">Delete All</button>`;

                document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;" disabled><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;




                if (checCount == totalRecords.length) {
                    document.getElementById("selectAll").checked = true;
                    document.getElementById("upCheckbox").appendChild(para);
                    para.textContent = `Total ${totalRecords.length} Rows Selected`;
                    document.getElementById("upCheckbox").appendChild(newDiv);
                    newDiv.innerHTML = `<button type="button" id=bid class="btn btn-danger pl-5 pr-5" onClick="deleteAllData()">Delete All</button>`;

                    document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;" disabled><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;


                }

            } else {
                let checCount = 0;
                for (let i = 0; i < rowCount; i++) {

                    if (document.getElementById(`check${i}`) != undefined) {
                        if (document.getElementById(`check${i}`).checked == true) {
                            checCount++;
                        }

                    }
                }
                if (document.getElementById("selectAll").checked == true) {
                    document.getElementById("selectAll").checked = false;
                }
                if (checCount > 0) {

                    document.getElementById("upCheckbox").appendChild(para);
                    para.textContent = `Total ${checCount} Rows Selected`;
                    document.getElementById("upCheckbox").appendChild(newDiv);
                    newDiv.innerHTML = `<button type="button" id=bid class="btn btn-danger pl-5 pr-5" onClick="deleteAllData()">Delete All</button>`;
                } else {

                    document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
                    document.getElementById("selectAll").checked = false;
                    para.textContent = "";
                    newDiv.innerHTML = "";
                }
            }
        });


        let fNameElement = document.createElement("INPUT");
        fNameElement.id = `fname${rowCount}`;
        fNameElement.value = f[0];
        fNameElement.readOnly = true;
        fNameElement.setAttribute("type", "text");
        fNameElement.classList.add("bg-light");
        fNameElement.classList.add("border");

        let lNameElement = document.createElement("INPUT");
        lNameElement.id = `lname${rowCount}`;
        lNameElement.value = l[0];
        lNameElement.readOnly = true;
        lNameElement.setAttribute("type", "text");
        lNameElement.classList.add("bg-light");
        lNameElement.classList.add("border");

        c0.appendChild(check);
        c1.appendChild(fNameElement);
        c2.appendChild(lNameElement);
        //let bid=`delete${rowCount}`;
        c3.innerHTML = `<button type="button"  class="btn btn-success pl-5 pr-5" onClick="editData(this)">Edit</button>`;
        c4.innerHTML = `<button type="button"  class="btn btn-danger pl-5 pr-5" onClick="deleteData(this)">Delete</button>`;


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
                    let checCount3 = 0;
                    for (let i = 0; i < rowCount; i++) {

                        if (document.getElementById(`check${i}`) != undefined) {

                            checCount3++;


                        }
                    }


                    document.getElementById("upCheckbox").appendChild(para);
                    para.textContent = `Total ${checCount3} Rows Selected`;
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

                        }

                    }
                    document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;


                }
            });

        }
    }
}


//Delete Data
const deleteData = (delbutnElement) => {
    let delId = delbutnElement.parentNode.parentNode.id;
    let ftoDelete = document.getElementById(`fname${delId.substr(3)}`).value;
    let ltoDelete = document.getElementById(`lname${delId.substr(3)}`).value;
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
    let checCount2 = 0;
    for (let i = 0; i < rowCount; i++) {

        if (document.getElementById(`check${i}`) != undefined) {
            if (document.getElementById(`check${i}`).checked == true) {
                checCount2++;
            }

        }
    }

    if (checCount2 > 0) {

        document.getElementById("upCheckbox").appendChild(para);
        para.textContent = `Total ${checCount2} Rows Selected`;
        document.getElementById("upCheckbox").appendChild(newDiv);
        newDiv.innerHTML = `<button type="button" id=bid class="btn btn-danger pl-5 pr-5" onClick="deleteAllData()">Delete All</button>`;
    } else {

        document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
        document.getElementById("selectAll").checked = false;
        para.textContent = "";
        newDiv.innerHTML = "";
    }
}

//Edit Data
let rowId;
let ftoUpdate;
let ltoUpdate;
const editData = (edibutnElement) => {
    rowId = edibutnElement.parentNode.parentNode.id;


    ftoUpdate = document.getElementById(`fname${rowId.substr(3)}`).value;
    ltoUpdate = document.getElementById(`lname${rowId.substr(3)}`).value;
    document.getElementById("fname").value = ftoUpdate;
    document.getElementById("lname").value = ltoUpdate;


    document.getElementById("btnDiv").innerHTML = `<button type="button" id="updateBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="updateData()" style="color:blue;">Update</button>`
}

function updateData() {

    let fUpdated = document.getElementById("fname").value.trim().split(" ");
    let lUpdated = document.getElementById("lname").value.trim().split(" ");
    let objUpdated = fUpdated[0] + lUpdated[0];


    if (fUpdated[0] == "" || lUpdated[0] == "") {
        alert("FirstName And LastName Both Fields Are Required")
    }
    else {

        let objAddUpdated = fUpdated[0] + lUpdated[0];
        totalRecords.push(objAddUpdated);

        objtoRemove = ftoUpdate + ltoUpdate;
        let index = totalRecords.indexOf(objtoRemove);
        totalRecords.splice(index, 1);

        document.getElementById(`fname${rowId.substr(3)}`).value = fUpdated[0];
        document.getElementById(`lname${rowId.substr(3)}`).value = lUpdated[0];
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        let checCount4 = 0;
        for (let i = 0; i < rowCount; i++) {

            if (document.getElementById(`check${i}`) != undefined) {
                if (document.getElementById(`check${i}`).checked == true) {
                    checCount4++;
                }

            }
        }
        if (checCount4 > 0) {
            document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;" disabled><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
            document.getElementById("pid").textContent = `Total ${totalRecords.length} Rows Selected`;
        } else {
            document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
        }
    }
}

//Delete All Data
const deleteAllData = () => {


    for (let i = 0; i < rowCount; i++) {

        if (document.getElementById(`check${i}`) != undefined) {
            if (document.getElementById(`check${i}`).checked == true) {
                let fd = document.getElementById(`fname${i}`).value;
                let ld = document.getElementById(`lname${i}`).value;
                let objtoDelete = fd + ld;
                let Dindex = totalRecords.indexOf(objtoDelete);
                totalRecords.splice(Dindex, 1);
                document.getElementById(`row${i}`).innerHTML = "";
            }

        }
    }
    let checCount2 = 0;
    for (let i = 0; i < rowCount; i++) {

        if (document.getElementById(`check${i}`) != undefined) {
            if (document.getElementById(`check${i}`).checked == true) {
                checCount2++;
            }

        }
    }

    if (checCount2 > 0) {

        document.getElementById("upCheckbox").appendChild(para);
        para.textContent = `Total ${checCount2} Rows Selected`;
        document.getElementById("upCheckbox").appendChild(newDiv);
        newDiv.innerHTML = `<button type="button" id=bid class="btn btn-danger pl-5 pr-5" onClick="deleteAllData()">Delete All</button>`;
    } else {

        document.getElementById("btnDiv").innerHTML = `<button type="button" id="addBtn" class="btn btn-default border border-primary pl-5 pr-5 ml-5" onclick="addData()" style="color:blue;"><i class="fa fa-plus-circle pr-2" aria-hidden="true"></i>Add</button>`;
        document.getElementById("selectAll").checked = false;
        para.textContent = "";
        newDiv.innerHTML = "";
    }
}
