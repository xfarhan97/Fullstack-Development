const productContainer = document.getElementById("product-container");
const loading = document.getElementById("loading");
const emptyState = document.getElementById("emptyState");
const form = document.getElementById("product-form");
const message = document.getElementById("message");
const categoryFilter = document.getElementById("categoryFilter");

let products = [];


// LOAD PRODUCTS ON PAGE LOAD

window.onload = () => {
getProducts();
};


// GET PRODUCTS

async function getProducts(){

loading.classList.remove("hidden");

const response = await fetch("https://fakestoreapi.com/products");

products = await response.json();

displayProducts(products);

loading.classList.add("hidden");

}


// DISPLAY PRODUCTS

function displayProducts(data){

productContainer.innerHTML = "";

if(data.length === 0){

emptyState.classList.remove("hidden");
return;

}

emptyState.classList.add("hidden");

data.forEach(product => {

const shortDesc = product.description.substring(0,60)+"...";

const lowPrice = product.price < 20 ? "border-2 border-green-500" : "";

const card = `
<div class="bg-white p-4 rounded shadow hover:scale-105 transition ${lowPrice}">

<img src="${product.image}" class="h-40 mx-auto object-contain">

<h3 class="font-bold mt-2">${product.title}</h3>

<p class="text-green-600 font-semibold">$${product.price}</p>

<p class="text-sm text-gray-500">${product.category}</p>

<p class="text-sm mt-2">${shortDesc}</p>

<div class="flex gap-2 mt-3">

<button onclick="editProduct(${product.id})"
class="bg-blue-500 text-white px-2 py-1 rounded">
Edit
</button>

<button onclick="deleteProduct(${product.id})"
class="bg-red-500 text-white px-2 py-1 rounded">
Delete
</button>

</div>

</div>
`;

productContainer.innerHTML += card;

});

}


// ADD PRODUCT

form.addEventListener("submit", addProduct);

async function addProduct(e){

e.preventDefault();

const newProduct = {

title: title.value,
price: parseFloat(price.value),
description: description.value,
image: image.value,
category: category.value

};

const response = await fetch("https://fakestoreapi.com/products",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(newProduct)

});

const data = await response.json();

products.push(data);

displayProducts(products);

message.innerText="Product Added Successfully";

form.reset();

}


// DELETE PRODUCT

async function deleteProduct(id){

await fetch(`https://fakestoreapi.com/products/${id}`,{
method:"DELETE"
});

products = products.filter(p => p.id !== id);

displayProducts(products);

alert("Product Deleted");

}


// UPDATE PRODUCT

async function editProduct(id){

const newTitle = prompt("Enter new title");

if(!newTitle) return;

const response = await fetch(`https://fakestoreapi.com/products/${id}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
title:newTitle
})

});

const updated = await response.json();

products = products.map(p => p.id===id ? {...p,title:newTitle} : p);

displayProducts(products);

alert("Product Updated");

}


// FILTER BY CATEGORY

categoryFilter.addEventListener("change", filterCategory);

async function filterCategory(){

const category = categoryFilter.value;

if(category === "all"){
displayProducts(products);
return;
}

loading.classList.remove("hidden");

const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);

const data = await response.json();

displayProducts(data);

loading.classList.add("hidden");

}