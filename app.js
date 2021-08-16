
const div = document.querySelector("container")
const cell = document.getElementById("#cell")

// While loop creating the grid
let n=16, i=-1, j=0, s='';

while(++i<n) {
  s+= '<div class="row">'
  for(j=0; j<n; j++) s+= 
  `<div id="cell" class="cell"> ${(i*n+j).toString(16)} </div>`;
  s+= '</div>'
}

 container.innerHTML = s;


 let cells = document.getElementsByClassName("cell"); //Get
for (var k = 0; k < cells.length; k++) {
  cells[k].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "orange";
  }, false);
}



 