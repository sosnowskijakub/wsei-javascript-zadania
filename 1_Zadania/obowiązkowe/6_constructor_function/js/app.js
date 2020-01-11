//6.0

function Basket() {
    this.products = [];
    this.sum = null;
};

Basket.prototype.addProduct = function (name, price) {
    this.products.push(name)
    this.sum += price
}

Basket.prototype.showBasket = function () {
    console.log(
        'Produkty: ' + this.products + '.',
        'Cena ' + this.sum + 'zł'
    )
};

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();

//6.1

var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};

//6.2

function Calculator() {
    this.operations = [];
};

Calculator.prototype.add = function (num1, num2) {
    var result = num1 + num2;
    this.operations.push('added ' + num1 + ' to ' + num2 + ' got ' + result);
    return result;
};

Calculator.prototype.multiply = function (num1, num2) {
    var result = num1 * num2;
    this.operations.push('multiplied ' + num1 + ' with ' + num2 + ' got ' + result);
    return result;
};

Calculator.prototype.subtract = function (num1, num2) {
    var result = num1 - num2;
    this.operations.push('subtracted ' + num1 + ' from ' + num2 + ' got ' + result);
    return result;
};

Calculator.prototype.divide = function (num1, num2) {
    var result = num1 / num2;
    this.operations.push('divided ' + num1 + ' by ' + num2 + ' got ' + result);
    return result;
};

Calculator.prototype.printOperations = function () {
    console.log(this.operations);
};

Calculator.prototype.clearOperations = function () {
    this.operations = [];
};
