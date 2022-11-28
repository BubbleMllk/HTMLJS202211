// Car game with a start line and finish line

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 50
var finish = 750
var carPos = 2
var speed = 3

var startfuel = randomNumber(canvas.width, 600)
var fuel = startfuel
var fuelBarWidth = 300
var gameOver = true

var seconds = 3
var fps = 60
var frames = fps

//add event listeners
document.addEventListener("keydown", keyPressDown)

function keyPressDown(e) {
    if (e.keyCode == 32 && gameOver) {
        gameOver = false

    }
    if (fuel <= 0) {
        //restart game
        restartGame()
    }
}

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (gameOver) {
        ctx.fillStyle = "black"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2)

    }
    else {

        if (!gameOver && seconds > 0) {
            runStartTimer()
            drawStartTimer()
        } else {
            if (fuel > 0) {
                carPos += speed
                fuel -= speed
            }

        }

        drawStartFinish()
        drawCar()


        drawFuelBar()

        if (carPos + 40 > finish || fuel <= 0) {
            drawResults()
        }

    }






    timer = requestAnimationFrame(main)

}

function drawCar() {
    //draw a car
    ctx.fillStyle = "red"
    ctx.fillRect(carPos, canvas.height / 2, 40, 20)

}

function drawFuelBar() {

    var currentBarWidth = fuelBarWidth * (fuel / startfuel)
    ctx.fillStyle = "black"
    ctx.fillRect(start, 30, fuelBarWidth, 10)

    ctx.font = "25px Arial"
    ctx.fillText("Fuel", start, 25)

    if (fuel > 0) {
        ctx.fillStyle = "green"
        ctx.fillRect(start, 30, currentBarWidth, 10)

    }

}

function drawResults() {
    if (carPos + 40 > finish) {
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center"
        ctx.fillText("You made it to the finish...You win!", canvas.width / 2, canvas.height / 2)


    }
    else {
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel...You lose!", canvas.width / 2, canvas.height / 2)
    }
}

function drawStartFinish() {
    ctx.fillStyle = "black"

    //startline
    ctx.fillRect(start, 50, 10, 500)

    //finishline
    ctx.fillRect(finish, 50, 10, 500)
}

function restartGame() {
    location.reload()
}

function runStartTimer() {
    ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.textAlign = "center"
    ctx.fillText(seconds, canvas.width / 2, canvas.height / 2)
}

function drawStartTimer() {
    frames -= 1
    if (frames < 0) {
        frames = fps
        seconds -= 1 //subtracting a second everytime we get below 60 frames
    }
}

function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}