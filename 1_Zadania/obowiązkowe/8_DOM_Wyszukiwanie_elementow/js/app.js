document.addEventListener("DOMContentLoaded", function () {

    //8.0 

    var title = document.getElementsByClassName("title");

    function getDataAnimation(elemts) {
        var variable = elemts[0].dataset.animation;
        console.log(variable);
        return variable;
    }
    getDataAnimation(title);

    //8.1

    var ById = document.getElementById('home');
    console.log(ById);

    var querySelectorID = document.querySelector('#home');
    console.log(querySelectorID);

    var querySelector = document.querySelector('li[data-direction]');
    console.log(querySelector);

    var querySelectorBlock = document.querySelector(".block");
    console.log(querySelectorBlock);

    //8.2

    var querySelectorAll = document.querySelectorAll('nav li');
    console.log(querySelectorAll);
    console.log(querySelectorAll.length);

    var querySelectorAllDiv = document.querySelectorAll('div p');
    console.log(querySelectorAllDiv);
    console.log(querySelectorAllDiv.length);

    var querySelectorAllArticle = document.querySelectorAll('article p');
    console.log(querySelectorAllArticle);
    console.log(querySelectorAllArticle.length);

    //8.3

    var querySelectorArticle = document.querySelector('article.first');
    console.log(querySelectorArticle);

    var querySelectorArticleH1 = querySelectorArticle.querySelectorAll("h1");
    console.log(querySelectorArticleH1.length);
});
