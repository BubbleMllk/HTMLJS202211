//Canvas drawing stuff
var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

var rock = new Image()
var paper = new Image()
var scissors = new Image()
var lizard = new Image()
var spock = new Image()

var hrock = new Image()
var hpaper = new Image()
var hscissors = new Image()
var hlizard = new Image()
var hspock = new Image()

rock.src = "images/rock.jpg"
paper.src = "images/paper.jpg"
scissors.src = "images/scissors.jpg"
lizard.src = "images/lizzard.jpg"
spock.src = "images/spock.jpg"

hrock.src = "images/rock2.jpg"
hpaper.src = "images/paper2.jpg"
hscissors.src = "images/scissors2.jpg"
hlizard.src = "images/lizzard2.jpg"
hspock.src = "images/spock2.jpg"

hscissors.onload = function(){
    draw(rock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, spock)
}

document.addEventListener("keydown",onKeyDown)
document.addEventListener("keyup", onKeyup)

var gameOver = true
var results = "Select Rock, Paper, Scissors, Lizard, Spock above"

function onKeyDown(e){
    console.log(e.keyCode)
}

function onKeyup(e){
    if(e.keyCode == 32){
        console.log("You pressed the spacebar")
        draw(rock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, spock)
        gameOver = false
    }
}


function draw(rock, paper, scissors, lizard, spock, crock, cpaper, cscissors, clizard, cspock){
if(gameOver == true){

//Drawing the fonts
ctx.font = "40px Times New Roman"
ctx.fillStyle = "pink"
ctx.strokeStyle = "purple"
ctx.textAlign = "center"


ctx.fillText("Welcome to the RPS Game!" , canvas.width/2, 280)
ctx.fillText("Press Space to Start", canvas.width/2,330)
ctx.strokeText("Welcome to the RPS Game!" , canvas.width/2, 280)

}
else{
    ctx.save()
    //clears canvas
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.font = "30px Arial"
    ctx.textAlign = "center"
    ctx.fillStyle = "pink"
    ctx.fillText("Player Choice", canvas.width/2, 100)
    ctx.drawImage(rock, canvas.width/2.5 - rock.width/2 - 100, 150)
    ctx.drawImage(paper, canvas.width/2.5 - paper.width/2, 150)
    ctx.drawImage(scissors, canvas.width/2.5 - scissors.width/2 + 100, 150)
    ctx.drawImage(lizard, canvas.width/2.5 - lizard.width/2 + 200, 150)
    ctx.drawImage(spock, canvas.width/2.5 - spock.width/2 + 300, 150)

    //computer choices
    ctx.fillText("Computer Choice", canvas.width/2, 325)
    ctx.drawImage(crock, canvas.width/2.5 - crock.width/2 - 100, 375)
    ctx.drawImage(cpaper, canvas.width/2.5 - cpaper.width/2, 375)
    ctx.drawImage(cscissors, canvas.width/2.5 - cscissors.width/2 + 100, 375)
    ctx.drawImage(clizard, canvas.width/2.5 - clizard.width/2 + 200, 375)
    ctx.drawImage(cspock, canvas.width/2.5 - cspock.width/2 + 300, 375)

    ctx.fillText(results, canvas.width/2, 525)
    ctx.restore()
}

}


//alert("Select rock, paper, or scissors!")
//brackets are used to do collections

var rps = ["rock", "paper", "scissors", "lizard", "spock"]
console.log(rps[0])



document.getElementById("rock").addEventListener('click', function (e) {
    //alert("You picked " + rps[0])
    playGame(rps[0])
})

document.getElementById("paper").addEventListener('click', function (e) {
   // alert("You picked " + rps[1])
    playGame(rps[1])
})

document.getElementById("scissors").addEventListener('click', function (e) {
   // alert("You picked " + rps[2])
    playGame(rps[2])
})

document.getElementById("lizard").addEventListener('click', function (e) {
   // alert("You picked " + rps[2])
    playGame(rps[3])
})

document.getElementById("spock").addEventListener('click', function (e) {
   // alert("You picked " + rps[2])
    playGame(rps[4])
})

function playGame(playerChoice) {
    if (gameOver == true){
        return;
    } else{
        var cpuChoice = Math.floor(Math.random() * 2.99)
        console.log(cpuChoice, playerChoice)
    
        switch (playerChoice) {
    
    
            //ROCK
            case "rock":
                if (cpuChoice == 0) {
                    //rock
                    //alert("CPU shows Rock. It's a tie!")
                    results = "CPU shows Rock. It's a tie!"
                    draw(hrock, paper, scissors, lizard, spock, hrock, paper, scissors, lizard, spock)
                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("CPU chose Paper. You lose!")
                    results = "CPU chose Paper. You lose!"
                    draw(hrock, paper, scissors, lizard, spock,rock, hpaper, scissors, lizard, spock)
                }
                else if (cpuChoice == 2) {
                    //paper
                    //alert("CPU chose Paper. You lose!")
                    results = "CPU chose Lizard. You win!"
                    draw(hrock, paper, scissors, lizard, spock,rock, paper, scissors, hlizard, spock)
                }
                else if (cpuChoice == 3) {
                    //paper
                    //alert("CPU chose Paper. You lose!")
                    results = "CPU chose Spock. You lose!"
                    draw(hrock, paper, scissors, lizard, spock,rock, paper, scissors, lizard, hspock)
                }
                else {
                    //alert("CPU chose Scissors. You win!")
                    results = "CPU chose Scissors. You win!"
                    draw(hrock, paper, scissors, lizard, spock,rock, paper, hscissors, lizard, spock)
                }
    
    
                break;
    
    
            //PAPER
            case "paper":
                if (cpuChoice == 0) {
                    //rock
                    //alert("CPU shows Rock. It's a win!")
                    results = "CPU shows Rock. It's a win!"
                    draw(rock, hpaper, scissors, lizard, spock,hrock, paper, scissors, lizard, spock)
                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("CPU chose Paper. It's a tie!")
                    results = "CPU shows Paper. It's a tie!"
                    draw(rock, hpaper, scissors, lizard, spock,rock, hpaper, scissors, lizard, spock)
                }
                else if (cpuChoice == 2) {
                    //paper
                    //alert("CPU chose Paper. It's a tie!")
                    results = "CPU shows Lizard. You lose!"
                    draw(rock, hpaper, scissors, lizard, spock,rock, paper, scissors, hlizard, spock)
                }
                else if (cpuChoice == 3) {
                    //paper
                    //alert("CPU chose Paper. It's a tie!")
                    results = "CPU shows Spock. It's a win!"
                    draw(rock, hpaper, scissors, lizard, spock,rock,paper, scissors, lizard, hspock)
                }
                else {
                    //alert("CPU chose Scissors. You lose!")
                    results = "CPU shows Scissors. You lose!"
                    draw(rock, hpaper, scissors, lizard,spock, hrock, paper, hscissors, lizard, spock)
                }
                break;
    
    
            //SCISSORS
            case "scissors":
                if (cpuChoice == 0) {
                    //rock
                    //alert("CPU shows Rock. You lose!")
                    results = "CPU shows Rock. You lose!"
                    draw(rock, paper, hscissors, lizard, spock, hrock, paper, scissors, lizard, spock,)
                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Paper. You win!"
                    draw(rock, paper, hscissors, lizard, spock, rock, hpaper, scissors, lizard, spock,)
                }
                else if (cpuChoice == 2) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Lizard. You win!"
                    draw(rock, paper, hscissors, lizard, spock, rock, paper, scissors, hlizard, spock)
                }
                else if (cpuChoice == 3) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Spock. You win!"
                    draw(rock, paper, hscissors, lizard, spock, rock, paper, scissors, lizard, hspock,)
                }
                else {
                    //alert("CPU chose Scirssors. You lose!")
                    results = "CPU shows Scissors. Its a tie!"
                    draw(rock, paper, hscissors, lizard, spock, rock, paper, hscissors, lizard, spock,)
                }
                break;

                //lizard
            case "lizard":
                if (cpuChoice == 0) {
                    //rock
                    //alert("CPU shows Rock. You lose!")
                    results = "CPU shows Rock. You lose!"
                    draw(rock, paper, scissors, hlizard, spock, hrock, paper, scissors, lizard, spock,)
                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Paper. You win!"
                    draw(rock, paper, scissors, hlizard, spock, rock, hpaper, scissors, lizard, spock,)
                }
                else if (cpuChoice == 2) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Lizard. Its a tie!"
                    draw(rock, paper, scissors, hlizard, spock, rock, paper, scissors, hlizard, spock)
                }
                else if (cpuChoice == 3) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Spock. You win!"
                    draw(rock, paper, scissors, hlizard, spock, rock, paper, scissors, lizard, hspock,)
                }
                else {
                    //alert("CPU chose Scirssors. You lose!")
                    results = "CPU shows Scissors. You lose!"
                    draw(rock, paper, scissors, hlizard, spock, rock, paper, hscissors, lizard, spock,)
                }
                break;

                //spock
            case "spock":
                if (cpuChoice == 0) {
                    //rock
                    //alert("CPU shows Rock. You lose!")
                    results = "CPU shows Rock. You win!"
                    draw(rock, paper, scissors, lizard, hspock, hrock, paper, scissors, lizard, spock,)
                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Paper. You lose!"
                    draw(rock, paper, scissors, lizard, hspock, rock, hpaper, scissors, lizard, spock,)
                }
                else if (cpuChoice == 2) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Lizard. You lose!"
                    draw(rock, paper, scissors, lizard, hspock, rock, paper, scissors, hlizard, spock)
                }
                else if (cpuChoice == 3) {
                    //paper
                    //alert("CPU chose Paper. You win!")
                    results = "CPU shows Spock. Its a tie!"
                    draw(rock, paper, scissors, lizard, hspock, rock, paper, scissors, lizard, hspock,)
                }
                else {
                    //alert("CPU chose Scirssors. You lose!")
                    results = "CPU shows Scissors. You win!"
                    draw(rock, paper, scissors, lizard, hspock, rock, paper, hscissors, lizard, spock,)
                }
                break;
        }       
    }

 


}

