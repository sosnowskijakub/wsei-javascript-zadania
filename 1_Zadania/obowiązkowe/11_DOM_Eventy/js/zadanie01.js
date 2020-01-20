document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
// 1. Skrypt zostaje wczytany przed zaladowaniem kontentu. Wszystko co jest w <head> zostanie najpierw wczytane. brak elementu o id menu.
// 2. Poprawilo, DOM jest już wtedy załadowany, więc istnieje element o id menu.
// 3. Nie ma. 
