document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('div').forEach(div => {
        div.addEventListener('click', function () {
            this.style.backgroundColor = getRandomColor();
        })
    })
})


function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
