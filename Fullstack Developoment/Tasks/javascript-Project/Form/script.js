function validateName(){
let name=document.getElementById("fullname");
let error=document.getElementById("nameError");

if(name.value.trim()===""){
error.innerHTML="Name is required";
name.classList.add("error-border");
name.classList.remove("success-border");
return false;
}else{
error.innerHTML="";
name.classList.add("success-border");
name.classList.remove("error-border");
return true;
}
}

function validateEmail(){
let email=document.getElementById("email");
let error=document.getElementById("emailError");
let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regex.test(email.value)){
error.innerHTML="Enter valid email";
email.classList.add("error-border");
email.classList.remove("success-border");
return false;
}else{
error.innerHTML="";
email.classList.add("success-border");
email.classList.remove("error-border");
return true;
}
}

function validatePassword(){
let password=document.getElementById("password");
let error=document.getElementById("passwordError");

if(password.value.length<6){
error.innerHTML="Password must be at least 6 characters";
password.classList.add("error-border");
password.classList.remove("success-border");
return false;
}else{
error.innerHTML="";
password.classList.add("success-border");
password.classList.remove("error-border");
return true;
}
}

function validateGender(){
let gender=document.querySelector('input[name="gender"]:checked');
let error=document.getElementById("genderError");

if(!gender){
error.innerHTML="Please select gender";
return false;
}else{
error.innerHTML="";
return true;
}
}

function validateForm(){
let n=validateName();
let e=validateEmail();
let p=validatePassword();
let g=validateGender();

if(!n||!e||!p||!g){
return false;
}

alert("Form submitted successfully!");
return true;
}