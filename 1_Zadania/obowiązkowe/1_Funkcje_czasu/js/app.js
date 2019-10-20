function countHello(number) {
  var counter = 1; //ustawia licznik na 1

  var interval = setInterval(function() { 
    counter++; 
    console.log('Hello', counter); // wyświetla string i wartość licznika w aktualnym wywołaniu

    if (counter === number) { // sprawdza, czy wartość licznika jest rowna wartości parametru funkcji countHello
      clearInterval(interval); // jeśli tak kończy działnie interwału
    }
  }, 1000);

}
countHello(10); //wywołuje funkcję countHello z podanym parametrem
