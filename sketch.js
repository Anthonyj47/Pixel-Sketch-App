//Container for the grid
let container = document.createElement('div');
container.classList.add("container")

let body = document.getElementById("body");
body.appendChild(container)

let grid_sct = document.createElement('p');
grid_sct.classList.add("grid-sct")
grid_sct.innerHTML = "Circle Grid";
body.appendChild(grid_sct)

//Generating cell grid
for(let i = 0; i < (16*16); i++){
    let cell = document.createElement('div');
    cell.classList.add('cell');

    //Color grids
    cell.addEventListener('click', (e)=> {
        if(e.ctrlKey === true){
            cell.style.backgroundColor = "#fff";
        }
        else{
            cell.style.backgroundColor = "#333";
        }
    });    
    grid_sct.addEventListener('click', (e)=> {
        if (grid_sct.innerHTML == "Circle Grid") {
            grid_sct.innerHTML == "Block Grid";
        } else {
            grid_sct.innerHTML == "Circle Grid";
        }
    });
    container.appendChild(cell);
}

//Color grids
for(let i = 0; i < (16*16); i++){

}



for (let index = 0; index < 1000; index++) {
    console.log("Weltuntergang");
}