// Sample data to use for the exercises
const users = [
 { id: 1, name: "John", age: 25, email: "john@example.com", isActive: true, tags: ["developer","javascript"] },
 { id: 2, name: "Jane", age: 32, email: "jane@example.com", isActive: false, tags: ["designer","css"] },
 { id: 3, name: "Bob", age: 41, email: "bob@example.com", isActive: true, tags: ["developer","python"] },
 { id: 4, name: "Mary", age: 28, email: "mary@example.com", isActive: true, tags: ["manager","leadership"] },
 { id: 5, name: "Alex", age: 19, email: "alex@example.com", isActive: false, tags: ["intern","student"] }
];


// Exercise 1: Filter
// Write a function that returns all active users
function getActiveUsers() {
 return users.filter(user => user.isActive === true);
}


console.log(getActiveUsers());
 

// this array is for age above 32 and active is true
function getUsersAbove32AndActive() {
 return users.filter(user => user.age > 32 && user.isActive === true);
}

console.log("this array is for age above 32 and active is true",getUsersAbove32AndActive());
// this array is for age above 32 and active is true ( above code)



function getUserNames() {
 return users.map(user => user.name);
}


console.log(getUserNames());




