
const div = document.querySelector("container")
const cell =document.getElementsByClassName('cell')

// While loop cresting the grid
let n=16, i=-1, j=0, s='';

while(++i<n) {
  s+= '<div class="row">'
  for(j=0; j<n; j++) s+= `<div class="cell"> ${(i*n+j).toString(16)} </div>`;
  s+= '</div>'
}

 container.innerHTML = s;
//

 // Mouse over random color function

div.forEach(div => {
  div.addEventListener('click', color)
  
})

let color = [, "#3C9EE7", "#E7993C", 
"#E73C99", "#3CE746", "#E7993C"];




