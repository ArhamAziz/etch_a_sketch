const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
let container_arr = [];
reset.addEventListener('click', reset_canvas);
let dimension = 16;

function make_canvas() {
    rem_divs();
    container.style.cssText = `grid-template-columns: repeat(${dimension}, auto)`;
    for (let i = 1; i <= dimension**2; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', recolor);
        container.appendChild(cell);
    }
    container_arr = document.querySelectorAll(".cell");
    console.log(Math.sqrt(container_arr.length));
}

//Recolor when hovered over
function recolor(e) {
    this.style.backgroundColor = 'black';
}

//Reset the canvas
function reset_canvas(e) {
    container_arr.forEach(make_white);
    let dimension_candidate = prompt("Enter Canvas Size within 1-64");
    if (0 < dimension_candidate && dimension_candidate <= 64) dimension = dimension_candidate;
    make_canvas();
}

function make_white(elem) {
    elem.style.backgroundColor = 'white';
}

function rem_divs() {
    for (let i = 0; i < container_arr.length; i++){
        container_arr[i].parentNode.removeChild(container_arr[i]);
    }
}

make_canvas();