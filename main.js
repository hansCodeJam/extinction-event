const firstUl = document.querySelectorAll('.app ol li')
const secondUl = document.querySelectorAll('.app ul li ')
const images = document.querySelectorAll('#row img')
const button = document.querySelector('#toggle')


for(let i = 0; i < firstUl.length; i++) {
    firstUl[i].addEventListener('click', lineThrough)
}

for(let i = 0; i < secondUl.length; i++) {
    secondUl[i].addEventListener('click', transition);
}

for(let i = 0; i <images.length; i++){
    images[i].addEventListener('click', shrink);
}

function lineThrough(event){
    event.target.style.textDecoration = 'line-through';
}

function transition(event){
    event.target.style.opacity = 0;
}

function shrink(event) {
    event.target.style.width = "0px";
} 

function meteor(){
    for(let i = 0; i < firstUl.length; i++) {
        firstUl[i].style.opacity = 0;
    }

    for(let i = 0; i < secondUl.length; i++) {
        secondUl[i].style.textDecoration = 'line-through';
    }

    for(let i = 0; i < images.length; i++){
        images[i].style.width = '0px';
    }
}

button.addEventListener('click', meteor)



