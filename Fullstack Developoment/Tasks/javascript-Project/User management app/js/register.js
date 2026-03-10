const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const user = {

firstName:
document.getElementById("firstName").value,

lastName:
document.getElementById("lastName").value,

email:
document.getElementById("email").value,

phone:
document.getElementById("phone").value,

username:
document.getElementById("username").value,

password:
document.getElementById("password").value

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Registration Successful");

window.location.href="login.html";

});