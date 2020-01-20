document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('resize', function (event) {
        document.querySelector('#windowWidth').innerHTML = event.target.innerWidth;
        document.querySelector('#windowHeight').innerHTML = event.target.innerHeight;
    })
})
