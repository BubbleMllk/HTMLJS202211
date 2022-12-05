var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var timer = requestAnimationFrame(main)
var gameOVer = false
var score = 0
var Highscore = 0

//Asteroid variables
var numAsteroids = 20
var asteroids = []

//Player ship variables
var ship = new PlayerShip()

//create keyboard event handlers
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e) {
    if (!gameOVer) {
        if (e.keyCode == 87) {
            //code for forward key W
            ship.up = true

        }
        if (e.keyCode == 65) {
            //code for left key A
            ship.left = true

        }
        if (e.keyCode == 68) {
            //code for right key D
            ship.right = true

        }
        if (e.keyCode == 83) {
            //code for down key S
            ship.down = true

        }
    }



}

function pressKeyUp(e) {
    if (!gameOVer) {
    }

    if (e.keyCode == 87) {
        //code for forward key W
        ship.up = false

    }
    if (e.keyCode == 65) {
        //code for left key A
        ship.left = false

    }
    if (e.keyCode == 68) {
        //code for right key D
        ship.right = false

    }
    if (e.keyCode == 83) {
        //code for down key S
        ship.down = false

    }

}

//Asteroid Class
function Asteroid() {
    //properties to draw the asteroid
    this.radius = randomRange(15, 2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius,) - canvas.height

    //speed of asteroids
    this.vy = randomRange(2, 5)

    this.color = "white"

    //methods (functions) to draw asteroid
    this.drawAsteroid = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

}

function PlayerShip() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.width = 20
    this.height = 20
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.vy = 0
    this.vx = 0

    this.drawShip = function () {
        ctx.save()
        ctx.translate(this.x, this.y)

        //draw the ship
        ctx.fillStyle = "Red"
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill()
        ctx.restore()


    }

    this.moveShip = function () {
        this.x += this.vx
        this.y += this.vy

        //adding boundaries for the screen
        //bottom boundary
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2
            this.vy = 0
        }

        //top boundary
        if (this.y < this.height / 2) {
            this.y = this.height / 2
            this.vy = 0
        }

        //right boundary
        if (this.x > canvas.width - this.width / 2) {
            this.x = this.width - this.width / 2
            this.vy = 0
        }

        //left boundary
        if (this.x < this.width / 2) {
            this.x = this.width / 2
            this.vx = 0
        }

    }

}

//for loop to instantiate asteroids for game
for (var i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteroid()

}


//FUNCTION MAIN -------------------------------------------------------
function main() {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //draw score to screen
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    //ctx.fillText(`Score: ${score}`)
    ctx.restore()

    //vertical movement
    if (ship.up) {
        ship.vy = -10

    } else {
        ship.vy = 3
    }

    //horizontal movement
    if (ship.left) {
        ship.vx = -4

    } else if (ship.right) {
        ship.vx = 4
    } else {
        ship.vx = 0
    }

    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;

        //pythagorean theorem inserted here for the distance
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.height / 2 + asteroids[i].radius))) {
           // console.log("Hit Asteroid")
           // alert("Hit Asteroid")
           gameOVer = true
        }


        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
        }

        asteroids[i].y += asteroids[i].vy
        asteroids[i].drawAsteroid()
    }

    //draw the ship
    ship.moveShip()
    ship.drawShip()

    if(!gameOVer){
        //refresh the screen
        timer = requestAnimationFrame(main)  
    }
   
    while(asteroids.length < numAsteroids){
        //creates new asteroid
        asteroids.push(new Asteroid())

    }

}



//utility functions

function randomRange(high, low) {
    return Math.random() * (high - low) + low
}

//detect collission function
//using pythagorean theorem formula with the square root 
function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}

function scoreTimer(){
    if(!gameOVer){
        score++

        if(score % 5 == 0){
            numAsteroids += 5
            console.log(numAsteroids)
        }

        //calls scoreTimer every second / how often to call this timer
        setTimeout(scoreTimer, 1000)
    }
}

//temp call score function
scoreTimer()