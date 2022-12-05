// Car game with a start line and finish line

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 100
var finish = 956
var carPos = 2
var speed = 1
var carWidth = 50

var startfuel = randomNumber(canvas.width, 600)
var fuel = startfuel
var fuelBarWidth = 512
var gameOver = true

var seconds = 3
var fps = 60
var frames = fps

//load game sprites
var carSprite = new Image()
carSprite.src = "images/doggyy.png"

var hse = new Image()
hse.src = "images/house.png"

//ctx.fillRect(finish, 50, 10, 500)
//finish = 956



carSprite.onload = function () {
    main()
}


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
        ctx.font = "30px Verdana"
        ctx.textAlign = "center"
        ctx.fillText("Press Space! Get your dog to race to the door!", canvas.width / 2, canvas.height / 2)

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
        drawhouse()
        //drawStartFinish()
        drawCar()



        drawFuelBar()

        if (carPos + carWidth > finish || fuel <= 0) {
            drawResults()
        }

    }






    timer = requestAnimationFrame(main)

}

function drawCar() {
    //draw a car
    ctx.fillStyle = "red"
    // ctx.fillRect(carPos, canvas.height / 2, carWidth, 20)
    ctx.drawImage(carSprite, carPos, canvas.height / 2, carWidth, 20);

}

function drawhouse() {

        ctx.drawImage(hse, 900, canvas.height / 2.5, 100, 100)


}

function drawFuelBar() {

    var currentBarWidth = fuelBarWidth * (fuel / startfuel)
    ctx.fillStyle = "black"
    ctx.fillRect(start, 30, fuelBarWidth, 10)

    ctx.font = "25px Verdana"
    ctx.fillText("Energy Level", start, 25)

    if (fuel > 0) {
        ctx.fillStyle = "yellow"
        ctx.fillRect(start, 30, currentBarWidth, 10)

    }

}


function drawResults() {
    if (carPos + carWidth > finish) {
        ctx.fillStyle = "black"
        ctx.font = "25px Verdana"
        ctx.textAlign = "center"
        ctx.fillText("Dog made it to the finish...You win!", canvas.width / 2, canvas.height / 2)


    }
    else {
        ctx.fillStyle = "black"
        ctx.font = "25px Verdana"
        ctx.textAlign = "center"
        ctx.fillText("Your dog ran out of energy...You lose!", canvas.width / 2, canvas.height / 2)
    }
}

// function drawStartFinish() {
//     ctx.fillStyle = "black"

//     //startline
//  //   ctx.fillRect(start, 50, 10, 500)

//     //finishline

//     //ctx.fillRect(finish, 50, 10, 500)
// }

function restartGame() {
    location.reload()
}

function runStartTimer() {
    ctx.fillStyle = "black"
    ctx.font = "25px Verdana"
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