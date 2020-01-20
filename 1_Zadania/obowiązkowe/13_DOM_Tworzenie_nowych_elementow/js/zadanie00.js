document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a').forEach(button => {
        button.addEventListener('click', deleteElement)
    })

    function deleteElement(e) {
        const row = this.parentElement.parentElement;
        row.remove();
    }
});
