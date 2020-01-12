document.addEventListener("DOMContentLoaded", function () {

    //10.0 

    var color = document.querySelectorAll('div.exercise.ex5 ul li');
    var counter;
    for (counter = 0; counter < color.length; counter = counter + 2) {
        color[counter].style.backgroundColor = "green";
    }
    color[4].className = "big";
    for (counter = 0; counter < color.length; counter = counter + 3) {
        color[counter].style.textDecoration = "underline";
    }

    //10.1

    var browser = document.querySelectorAll('div.exercise.ex1 a');
    console.log(browser);
    browser[0].innerHTML = "Chrome";
    browser[2].innerHTML = "Firefox";
    browser[2].href = "https://www.mozilla.org/pl/firefox/new/";
    browser[1].href = "https://www.microsoft.com/pl-pl/windows/microsoft-edge";
    browser = document.querySelectorAll('div.excercise.ex1 .edge');
    browser[0].style.backgroundImage = "url('./assets/img/edge.png')";
    browser = document.querySelectorAll('div.exercise.ex1 .firefox');
    browser[0].style.backgroundImage = "url('./assets/img/firefox.png')";
    browser = document.querySelectorAll('div.exercise.ex1 .chrome');
    browser[0].style.width = 100 + "px";

    //10.2

    var name = document.querySelectorAll('div.exercise.ex2 #name');
    name[0].innerHTML = "Jakub Sosnowski";
    var fav_color = document.querySelectorAll('div.exercise.ex2 #fav_color');
    fav_color[0].innerHTML = "Biały";
    var fav_meal = document.querySelectorAll('div.exercise.ex2 #fav_meal');
    fav_meal[0].innerHTML = "Burger";

    //10.3

    var menu = document.querySelectorAll('div.exercise.ex3 ul');
    menu[0].className = "menu";
    var li = document.querySelectorAll('div.exercise.ex3 ul li');
    for (var x = 0; x < 3; x++) {
        li[x].classList = "menuElement";
    }

    //10.4

    li = document.querySelectorAll('div.exercise.ex4 ul li');
    for (var x = 0; x < 4; x++) {
        li[x].dataset.id = x + 1;
    }

});
