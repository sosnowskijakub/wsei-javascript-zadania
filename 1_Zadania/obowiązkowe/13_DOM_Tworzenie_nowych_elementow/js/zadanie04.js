document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("a").addEventListener("click", clearList);
});

function clearList() {
    const list = document.querySelector('ul');
    removeChildren(list.children)
}

function removeChildren(children) {
    for (let index = children.length - 1; index >= 0; index--) {
        children[index].remove();
    }
}
