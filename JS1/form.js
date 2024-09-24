var user=document.getElementById("user")
var pass=document.getElementById("pass")
var button=document.getElementById("btn")
var error=document.getElementById("error")
function validate() {
    if (user.value.trim()=="" || pass.value.trim()=="") {
        alert("Fleid cannot be empty");
        return false
    }
    else if(pass.value.length<8){
        //alert("Password should be 8 characters long")
        pass.style.border="2px solid red";
        error.textContent="Password should be 8 characters long";
        return false
    }
    else {
        pass.style.border="2px solid green";
        error.textContent="";
        return true
    }
}
