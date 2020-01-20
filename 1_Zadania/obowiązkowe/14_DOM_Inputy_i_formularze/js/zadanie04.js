document.addEventListener('keyup', function (e) {
    const inputElem = document.getElementById('name');
    const input = document.getElementById('name').value;
    const type = document.getElementById('type');

    let card = '';
    if (e.target.id === 'name') {

        if (input[0] == 4) {
            card = 'VISA';
            if (input.length >= 13 && input.length <= 16) {
                inputElem.style.border = 'solid green';
            } else {
                inputElem.style.border = 'none';
            };
        };
        if (input[0] == 5) {
            card = 'MasterCard';
            if (input.length === 16) {
                inputElem.style.border = 'solid green';
            } else {
                inputElem.style.border = 'none';
            }
        };
        if (input[0] == 3) {
            if (input[1] == 4 || input[1] == 7) {
                card = 'American Express';
                if (input.length === 15) {
                    inputElem.style.border = 'solid green';
                } else {
                    inputElem.style.border = 'none';
                }
            }
        };
        type.innerHTML = '';
        type.appendChild(document.createTextNode(card));
    }
})
