document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("a").addEventListener("click", removeButton);
});

function removeButton() {
    this.remove();
}
