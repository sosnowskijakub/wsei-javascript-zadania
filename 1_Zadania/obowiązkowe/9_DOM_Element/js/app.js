document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;
    var mainFooter = document.getElementById("mainFooter");

    //9.0 

    function getDatasInfo(y) {
        var tab = [];
        far(var x = 0; x < y.length; x++) {
            tab.push(y[x].dataset.color);
        }
        return tab;
    }
    console.log(getDatasInfo(links));

    //9.1

    var i;
    console.log(homeElement);
    console.log(childElements);
    console.log(banner);
    console.log(blocks);
    console.log(links);
    for (i = 0; i < childElements.length; i++) {
        console.log(childElements[i].className);
        console.log(childElements[i].tagName);
    }
    for (i = 0; i < blocks.length; i++) {
        console.log(blocks[i].className);
        console.log(blocks[i].tagName);
    }
    for (i = 0; i < links.length; i++) {
        console.log(links[i].className);
        console.log(links[i].tagName);
    }

    //9.2    

    for (i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML); //innerHTML wypisuje same hiper łącza
        console.log(blocks[i].outerHTML); //outerHTML pokazuje rodzica elementów innerHTML, zawiera kontenery div oraz hiper łącza
    }

    for (i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML = "Nowa wartość diva o klasie blocks");
    }

    for (i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML);
        console.log(blocks[i].outerHTML);
        // zamiast przejścia hiper łączy został na stronie oraz został napisany tekst "Nowa wartość diva o klasie blocks"
    }

    //9.3

    function getId(main) {
        console.log(main.id);
        return main.id;
    }
    getId(mainFooter);

    //9.4

    function getTags(child) {
        var tabTag = [];
        for (i = 0; i < child.length; i++) {
            tabTag.push(child[i].tagName);
        }
        console.log(tabTag);
        return tabTag;
    }
    getTags(childElements);

    //9.5

    function getClassInfo(bannerTag) {
        console.log(bannerTag.classList);
        return bannerTag.classList;
    }
    getClassInfo(banner);

    //9.6

    var querySelectorAll = document.querySelectorAll('nav li');

    function setDataDirection(liDirection) {
        for (i = 0; i < liDirection.length; i++) {
            if (liDirection[i].dataset.direction == "down") {
                console.log(liDirection[i].dataset.direction);
            } else {
                liDirection[i] dataset.direction = "top";
                console.log(liDirection[i].dataset.direction);
            }
        }
    }

});
