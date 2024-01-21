// JavaScript source code

// VehicleModule.js

export class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
    }
}
