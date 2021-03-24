var maxColorsInColorArray = 6;
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("displayColor");
var message = document.getElementById("message");
var resetButton = document.getElementById("resetButton");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent ==="Easy"?numSquares=3:numSquares=6;
			color = [];
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor == pickedColor){
				message.textContent = "Correct!!";
				resetButton.textContent = "Play Again?"
				changeColor(clickedColor);
				h1.style.backgroundColor = pickedColor;
			}
			else{
				message.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	displayColor.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";
}

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(colors.length * Math.random());
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	"rgb(r, g, b)"
	return "rgb("+r+", "+g+", "+b+")";
}

resetButton.addEventListener("click",function(){
	reset();
});

