class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.owner = null;
    }

    display() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }

    assignOwner(person) {
        if (person instanceof Person) {
            this.owner = person;
        } else {
            console.log("Invalid person object.");
        }
    }
}

let personName = prompt("Enter the person's name:");
let personAge = prompt("Enter the person's age:");
let carBrand = prompt("Enter the car brand:");
let carModel = prompt("Enter the car model:");
let carYear = prompt("Enter the year of manufacture of the car:");

let person = new Person(personName, personAge);
let car = new Car(carBrand, carModel, carYear);

person.display();
car.display();

car.assignOwner(person);
console.log("Car owner:");
car.owner.display();