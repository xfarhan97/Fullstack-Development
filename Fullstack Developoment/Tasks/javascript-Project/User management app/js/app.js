let users = [];
let editId = null;

const table = document.getElementById("userTable");
const form = document.getElementById("userForm");

async function getUsers(){

const res = await fetch("https://dummyjson.com/users");

const data = await res.json();

users = data.users;

displayUsers(users);

}

getUsers();



function displayUsers(users){

table.innerHTML = "";

users.forEach(user => {

table.innerHTML += `

<tr>

<td class="p-2">${user.id}</td>

<td class="p-2">${user.firstName}</td>

<td class="p-2">${user.lastName}</td>

<td class="p-2">${user.email}</td>

<td class="p-2">${user.phone}</td>

<td class="p-2">

<button
onclick="editUser(${user.id})"
class="bg-yellow-500 px-2 py-1 mr-2">
Edit
</button>

<button
onclick="deleteUser(${user.id})"
class="bg-red-500 px-2 py-1">
Delete
</button>

</td>

</tr>

`;

});

}



form.addEventListener("submit", async function(e){

e.preventDefault();

const firstName =
document.getElementById("firstName").value;

const lastName =
document.getElementById("lastName").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;



if(editId){

await fetch(`https://dummyjson.com/users/${editId}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
firstName,
lastName,
email,
phone
})

});

alert("User Updated");

editId = null;

}else{

await fetch("https://dummyjson.com/users/add",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
firstName,
lastName,
email,
phone
})

});

alert("User Added");

}

form.reset();

getUsers();

});



function editUser(id){

const user = users.find(u => u.id === id);

document.getElementById("firstName").value = user.firstName;
document.getElementById("lastName").value = user.lastName;
document.getElementById("email").value = user.email;
document.getElementById("phone").value = user.phone;

editId = id;

}



async function deleteUser(id){

if(!confirm("Delete this user?")) return;

await fetch(`https://dummyjson.com/users/${id}`,{

method:"DELETE"

});

alert("User Deleted");

getUsers();

}



document.getElementById("search")
.addEventListener("input", function(){

const value = this.value.toLowerCase();

const filtered = users.filter(user =>

user.firstName.toLowerCase().includes(value) ||

user.lastName.toLowerCase().includes(value)

);

displayUsers(filtered);

});



function logout(){

localStorage.removeItem("loggedIn");

window.location.href="login.html";

}