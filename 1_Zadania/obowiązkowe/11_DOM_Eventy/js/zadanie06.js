document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('div').addEventListener('click', function (event) {
        document.querySelector("#globalX").innerHTML = event.clientX;
        document.querySelector("#globalY").innerHTML = event.clientY;
        document.querySelector("#localX").innerHTML = event.offsetX;
        document.querySelector("#localY").innerHTML = event.offsetY;
    })
})
