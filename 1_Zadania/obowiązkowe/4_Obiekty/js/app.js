//4.0a

const city = {
    capital: 'Berlin',
    population: 8300000,
    president: 'Frank-Walter Steinmeier',
    primeMinisters: ['Angela Merkel', 'Olaf Scholz', 'Horst Seehofer']
}
console.log(city)

//4.0b

const timeMachine = {
    shape: 'circle',
    model: 'what',
    run: function (date, place) {
        console.log(`przenosiny do: ${date}`);
        console.log(`przenosiny w miejsce: ${place}`);
    }
}

console.log(timeMachine)

timeMachine.run('2021', 'Krakow')

//4.1

const book = {};

book.title = 'Sezon Burz';
book.author = 'Andrzej Sapkowski';
book.numberOfPages = 300;

console.log(book);

//4.2

const person = {};

person.name = 'Andrzej';
person.age = 70;
person.sayHello = function () {
    console.log('hello');
}

console.log(person);
person.sayHello();

//4.3

const recepie = {
    title: 'Chicago Style Pizza',
    servings: 4,
};

recepie.ingredients = ['tomato sauce', 'flour', 'salt'];

console.log(recepie);

//4.4

var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (const prop in movie) {
    console.log(prop)
}

//4.5

var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
             },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
             }
         ]
     },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
             },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
             }
         ]
     }
 ];

for (let i = 0; i < animals.length; i++) {
    for (elem in animals[i]) {
        console.log(elem)
    }
}
