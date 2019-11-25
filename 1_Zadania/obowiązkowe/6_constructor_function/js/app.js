//Zadanie 0
function Basket(product, sum) {
    this.product = product;
    this.sum = sum;
}

function addProduct(name, price) {
    this.name = name;
    this.price = price;
}

function showBasket() {}
var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();
var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();
//Zadanie 1
//Zadanie 2
var Calculator = function () {
    this.history = [];

};

Calculator.prototype.add = function (num1, num2) {
    this.result = num1 + num2;
    this.history.push('added ' + num1 + ' to ' + num2 + ' got ' + this.result);

};

Calculator.prototype.multiply = function (num1, num2) {
    this.result = num1 * num2;
    this.history.push('multiplied ' + num1 + ' by ' + num2 + ' got ' + this.result);

};

Calculator.prototype.substract = function (num1, num2) {
    this.result = num1 - num2;
    this.history.push('substracted ' + num2 + ' from ' + num1 + ' got ' + this.result);

};

Calculator.prototype.divide = function (num1, num2) {
    this.result = num1 / num2;
    this.history.push('divided ' + num1 + ' by ' + num2 + ' got ' + this.result);

};

Calculator.prototype.printOperations = function () {
    console.log('Operations performed: ', this.history);
};

Calculator.prototype.clearOperations = function () {
    this.history = [];
    console.log('Operations performed: ', this.history);
};

var myCalc = new Calculator();
myCalc.add(2, 4);
myCalc.multiply(2, 4);
myCalc.substract(5, 3);
myCalc.divide(15, 3);
myCalc.printOperations();
myCalc.clearOperations();


var myCalc2 = new Calculator();
myCalc2.add(22, 41);
myCalc2.multiply(12, 4);
myCalc2.substract(15, 3);
myCalc2.divide(21, 3);
myCalc2.printOperations();
