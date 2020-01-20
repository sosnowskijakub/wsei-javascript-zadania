var buttons = document.getElementsByClassName("button");
var i = 0,
    length = buttons.length;

for (i; i < length; i++) {

    if (document.addEventListener) {

        buttons[i].addEventListener("click", function () {
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            var parent = event.target.parentNode;
            parent.style.backgroundColor = randomColor;
        })
    };
};
