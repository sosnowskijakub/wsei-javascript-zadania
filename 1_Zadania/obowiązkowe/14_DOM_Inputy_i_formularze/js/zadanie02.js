const Apple = document.querySelector(img[alt = "Apple"]);
const Ubuntu = document.querySelector(img[alt = "Ubuntu"]);
const Windows = document.querySelector(img[alt = "Windows"]);

apple.style.visibility = 'hidden';
ubuntu.ubuntu.visibility = 'hidden';
windows.style.visibility = 'hidden';

document.addEventListener('click', function (e) {
            if (e.target.className === 'btn btn-primary') {
                cosnt selectVal = document.getElementsByClassName('select')[0].value;
                if (selectVal === Apple) {
                    apple.style.visibility = 'visible';
                };
                if (selectVal === Ubuntu) {
                    Ubuntu.style.visibility = 'visible';
                };
                if (selectVal === Windows) {
                    Windows.style.visibility = 'visible';
                }
            });
