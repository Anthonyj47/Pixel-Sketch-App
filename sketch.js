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
            cell.setAttribute('style','background-color: white');
        }
        else{
            cell.setAttribute('style','background-color: black');
        }
    });
    cell.addEventListener('hover', () => {
        cell.style = "background-color: turquoise";
    })
    container.appendChild(cell);
}
