document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a").forEach(button => {
        button.addEventListener("click", manageElementMove);
        button.parentElement.parentElement.id
    });
});

function manageElementMove() {
    const listItem = this.parentElement;
    if (listItem.parentElement.id === "list1") {
        moveElement('list2', listItem);
    } else {
        moveElement('list1', listItem)
    }
}

function moveElement(id, element) {
    const newList = document.getElementById(id);
    element.remove();
    newList.appendChild(element);
}
