document.addEventListener("DOMContentLoaded", function () {
    const span = document.querySelector('.counter');
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function () {
            span.innerHTML++;
        })
    })
})
