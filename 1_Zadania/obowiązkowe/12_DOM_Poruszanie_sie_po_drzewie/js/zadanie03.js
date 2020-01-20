 var lists = document.getElementsByClassName("listContainer");
 var i = 0,
     length = lists.length;

 for (i; i < length; i++) {

     if (document.addEventListener) {
         lists[i].addEventListener("mouseenter", function () {

             var parent = event.target.childNodes[1];

             parent.childNodes[1].style.backgroundColor = 'red';
             parent.childNodes[3].style.backgroundColor = 'green';
             parent.childNodes[5].style.backgroundColor = 'green';
             parent.childNodes[7].style.backgroundColor = 'green';
             parent.childNodes[9].style.backgroundColor = 'blue';
         });
     }
 };
