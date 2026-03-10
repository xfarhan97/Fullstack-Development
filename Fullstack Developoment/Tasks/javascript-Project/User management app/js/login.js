const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

const storedUser =
JSON.parse(localStorage.getItem("user"));

if(
storedUser &&
storedUser.username === username &&
storedUser.password === password
){

localStorage.setItem("loggedIn", true);

window.location.href = "dashboard.html";

}
else{

document.getElementById("error").innerText =
"Invalid username or password";

}

});