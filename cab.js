class Vehicle {
  constructor(vehicleNo, driverName, distance) {
    this.vehicleNo = vehicleNo;
    this.driverName = driverName;
    this.distance = distance;
  }

  calculateFare() {
    return 0;
  }

  static bookingPlatform() {
    console.log("Booking Platform: ABC Cabs");
  }
}

class Car extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
  }

  calculateFare() {
    return this.distance * 15;
  }
}

class Bike extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
  }

  calculateFare() {
    return this.distance * 8;
  }
}

Vehicle.bookingPlatform();

let car = new Car("CAR101", "Rahul", 20);
let bike = new Bike("BIKE101", "Aman", 20);

console.log("Car Fare:", car.calculateFare());
console.log("Bike Fare:", bike.calculateFare());
