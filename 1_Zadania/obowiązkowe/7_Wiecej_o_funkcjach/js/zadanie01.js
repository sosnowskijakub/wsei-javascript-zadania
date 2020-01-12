//7.1
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Inicjacja funkcji sortArray()
function sortArray() {

    //Inicjacja tablicy liczb
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywołanie funkcji sortującej 
    points.sort(function (a, b) {
        //Zwrócenie wartości po odjęciu wartości b od a
        return a - b;
    });

    //Zwrócenie tablicy posortowanej
    return points;
}

//Wywołanie funkcji sortArray
sortArray();
