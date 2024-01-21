// JavaScript source code

// CarModule.js
import { Vehicle } from './VehicleModule';

export class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
        super(make, model, year);
        this.fuelType = fuelType;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Fuel Type: ${this.fuelType}`);
    }
}
