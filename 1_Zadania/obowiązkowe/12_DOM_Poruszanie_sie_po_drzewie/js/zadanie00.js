const firstTask = document.getElementsByClassName('first')[0].firstElementChild;

const secondTask = document.getElementById('second').parentNode;

const thirdTaskStart = document.querySelectorAll('[data-ex="third"]')[0].parentNode.parentNode.lastElementChild.firstElementChild;

const childNumber = Math.floor(thirdTaskStart.childNodes.length / 2);

const thirdTask = thirdTaskStart.childNodes[childNumber];

const fourthTask = document.getElementsByClassName('forth')[0].parentNode.getElementsByTagName('article')[0].getElementsByTagName('p')[1];
