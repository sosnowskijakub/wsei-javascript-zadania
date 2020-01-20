document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("a").addEventListener("click", addElement);
});

function addElement() {
    const inputs = document.querySelectorAll("input");
    const id = inputs[0].value;
    const item = inputs[1].value;
    const quantity = inputs[2].value;

    const tr = document.createElement("tr");
    const cells = createTableCells([id, item, quantity]);
    appendChildren(tr, cells);

    const tBody = document.querySelector('tbody');
    tBody.appendChild(tr);
}

function createTableCells(texts) {
    const cells = [];
    for (let index = 0; index < texts.length; index++) {
        const cell = document.createElement("td");
        const text = document.createTextNode(texts[index]);
        cell.appendChild(text);
        cells.push(cell);
    }
    return cells;
}

function appendChildren(parent, children) {
    for (let index = 0; index < children.length; index++) {
        parent.appendChild(children[index])
    }
}
