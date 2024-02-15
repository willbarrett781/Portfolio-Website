
let projectCover = document.querySelector('.cover');
let project1 = document.querySelector('.project-1');

function addCover(event){
projectCover.style.display = 'flex';
}

function removeCover(event){
    projectCover.style.display = 'none';
}

project1.addEventListener('mouseover', addCover)
project1.addEventListener('mouseout',removeCover)
