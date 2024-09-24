var user=document.getElementById("user")
var pass=document.getElementById("pass")
var button=document.getElementById("btn")
var error=document.getElementById("error")
// function validate() {
//     if (user.value.trim()=="" || pass.value.trim()=="") {
//         alert("Fleid cannot be empty");
//         return false
//     }
//     else if(pass.value.length<8){
//         //alert("Password should be 8 characters long")
//         pass.style.border="2px solid red";
//         error.textContent="Password should be 8 characters long";
//         return false
//     }
//     else {
//         pass.style.border="2px solid green";
//         error.textContent="";
//         return true
//     }
// }
function validate() {
    let regex= /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if (regex.test(user.value)) {
        return true;
    } else {
        alert("Email is invalid")
        return false;
    }
    
}
