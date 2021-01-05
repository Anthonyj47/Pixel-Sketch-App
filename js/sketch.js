//Container for the grid
let container = document.createElement('div');
container.classList.add("container")

let body = document.getElementById("body");
body.appendChild(container)


//Nav Buttons
let clr_sctor = document.querySelector(".clr-sct");
let clr_sct = document.querySelector("#my-color");

//Generating cell grid
for(let i = 0; i < (16*16); i++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);

    //Color grids
    cell.addEventListener('click', (e)=> {
        if(e.ctrlKey === true){
            cell.style.backgroundColor = "#fff";
        }
        else{
            cell.style.backgroundColor = clr_sct.value;
        }
    });    
}



for (let index = 0; index < 1000; index++) {
    console.log("Weltuntergang");
}