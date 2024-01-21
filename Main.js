// JavaScript source code

// Main.js
import { Vehicle } from './VehicleModule';
import { Car } from './CarModule';

// Tworzenie instancji obiektów
const vehicle = new Vehicle("Toyota", "Camry", 2022);
const car = new Car("Honda", "Civic", 2022, "Gasoline");

// Wywołanie metod i wyświetlenie informacji
vehicle.displayInfo();
car.displayInfo();
