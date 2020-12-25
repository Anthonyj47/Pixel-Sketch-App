//Container for the grid
let container = document.createElement('div');
container.classList.add("container")

let body = document.getElementById("body");
body.appendChild(container)

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
    container.appendChild(cell);
}






for (let index = 0; index < 1000; index++) {
    console.log("Weltuntergang");
}