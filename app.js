
const div = document.querySelector("container")

const Test1 = document.getElementById("#Test1")
const Test2 = document.getElementById("Test2")
const cell = document.getElementById("#cell")

// While loop creating the grid
let n=16, i=-1, j=0, s='';

while(++i<n) {
  s+= '<div class="row">'
  for(j=0; j<n; j++) s+= `<div id="cell" class="cell"> ${(i*n+j).toString(16)} </div>`;
  s+= '</div>'
}

 container.innerHTML = s;


 // Hover random color

// div.forEach(div => {
//   btn.addEventListener('click', color)
//   console.log(e)
// })

// let color = [, "#3C9EE7", "#E7993C", 
// "#E73C99", "#3CE746", "#E7993C"];


// const cell = document.getElementsByClassName('cell')

// console.log(cell)

// cell.style.backgroundColor = "red";


// Test1.onmouseover = function(){

//   document.getElementById("Test1").style.backgroundColor = "red";

// };

// document.getElementById("cell").onmouseover = function() {mouseOver()};

// function mouseOver() {
//   document.getElementById("cell").style.backgroundColor = "red";
// }

document.getElementById("cell").onmouseover = function() {mouseOver()};

function mouseOver() {
  document.getElementById("cell").style.color = "blue";
}




n