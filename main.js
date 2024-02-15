//window.alert("Jello");
let projectCover = document.querySelector('.cover');
let project1 = document.querySelector('.project-1');
/*console.log(projectCover);
console.log('test');
console.log(document.querySelector('h1'))

let projectHeader = 
projectCover.style.backgroundColor = 'yellow';*/
function addCover(event){
projectCover.style.display = 'flex';
console.log(event);
}
function removeCover(event){
    projectCover.style.display = 'none';
}

console.log(project1);
project1.addEventListener('mouseover', addCover)
project1.addEventListener('mouseout',removeCover)
