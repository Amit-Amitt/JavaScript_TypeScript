// Number
let age: number = 20;
console.log(age);

let price: number = 99.5;
console.log(price);

// String
let studentName: string = "Amit";
console.log(studentName);

let message: string = `Hello, ${studentName}`;
console.log(message);

// Boolean
let isActive: boolean = true;
console.log(isActive);

// Array
let marks: number[] = [85, 90, 78];
console.log(marks);

let names: string[] = ["Amit", "Riya", "Suresh"];
console.log(names);

let subjects: Array<string> = ["Maths", "Science", "English"];
console.log(subjects);

let results: boolean[] = [true, false, true];
console.log(results);

// Union type array
let data: (number | string)[] = [1, 2, "Two", 3, "Four"];
console.log(data);

// Array of objects
let students: { name: string; age: number }[] = [
  { name: "Rahul", age: 20 },
  { name: "Sneha", age: 22 },
];
console.log(students);

// Any
let randomValue: any = "Hello";
console.log(randomValue);

// Void (used in functions)
//named function
function greet1(): void {
  console.log("Welcome to TypeScript");
}
greet1();

//anonymous function
let greet2 = function (): void {
  console.log("Welcome to TypeScript");
};
greet2();

//arrow functions
let greet3 = (): void => console.log("Welcome to TypeScript");
greet3();

// return type and with arguments example
function div(a:number,b:number):number 
{
  return a/b;
}
console.log(div(10,20));

let resultDiv= function(a:number,b:number):number{
  return a/b;
}
console.log(resultDiv);

let resultDiv2=(a:number,b:number):number=>a/b;
console.log(resultDiv2);



// Null and Undefined
let u: undefined = undefined;
console.log(u);

let n: null = null;
console.log(n);

// Object
let student: {
  id: number;
  name: string;
  passed: boolean;
} = {
  id: 101,
  name: "Neha",
  passed: true
};

console.log(student);
