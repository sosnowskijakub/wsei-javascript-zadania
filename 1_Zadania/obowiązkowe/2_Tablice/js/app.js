//Zadanie 0
var paramArray = [1, 2, 3, 4, 5, 6, 7],
    sum = 0, //tu będzie suma elementów tablicy
    avg = 0, //tu będzie średnia wartość tablicy
    outputArray = []; //tu będzie tablica różnic między avg a każdą komórką tablicy

function distFromAvarage(array) {
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  } //w forze dodaję wszystkie elementy tablicy do siebie i wynik przypisuję do zmiennej sum
  
  avg = sum / array.length; 
  console.log('Średnia z tablicy to: ', avg);
  
  for (var j = 0; j < array.length; j++) {
    outputArray.push(Math.abs(avg - array[j])); //w petli wypycham do wynikowej tablicy wynik działania średnia z tablicy minus element tablicy oraz wstawiam go w metodę Math.abs(), która daje nam wartość bezwzględną liczby, czyli zamienia liczby ujemne na dodatnie.
  }
  
  console.log('Tablica wyników to:', outputArray); 

}

distFromAvarage(paramArray);

//Zadanie 1

var fruits = ["banan", "malina", "jablko"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for (var i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//Zadanie 2

function createArray(number) {
    var newArray = [10];

    for (var counter = 1; ; counter <= number) {
        newArray.push(counter);
    }

    return newArray[2];
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

//Zadanie 3
function printTable(array) {
  for (var i in array) {
    console.log(array[i]);
  }
}

printTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Zadanie 4
function multiply(array){
    let sum = array[0]
    for ( let i = 1, i < array.length; i++){
        sum *= array[i];
    }
    console.log(sum);
}

//Zadanie 5
function getEvenAvarage(array) {
    for 
}

//Zadanie 6
function sortArray(intArray) {
  for (var i in intArray) {
    console.log(intArray.sort(function (a, b) {return a-b}));
  }
}
sortArray([145,11,3,64,4,6,10]); 

//Zadanie 7
var arrLength = 0,
newArr = [];

function addArrays(arr1, arr2) {
 (arr1.length > arr2.length || arr1.length == arr2.length) ? arrLength = arr1.length : arrLength = arr2.length;  
   
   for (var i = 0; i < arrLength; i++) {
      arr1.length > arr2.length ? newArr.push(arr1[i]) : arr2.length > arr1.length ? newArr.push(arr2[i]) : newArr.push(arr1[i] + arr2[i]);
   }
console.log(newArr);
}
addArrays([2,3,1,5,3,5], [3,1,76,1]);