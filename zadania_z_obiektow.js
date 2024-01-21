// JavaScript source code

//Zadanie 3.1

export class Zwierze {
    constructor(masa, wiek) {
        this.masa = masa;
        this.wiek = wiek;
    }

    oddychaj() {
        console.log("Zwierzę oddycha.");
    }

    patrz() {
        console.log("Zwierzę patrzy.");
    }


}



export class Ptak extends Zwierze {
    lec() {
        console.log("Ptak leci.");
    }
}

export class Ryba extends Zwierze {
    constructor(masa, wiek, pletwy) {
        super(masa, wiek);
        this.pletwy = pletwy;
    }

    plyn() {
        console.log("Ryba płynie.");
    }
}

export class Ssak extends Zwierze {
    biegnij() {
        console.log("Ssak biegnie.");
    }
}

export class Pies extends Ssak {
    constructor(masa, wiek, rasa, kolorSiersci) {
        super(masa, wiek);
        this.rasa = rasa;
        this.kolorSiersci = kolorSiersci;
    }

    szczekaj() {
        console.log("Pies szczeka.");
    }

    aportuj() {
        console.log("Pies aportuje.");
    }

    dajLape() {
        console.log("Pies podaje łapę.");
    }


    // zadanie 3.2

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

export class Bicycle extends Vehicle {
    constructor(make, model, year, type) {
        super(make, model, year);
        this.type = type;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Bicycle Type: ${this.type}`);
    }
}

export class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year, "Electric");
        this.range = range;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Electric Range: ${this.range} miles`);
    }
}

export class Motorcycle extends Vehicle {
    constructor(make, model, year, type) {
        super(make, model, year);
        this.type = type;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Motorcycle Type: ${this.type}`);
    }
}

/*
Aby importowac klase bazowa mozemy uzyc:
import { Vehicle } from './Vehicle';
/*



}