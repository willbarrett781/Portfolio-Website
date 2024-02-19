
let projectCover = document.querySelector('.cover');
let project1 = document.querySelector('.project-1');

function addCover(event){
projectCover.style.display = 'flex';
projectCover.style.height = project1.height;
}

function removeCover(event){
    projectCover.style.display = 'none';
}

let headingWords = document.querySelector('h1');
function testPointer(event){
    console.log('pointerDown');
    headingWords.style.color = 'black';
}
headingWords.addEventListener('pointerdown',testPointer);
project1.addEventListener('mouseover', addCover);
project1.addEventListener('mouseout',removeCover);
project1.addEventListener('pointerdown', addCover);
/*project1.addEventListener('pointer', removeCover);*/
console.log("test");
let smallScreen = window.matchMedia("(max-width:1062px)");
let smallerScreen = window.matchMedia("(max-width:713px)");

//create project header variables
let project1Header = document.querySelector('.project h3');
let project2Header = document.querySelectorAll('.project h3')[1];
let project3Header = document.querySelectorAll('.project h3')[2];
let project4Header = document.querySelectorAll('.project h3')[3];
let project5Header = document.querySelectorAll('.project h3')[4];

//set project headers if starts as small screen
if(smallScreen.matches){
    console.log("small screen");
    project1Header.innerHTML= 'Indie Folk<br>Music Club';
    project2Header.innerHTML = 'Project<br>2';
    project3Header.innerHTML = 'Project<br>3';
    project4Header.innerHTML = 'Project<br>4';
    project5Header.innerHTML = 'Project<br>5';
    
}


//adjust project headers if screen becomes small
smallScreen.onchange = (e) => {
    console.log("onchange");
    if (e.matches){
        project1Header.innerHTML= 'Indie Folk<br>Music Club';
        project2Header.innerHTML = 'Project<br>2';
        project3Header.innerHTML = 'Project<br>3';
        project4Header.innerHTML = 'Project<br>4';
        project5Header.innerHTML = 'Project<br>5';
    }else{
        project1Header.innerHTML= 'Indie Folk Music Club';
        project2Header.innerHTML = 'Project 2';
        project3Header.innerHTML = 'Project 3';
        project4Header.innerHTML = 'Project 4';
        project5Header.innerHTML = 'Project 5';
    }
}

//projectHeader.innerHTML = 'Indie Folk<br>Music Club';
//window.addEventListener('resize', addLineBreak);
