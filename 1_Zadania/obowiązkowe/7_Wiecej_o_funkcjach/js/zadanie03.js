//7.3

hallow();

function hallow() {
    console.log("Cześć");
}

hallow();

/*
Wywołanie utworzonej funkcji nastąpi przed inicjacją jak i po 
Nie ma to wpływu na program
*/

hallow2(); // po odwołaniu się do hallow2, dostajemy komunikat, że hallow2 is not a function

var hallow2 = function () {
    console.log("Witaj");
}

hallow2();
// w tym miejscu odwołanie się do tej zmiennej nie sprawia problemu
