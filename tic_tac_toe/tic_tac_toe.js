var squares = document.querySelectorAll('td')

// Adding Event Listeners to all squares

for(i=0; i < squares.length; i++){
    squares[i].addEventListener('click', changeMarker)
}

// Function that checks marker and changes it on click

function changeMarker(){
    if(this.textContent === 'X'){
        this.innerHTML = "<p>O</p>"
    }else if(this.textContent === ''){
        this.innerHTML = "<p>X</p>"
    }else if(this.textContent === 'O'){
        this.textContent = ""
    };
}

// Restart Game Button

var restart = document.querySelector('button')
restart.onclick = Restart;

// Function that clears all squares

function Restart(){
    for(i=0; i < squares.length; i++){
        squares[i].textContent = ""
    }
}