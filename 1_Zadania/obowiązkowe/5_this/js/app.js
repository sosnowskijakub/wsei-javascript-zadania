//Zadanie 0
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
//Zadanie 1
//Zadanie 2
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
//Zadanie 3
