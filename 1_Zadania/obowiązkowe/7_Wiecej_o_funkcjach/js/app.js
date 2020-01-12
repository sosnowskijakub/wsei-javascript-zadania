//7.0
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Utworzenie funkcji jeden()
function jeden() {

    //Inicjacja zmiennej zmienna1 i przypisanie jej wartości 1
    var zmienna1 = 1;

    //Utworzenie funckji dwa()
    function dwa() {

        //Wypisanie w konsoli wartości zmienna1
        console.log(zmienna1);

        //Inicjacja zmiennej zmienna2 i przypisanie jej wartości 3
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa()
    dwa();

    //Wypisanie w konsoli wartości zmienna2
    console.log(zmienna2)
}

//wywołanie funkcji jeden()
jeden()
