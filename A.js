// console.log("Hello World!");
// let a = 40;
// let b = 30;

// if (a > b) {
//   console.log("A is greater, value of A =", a);
// } else {
//   console.log("B is greater, value of B = ", b);
// }

// let student = {
//   first: "vikas",
//   last: "choudhary",
//   city: "ghaziabad",
//   pincode: 201204,
//   salary: function () {
//     console.log("salary = ", 10000);
//   },
//   subject: ["web dev", "c++", "java"],
// };

// let student = new Object();
// student.first = "vikas";
// student.last = "choudhary";
// student.city = "ghaziabad";
// student.pincode = 201204;
// student.salary = function () {
//   console.log("salary = ", 10000);
// };
// student.subject = ["web dev", "c++", "java"];

class Student {
  constructor(name, rollNumber, pincode, city) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.pincode = pincode;
    this.city = city;
  }

  display() {
    console.log(this.name);
  }
}

let s1 = new Student("vikas", 101, 201201, "modinagar");
let s2 = new Student("vivek", 102, 201204, "modinagar");

s1.display();
s2.display();
