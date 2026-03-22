// Basic Interface Example
interface Student {
  id: number;
  name: string;
  isActive: boolean;
}

let s1: Student = {
  id: 101,
  name: "Amit",
  isActive: true
};

console.log("Student Details:", s1);

// Optional Properties
interface Employee {
  empId: number;
  empName: string;
  department?: string;
}

let e1: Employee = {
  empId: 1,
  empName: "Riya"
};

console.log("Employee Details:", e1);

// Readonly Properties
interface Car {
  readonly model: string;
  price: number;
}

let car1: Car = {
  model: "Tesla",
  price: 5000000
};

console.log("Car Details:", car1);

// Interface with Functions
interface Calculator {
  add(a: number, b: number): number;
}

let calc: Calculator = {
  add(a, b) {
    return a + b;
  }
};

console.log("Calculator Add Result:", calc.add(10, 20));

// Interface for Arrays
interface StringArray {
  [index: number]: string;
}

let languages: StringArray = ["TypeScript", "JavaScript", "Python"];

console.log("Languages Array:", languages);

// Extending Interfaces
interface Person {
  name: string;
}

interface Teacher extends Person {
  subject: string;
}

let t1: Teacher = {
  name: "Meena",
  subject: "Maths"
};

console.log("Teacher Details:", t1);

// Interface with Class (implements)
interface Sal {
  salary: number;
}

class TeacherSalary implements Sal {
  salary: number;

  constructor(salary: number) {
    this.salary = salary;
    console.log("TeacherSalary object created");
  }

  display(): void {
    console.log(`Salary is ${this.salary}`);
  }
}

let t2 = new TeacherSalary(10000);
t2.display();
