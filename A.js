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

// class Student {
//   constructor(name, rollNumber, pincode, city) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.pincode = pincode;
//     this.city = city;
//   }

//   display() {
//     console.log(this.name);
//   }
// }

// let s1 = new Student("vikas", 101, 201201, "modinagar");
// let s2 = new Student("vivek", 102, 201204, "modinagar");

// s1.display();
// s2.display();

// let product = {
//   productId: 101,
//   productName: "Laptop",
//   price: 50000,
//   quantity: 2,

//   calculateTotalPrice: function () {
//     return this.price * this.quantity;
//   },

//   updateQuantity: function (newQuantity) {
//     this.quantity = newQuantity;
//   },

//   displayInfo: function () {
//     console.log("Product ID:", this.productId);
//     console.log("Product Name:", this.productName);
//     console.log("Price:", this.price);
//     console.log("Quantity:", this.quantity);
//     console.log("Total Price:", this.calculateTotalPrice());
//   },
// };

// product.displayInfo();

// product.updateQuantity(5);

// console.log("\nAfter updating quantity:");
// product.displayInfo();

// let firstName = "Vikas";
// let lastName = "Choudhary";
// console.log("My first name is " + firstName);
// console.log("My last name is " + lastName);

// console.log(`My first name is ${firstName}. My last name is ${lastName}`);
// console.log(`My name is : ${firstName} ${lastName}`);
// console.log(`"My name is " ${firstName} ${lastName}`);
// function fullName(first, last) {
//   console.log(first);
//   console.log(last);
// }
// function fullName(first, last) {
//   return `${first} ${last}`;
// }
// // let name = new fullName(firstName, lastName);
// let name = `Hello ${fullName(firstName, lastName)}`;
// console.log(name);

// function Hello() {
//   console.log("Hello Vikas");
// }

// let Hello = function () {
//   console.log("Hello Vikas");
// };

// Hello();

// let Hello2 = () => console.log("Hello Vikas");

// Hello2();

// function Physics(marks) {
//   return `${marks}`;
// }

// console.log(Physics(98));

// let Physics2 = (marks) => {
//   return `${marks}`;
// };

// console.log(Physics2(98));

// let fullName2 = (first, last) => {
//   return `${first} ${last}`;
// };

// console.log(fullName2(firstName, lastName));

// Star = (n) => {
//   let star = "\n";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       star += "* ";
//     }
//     star += "\n";
//   }
//   console.log(star);
// };

// Pattern = (n) => {
//   pattern = "\n";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       pattern += j;
//     }
//     pattern += "\n";
//   }
//   console.log(pattern);
// };

// Star(3);
// Pattern(3);

// function sum(...values) {
//   console.log(values);
// }

// sum(10, 20);
// sum(10, 100, 1000);

// function sum2(...values) {
//   let total = 0;
//   for (let n of values) {
//     total += n;
//   }
//   return total;
// }

// console.log(sum2(10, 20, 30));
// console.log(sum2(10, 20, 30, 40));

// function sum3(first, last, ...values) {
//   let total = 0;
//   for (let n of values) {
//     total += n;
//   }
//   let name = first + " " + last;
//   console.log("name : ", name);
//   console.log("total : ", total);
// }

// sum3("Arnav", "Tyagi", (10, 20, 30, 40));

// function sum(...values) {
//   let sum = 0;
//   for (let i in values) {
//     sum += values[i];
//   }
//   console.log(sum);
// }

// let arr = [10, 20, 30, 40];
// sum(...arr);

// let name = "Vikas";
// let rollNumber = 101;
// let data = {
//   name,
//   rollNumber,
// };
// console.log(data.name);
// console.log(data.rollNumber);

class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }
}

let s1 = new Student("Arnav", 19);
let s2 = new Student("Rahul", 20);

console.log(s1);
console.log(s2);
