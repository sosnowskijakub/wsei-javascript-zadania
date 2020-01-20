document.addEventListener('click', function (e) {
    e.preventDefault();
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value
    const points1 = document.getElementById('points1').value;
    const points2 = document.getElementById('points2').value;
    const table = document.getElementsByTagName('table')[0];



    if (e.target.className === 'btn btn-primary') {
        if (team1 !== team2) {
            if (points1 >= 0 && points2 >= 0) {

                const newRow = table.insertRow();
                const newCell1 = newRow.insertCell(0);
                const newCell2 = newRow.insertCell(1);
                const newCell3 = newRow.insertCell(2);
                newCell1.appendChild(document.createTextNode(team1));
                newCell2.appendChild(document.createTextNode(team2));
                newCell3.appendChild(document.createTextNode(points1 + ' ' + points2));
            }
        }
    }
})
