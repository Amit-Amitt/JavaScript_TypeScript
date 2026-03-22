// Number
var age = 20;
console.log(age);
var price = 99.5;
console.log(price);
// String
var studentName = "Amit";
console.log(studentName);
var message = "Hello, ".concat(studentName);
console.log(message);
// Boolean
var isActive = true;
console.log(isActive);
// Array
var marks = [85, 90, 78];
console.log(marks);
var names = ["Amit", "Riya", "Suresh"];
console.log(names);
var subjects = ["Maths", "Science", "English"];
console.log(subjects);
var results = [true, false, true];
console.log(results);
// Union type array
var data = [1, 2, "Two", 3, "Four"];
console.log(data);
// Array of objects
var students = [
    { name: "Rahul", age: 20 },
    { name: "Sneha", age: 22 },
];
console.log(students);
// Any
var randomValue = "Hello";
console.log(randomValue);
// Void (used in functions)
//named function
function greet1() {
    console.log("Welcome to TypeScript");
}
greet1();
//anonymous function
var greet2 = function () {
    console.log("Welcome to TypeScript");
};
greet2();
//arrow functions
var greet3 = function () { return console.log("Welcome to TypeScript"); };
greet3();
// return type and with arguments example
function div(a, b) {
    return a / b;
}
console.log(div(10, 20));
var resultDiv = function (a, b) {
    return a / b;
};
console.log(resultDiv);
var resultDiv2 = function (a, b) { return a / b; };
console.log(resultDiv2);
// Null and Undefined
var u = undefined;
console.log(u);
var n = null;
console.log(n);
// Object
var student = {
    id: 101,
    name: "Neha",
    passed: true
};
console.log(student);
