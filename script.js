const container = document.querySelector('#container');
//Create 16 div items
for (i = 1; i <= 16*16; i++) {
    cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}