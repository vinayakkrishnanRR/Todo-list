1// VARIABLE-DECLARATION
const form=document.getElementById("loginForm")
var pass=document.getElementById("password");
var user=document.getElementById("username");
var passCheck=document.getElementById("passConfirm");
var userCheck=document.getElementById("userConfirm");



// VALIDATION
function validateUser(){
    if(user.value=="admin"){ 
        user.style.border="";
        userCheck.innerText="";       
        return true;
    }else if(user.value==""){
        user.style.border="2px solid red";
        user.style.borderRadius="4px";
        userCheck.innerText="This field cannot be left blank";
    }else{
        user.style.border="2px solid red";
        user.style.borderRadius="4px";
        userCheck.innerText="Invalid Username";
}}
function validatePass(){
if(pass.value=="12345"){
    pass.style.border="";
    pass.style.borderRadius="4px";
    passCheck.innerText=""   
    return true;
}else{
    pass.style.border="2px solid red";
    pass.style.borderRadius="4px";
    passCheck.innerText="Wrong Password"
    return false
}}

form.addEventListener('submit', function(e){
        var validUser=validateUser();
        var validPass=validatePass(); 
        e.preventDefault();

        if(validUser===true&&validPass===true){
            form.submit();
            window.location.href= 'Todo.html';
        }else if(validUser===false&&validPass===false){
            alert("Invalid credentials");
        }else if(validPass===false){
            alert("Wrong Password");
        }else if(validUser===false){
            alert("Wrong Password");
        }else{
            alert("Login error. Please try again.");
        }
});