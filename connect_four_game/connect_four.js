var playerOne = prompt("Player One, please enter your name, you will have the red chip:", "A")
var playerTwo = prompt("Player Two, please enter your name, you will have the blue chip:", "B")
var buttons = $('button')


function changeTurn(){
    if($('h5').css("color") == "rgb(219, 88, 88)"){
        $('h5').text("Player " + playerTwo + ": it is your turn, please pick a column to drop your blue chip.");
        $('h5').css("color", "rgb(88, 127, 219)");
    }else{
        $('h5').text("Player " + playerOne + ": it is your turn, please pick a column to drop your red chip.");
        $('h5').css("color", "rgb(219, 88, 88)");
    };
}


function checkWin(){
    return checkHorizontalWin() || checkVerticalWin() || checkDiagonalWin()
}


function checkHorizontalWin(){
    for(start=0; start<36; start+=7){
        for(i=0; i<4; i++){
            index = start + i
            if(buttons.eq(index).css("background-color") !== "rgb(211, 211, 211)" &&
                buttons.eq(index).css("background-color") === buttons.eq(index + 1).css("background-color") &&
                buttons.eq(index).css("background-color") === buttons.eq(index + 2).css("background-color") &&
                buttons.eq(index).css("background-color") === buttons.eq(index + 3).css("background-color")){
                    return true
            }
        }
    }
    return false
}


function checkVerticalWin(){
    for(col=0;col<4;col++){
        var index = 0
        while(index<21){
            if(buttons.eq(index).css("background-color") !== "rgb(211, 211, 211)" &&
                buttons.eq(index).css("background-color") === buttons.eq(index + 7).css("background-color") &&
                buttons.eq(index).css("background-color") === buttons.eq(index + 14).css("background-color") &&
                buttons.eq(index).css("background-color") === buttons.eq(index + 21).css("background-color")){
                    return true
            }
        index += 1
        }
    }
    return false
}


function checkDiagonalWin(){
    for(index=0;index<18;index++){
        if(buttons.eq(index).css("background-color") !== "rgb(211, 211, 211)" &&
            buttons.eq(index).css("background-color") === buttons.eq(index + 8).css("background-color") &&
            buttons.eq(index).css("background-color") === buttons.eq(index + 16).css("background-color") &&
            buttons.eq(index).css("background-color") === buttons.eq(index + 24).css("background-color")){
                return true
        }
    }
    for(index=3;index<21;index++){
        if(buttons.eq(index).css("background-color") !== "rgb(211, 211, 211)" &&
            buttons.eq(index).css("background-color") === buttons.eq(index + 6).css("background-color") &&
            buttons.eq(index).css("background-color") === buttons.eq(index + 12).css("background-color") &&
            buttons.eq(index).css("background-color") === buttons.eq(index + 18).css("background-color")){
                return true
        }
    }
    return false
}


function announceWinner(){
    $('h5').text("")
    if($('h5').css("color") == "rgb(219, 88, 88)"){
        $('h3').text(playerOne + " wins! Please refresh browser to start again.")
    }else{
        $('h3').text(playerTwo + " wins! Please refresh browser to start again.")
    }
}

// Starting the game

changeTurn()

$('button').click(function(){
    var bottom = 35 + (buttons.index(this) % 7)
    while(buttons.eq(bottom).css("background-color") !== "rgb(211, 211, 211)"){
        bottom -= 7
    }
    if($('h5').css("color") == "rgb(219, 88, 88)"){
        buttons.eq(bottom).css("background-color", "rgb(219, 88, 88)")
    }else{
        buttons.eq(bottom).css("background-color", "rgb(88, 127, 219)")
    };
    if(checkWin()){
        announceWinner()
        $('button').unbind()
    }else{
        changeTurn()
    }
})