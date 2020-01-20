document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("a").addEventListener("click", addElement);
});

function addElement() {
    const list = document.querySelector("ul");
    const numberOfElements = list.children.length;
    const li = document.createElement("li");
    const text = document.createTextNode(
        `Element ${numberOfElements +
      1} - w chwili dodania było ${numberOfElements} elementów`
    );
    li.appendChild(text);
    list.appendChild(li);
}
