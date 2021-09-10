
const div = document.querySelector("container")
const cell = document.getElementById("#cell")

// loop creating grid

let n=16, i=-1, j=0, s='';

function myFunction() {
   n = prompt("how big do you want the grid")
}

myFunction()

while(++i<n) {
  s+= '<div class="row">'
  for(j=0; j<n; j++) s+= 
  `<div id="cell" class="cell"> ${(i*n+j).toString(16)} </div>`;
  s+= '</div>'
}

 container.innerHTML = s;
 // changing backgound color on hover

 let cells = document.getElementsByClassName("cell"); 
for (var k = 0; k < cells.length; k++) {
  cells[k].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor =  "red";
  }, false);
}






 