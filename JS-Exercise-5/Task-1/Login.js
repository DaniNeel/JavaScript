function loginUser()
{
    let userName=document.getElementById("inputName").value;
    let userPassword=document.getElementById("Password1").value;
    let up=JSON.parse(localStorage.getItem(userName));
    let userRole=up.Role;
    if(localStorage.getItem(userName) && userPassword==up.Password)
    {
        
        if(userRole=="Admin")
        {
            localStorage.setItem("sessionAdmin",userName);
            alert("successfully login as Admin");
            window.location.replace("./lmsAdmin.html");
        }
        else{
            localStorage.setItem("sessionStudent",userName);
            alert("successfully login as Student");
            window.location.replace("./lmsStudent.html");
        }
    }
    else{
        alert("User doesn't exist Or Password Incorrect");
    }
}