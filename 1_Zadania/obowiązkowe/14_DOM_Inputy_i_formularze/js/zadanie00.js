document.addEventListener('click', function (e) {
    if (e.target.className === 'btn btn-primary') {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const pass1 = document.getElementById('pass1').value;
        const pass2 = document.getElementById('pass2').value;
        const errorMessage = document.getElementsByClassName('error-message')[0];
        const checkBox = document.getElementById('agree').checked;

        while (errorMessage.firstChild) {
            errorMessage.removeChild(errorMessage.firstChild);
        }

        if (!email.includes('@')) {
            errorMessage.appendChild(document.createTextNode('Email musi posiadać znak @'));
        }
        if (name.length < 6) {
            errorMessage.appendChild(document.createTextNode('Twoje imię jest za krótkie'));
        }
        if (surname.length < 6) {
            errorMessage.appendChild(document.createTextNode('Twoje nazwisko jest za krótkie'));
        }
        if (pass1 === '' || pass2 === '' || pass1 !== pass2) {
            errorMessage.appendChild(document.createTextNode('Hasła nie są takie same lub puste'));
            if (checkBox !== true) {
                errorMessage.appendChild(document.createTextNode('Musisz zaakceptować warunki'));
            }

        }
    }
})
