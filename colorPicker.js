
// Setting an array of Random Colors to the colors variable
var colors = generateRandomColors(6);

//setting html elements to variables
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1Header = document.querySelector("h1");
var reset = document.querySelector("#reset");
var hoverableButtons = document.getElementsByClassName("divBarButtons");

//setting button variables
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

//hard button to be on from page load
hard.style.backgroundColor = "#5291ba";
hard.style.color = "white";

//pick a new color
var pickedColor = pickColor();

//Show RGB code of picked color in title
colorDisplay.textContent = pickedColor;

//making squares the correct color and listening for clicks
for(i = 0; i < squares.length; i++) {
    // initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // clicked event for all squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        //if the correct square is chosen
        if(clickedColor === pickedColor) {
            allColorsSame();
            messageDisplay.textContent = "CORRECT!"
            h1Header.style.backgroundColor = pickedColor;
            reset.textContent = "PLAY AGAIN?";
        } 
        else {
            //make square disappear
            this.style.backgroundColor = "#323232";
            messageDisplay.textContent = "TRY AGAIN!"
        }
    });
}

//Hovering over buttons makes the highlight 
for(i = 0; i < hoverableButtons.length; i++) {
    hoverableButtons[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#5291ba";
        this.style.color = "white";
    })

    //remove highlighting unless the button is clicked
    hoverableButtons[i].addEventListener("mouseout", function() {
        if(this.active == true) {

        } else {
            this.style.backgroundColor = "white";
            this.style.color = "#5291ba";
        }
        
    })
}

//************** BUTTONS ***************//

//pick new colors (reset)
reset.addEventListener("click", function() {
    if(easy.active == true) {
        colors = generateRandomColors(3);
    } else {
        colors = generateRandomColors(6);
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    };
    h1Header.style.backgroundColor = "#5291ba";
    reset.textContent = "NEW COLORS";
})

//on clicking easy - add in 3 new colors and switch hard.active off
easy.addEventListener("click", function() { 
    
    //switch which button is active
    easy.classList.add("selected");
    hard.classList.remove("selected");
    //generate 3 new colors only
    colors = generateRandomColors(3);
    //pick color from 3 colors and send code to header
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //asign colors to the squares
    for(i = 0; i < 3; i++) {
        squares[i].style.backgroundColor = colors[i];
    };
    //reset the header background to default blue
    h1Header.style.backgroundColor = "#5291ba";
    reset.textContent = "NEW COLORS";
    //make the other 3 (bottom) squares disappear
    var hardDivs = document.getElementsByClassName("hard");
    for(i = 0; i < hardDivs.length; i++) {
        hardDivs[i].style.display = "none";
    }
    //turn the hard button highlight off and turn it on for easy
    easy.active = true;
    hard.active = false;
    hard.style.backgroundColor = "white";
    hard.style.color = "#5291ba";
})

//on clicking hard - add in 6 new colors and switch easy.active off
hard.addEventListener("click", function() {

    //switch which button is active
    hard.classList.add("selected");
    easy.classList.remove("selected");
    //generate 3 new colors only
    colors = generateRandomColors(6);
    //pick color from 3 colors and send code to header
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //asign colors to the squares
    for(i = 0; i < 6; i++) {
        squares[i].style.backgroundColor = colors[i];
    };
    //reset the header background to default blue
    h1Header.style.backgroundColor = "#5291ba";
    reset.textContent = "NEW COLORS";
    //make the other 3 (bottom) squares disappear
    var hardDivs = document.getElementsByClassName("hard");
    for(i = 0; i < hardDivs.length; i++) {
        hardDivs[i].style.display = "";
    }
    //turn the hard button highlight off and turn it on for easy
    hard.active = true;
    easy.active = false;
    easy.style.backgroundColor = "white";
    easy.style.color = "#5291ba";
})


//***************FUCTIONS***************//

// Turn all squares the same color
function allColorsSame() {
    for(i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

//pick a random color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//make the random colors and add to an array
function generateRandomColors(num) {
    var arr = [];
    for(i = 0; i < num; i++) {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        arr.push("rgb(" + r + ", " + g + ", " + b + ")");
    };
    return arr;
}