class Car {
    constructor(make, model, year, speed) {
        this.make = make;
        this.model = model;
        this._year = year;
        this._speed = speed;
    }

    get age() {
        return this._year;
    }

    set age(newYear) {
        const currentYear = new Date().getFullYear();
        if (newYear <= currentYear) {
            this._year = newYear;
        } else {
            console.log("Invalid year!");
        }
    }

    get currentSpeed() {
        return this._speed;
    }

    set currentSpeed(newSpeed) {
        if (newSpeed >= 0) {
            this._speed = newSpeed;
        } else {
            console.log("Speed cannot be negative!");
        }
    }

    accelerate(amount) {
        this.currentSpeed += amount;
        return this;
    }

    brake(amount) {
        this.currentSpeed = Math.max(0, this.currentSpeed - amount);
        return this;
    }
}

const myCar = new Car('Toyota', 'Camry', 2018, 120);
console.log(`Car is ${myCar.age} years old.`);

myCar.age = 2024;
console.log(`Car is ${myCar.age} years old.`);

myCar.accelerate(20).brake(10);
console.log(`${myCar.currentSpeed} km/h.`);

