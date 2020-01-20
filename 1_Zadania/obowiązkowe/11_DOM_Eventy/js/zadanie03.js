document.addEventListener("DOMContentLoaded", function () {
    const spans = document.querySelectorAll('.counter');
    document.querySelectorAll('button').forEach((button, index) => {
        button.addEventListener('click', function () {
            spans[index].innerHTML++;
        })
    })
})
