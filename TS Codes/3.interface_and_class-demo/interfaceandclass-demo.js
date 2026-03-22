var s1 = {
    id: 101,
    name: "Amit",
    isActive: true
};
console.log("Student Details:", s1);
var e1 = {
    empId: 1,
    empName: "Riya"
};
console.log("Employee Details:", e1);
var car1 = {
    model: "Tesla",
    price: 5000000
};
console.log("Car Details:", car1);
var calc = {
    add: function (a, b) {
        return a + b;
    }
};
console.log("Calculator Add Result:", calc.add(10, 20));
var languages = ["TypeScript", "JavaScript", "Python"];
console.log("Languages Array:", languages);
var t1 = {
    name: "Meena",
    subject: "Maths"
};
console.log("Teacher Details:", t1);
var TeacherSalary = /** @class */ (function () {
    function TeacherSalary(salary) {
        this.salary = salary;
        console.log("TeacherSalary object created");
    }
    TeacherSalary.prototype.display = function () {
        console.log("Salary is ".concat(this.salary));
    };
    return TeacherSalary;
}());
var t2 = new TeacherSalary(10000);
t2.display();
