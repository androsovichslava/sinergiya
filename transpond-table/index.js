let table = document.querySelector('table');
let allTD = table.querySelectorAll('td')
let side = Math.sqrt(allTD.length);

table.innerHTML = '';
for (let i = 0; i < side; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < side; j++) {
        let td = document.createElement('td');
        td.innerHTML = allTD[i + j * side].innerHTML;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

