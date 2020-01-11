//5.0

function Car(brand, color) {
    this.brand = brand;
    this.color = color;
    this.numberOfKilometers = 0;

    var car = new Car("Mercedes", "Czarny")
    printCarInfo: function () {
        console.log(this.brand, ' ', this.color, ' ', this.numberOfKilometers);
    }
    drive: function (d) {
        this.numberOfKilometers += d;
    }
}

//5.1

const car = {
    brand: 'Mercedes',
    color: 'Czarny',
    numberOfKilometers: 0,
    printCarInfo() {
        return [this.brand, this.color, this.numberOfKilometers]
    },
    drive(km) {
        return this.numberOfKilometers + km || 0
    },
}

car.service = ['10.10.2018', '10.10.2019'];
car.addService = function (str) {
    this.service.push(str)
}
car.addService('10.10.2020');

car.getService = function () {
    return this.service;
}

//5.2

var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function (newA, newB) {
        console.log(this.a + this.b);
    },
    multiply: function (newA, newB) {
        console.log(this.a * this.b);
    }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());

//5.3
const stairs = {
    step: 0,
    up() {
        this.step++
    },
    down() {
        this.step--
    },
    printStep() {
        return this.step
    }
}
