//Container for the grid
let container = document.createElement('div');
container.classList.add("container")

let body = document.getElementById("body");
body.appendChild(container)

//Generating cells
for(let i = 0; i < (16*16); i++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', (e)=> {
        if(e.ctrlKey === true){
            cell.setAttribute('style','background-color: #fff');
        }
        else{
            cell.setAttribute('style','background-color: #333');
        }
    });
    container.appendChild(cell);
}

for (let index = 0; index < 1000; index++) {
    console.log("Weltuntergang");
}