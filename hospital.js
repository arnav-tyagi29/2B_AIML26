class Person {
  static totalPersons = 0;

  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    Person.totalPersons++;
  }

  displayDetails() {
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Age:", this.age);
  }

  static displayTotalPersons() {
    console.log("Total Persons:", Person.totalPersons);
  }
}

class Doctor extends Person {
  constructor(id, name, age, specialization, consultationFee) {
    super(id, name, age);
    this.specialization = specialization;
    this.consultationFee = consultationFee;
  }

  displayDetails() {
    super.displayDetails();
    console.log("Specialization:", this.specialization);
    console.log("Consultation Fee:", this.consultationFee);
    console.log("----------------");
  }
}

class Patient extends Person {
  constructor(id, name, age, disease, roomNo) {
    super(id, name, age);
    this.disease = disease;
    this.roomNo = roomNo;
  }

  displayDetails() {
    super.displayDetails();
    console.log("Disease:", this.disease);
    console.log("Room No:", this.roomNo);
    console.log("----------------");
  }
}

let d1 = new Doctor(101, "Dr. Sharma", 45, "Cardiologist", 1000);
let d2 = new Doctor(102, "Dr. Mehta", 40, "Neurologist", 1200);

let p1 = new Patient(201, "Rahul", 25, "Fever", 101);
let p2 = new Patient(202, "Aman", 30, "Malaria", 102);

d1.displayDetails();
d2.displayDetails();

p1.displayDetails();
p2.displayDetails();

Person.displayTotalPersons();
