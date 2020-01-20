 var buttons = document.getElementsByClassName("button");
 var i = 0,
     length = buttons.length;

 for (i; i < length; i++) {

     if (document.addEventListener) {
         buttons[i].addEventListener("click", function () {

             var parent = event.target.parentNode;
             if (parent.nextElementSibling.style.visibility === 'hidden') {

                 parent.nextElementSibling.style.visibility = 'visible';
             } else {
                 parent.nextElementSibling.style.visibility = 'hidden';
             }

         });
     }

 };
