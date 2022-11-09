var canvas = document.getElementById("canvas")

//Defines the drawing context of the Canvas Element
var ctx = canvas.getContext('2d')

//Sets up color and outline styles
ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = 5;

//Draws a square fillRect(x,y,width,height)
ctx.fillRect(84, 302, 107, 107)
ctx.strokeRect(84, 302, 107, 107)


//Draws a circle

ctx.strokeStyle = "red"
ctx.fillStyle = "#ffff00"

ctx.beginPath();
ctx.arc(385,441,68,0*Math.PI,2*Math.PI)
ctx.closePath();
ctx.fill();
ctx.stroke(); 

//Draw a pentagon
ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"

ctx.beginPath()
ctx.moveTo(557,308);
ctx.lineTo(670,284);
ctx.lineTo(726,380);
ctx.lineTo(655,470);
ctx.lineTo(543,419);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Drawing a star
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32)"

ctx.beginPath()
ctx.moveTo(636,497)
ctx.lineTo(668,554)
ctx.lineTo(732,567)
ctx.lineTo(688,615)
ctx.lineTo(695,680)
ctx.lineTo(636,653)
ctx.lineTo(575,681)
ctx.lineTo(586,615)
ctx.lineTo(538,567)
ctx.lineTo(603,554)
ctx.lineTo(636,497)
ctx.closePath()
ctx.fill()
ctx.stroke()

//Draw a line
ctx.strokeStyle = "rgb(25,0,0)"

ctx.beginPath()
ctx.moveTo(85,682)
ctx.lineTo(278,549)
ctx.closePath()
ctx.stroke()
