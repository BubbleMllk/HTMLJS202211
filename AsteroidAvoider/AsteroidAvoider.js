var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var timer = requestAnimationFrame(main)
var gameOVer = true
var score = 0
var Highscore = 0
var currentstate = 0
var gameState = []


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

    //Menu inputs use spacebar
if(gameOVer){
    if(e.keyCode == 32){
        if(currentstate == 2){
            //gameoverinput
            currentstate = 0
            numAsteroids = 20
            asteroids = []
            score = 0
            //start game here
            main()
           // gameStart()
            


        }else{
            //main menu input
            gameStart()
            currentstate = 1
            gameOVer = false
            main()
            scoreTimer()
            
        }


    }
}

}

function pressKeyUp(e) {
    if (!gameOVer) {
    

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
    this.flamelength = 30

    this.drawShip = function () {
        ctx.save()
        ctx.translate(this.x, this.y)

        //draw the thruster
        if(this.up || this.left || this.right){
            ctx.save()
            if(this.flamelength == 30){
                this.flamelength = 20
                ctx.fillStyle = "yellow"

            }else{
                this.flamelength = 30
                ctx.fillStyle = "orange"
            }
            //draw the flame
            ctx.beginPath()
            ctx.moveTo(0,this.flamelength)
            ctx.lineTo(5,5)
            ctx.lineTo(-5,5)
            ctx.lineTo(0, this.flamelength)
            ctx.closePath()
            ctx.fill()
            ctx.restore()
        }

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

//FUNCTION MAIN -------------------------------------------------------
function main() {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    gameState[currentstate]()

    if (!gameOVer) {
        //refresh the screen
        timer = requestAnimationFrame(main)
    }



}

//Game state machine------------------------------------------------------

//Main menu state
gameState[0] = function () {
    //code for main menu
    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15px Arial"
    ctx.fillText("Press space to start", canvas.width / 2, canvas.height / 2 + 20)
    ctx.restore()
}

//play game state
gameState[1] = function () {
    //code for the asteroid game
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

        //Collision detection happends here
        if (detectCollision(distance, (ship.height / 2 + asteroids[i].radius))) {
            // console.log("Hit Asteroid")
            // alert("Hit Asteroid")
            gameOVer = true
            currentstate = 2
            main()
            return;
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
    while (asteroids.length < numAsteroids) {
        //creates new asteroid
        asteroids.push(new Asteroid())

    }

}

//Game over state
gameState[2] = function () {
    if(score> Highscore){
        Highscore = score

            //code for game over menu
    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Game Over, Your score was: " + score.toString(), canvas.width/2, canvas.height/2 - 60)
    ctx.fillText("Your New High Score is: " + Highscore.toString(), canvas.width/2, canvas.height/2 - 30)
    ctx.fillText("New Record!" , canvas.width/2, canvas.height/2)
    ctx.font = "15px Arial"
    ctx.fillText("Press Space to play again", canvas.width/2, canvas.height/2 + 20)
    ctx.restore()
    }
    else{
    
    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Game Over, Your score was: " + score.toString(), canvas.width/2, canvas.height/2 - 60)
    ctx.fillText("Your High Score is: " + Highscore.toString(), canvas.width/2, canvas.height/2 - 30)
    ctx.font = "15px Arial"
    ctx.fillText("Press Space to play again", canvas.width/2, canvas.height/2 + 20)
    ctx.restore()
    }


}

//utility functions
function gameStart(){
    //for loop to instantiate asteroids for game
for (var i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteroid()

}

ship = new PlayerShip()
}


function randomRange(high, low) {
    return Math.random() * (high - low) + low
}

//detect collission function
//using pythagorean theorem formula with the square root 
function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}

function scoreTimer() {
    if (!gameOVer) {
        score++

        if (score % 5 == 0) {
            numAsteroids += 5
            console.log(numAsteroids)
        }

        //calls scoreTimer every second / how often to call this timer
        setTimeout(scoreTimer, 1000)
    }
}

// //temp call score function
// scoreTimer()