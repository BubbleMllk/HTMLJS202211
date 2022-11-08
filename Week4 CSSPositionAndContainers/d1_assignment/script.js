var canvas = document.getElementById("canvas")

//Defines the drawing context of the Canvas Element
var con = canvas.getContext('2d')

//Sets up color and outline styles
con.fillStyle = "rgb(0,0,255)"
con.strokeStyle = "red"


//Draws a square fillRect(x,y,width,height)
con.fillRect(86, 302, 100, 102)
con.strokeRect(86, 302, 100, 102)

//Draw lines
con.beginPath()
con.moveTo(86, 302)
con.lineTo(86, 302)
con.lineTo(86, 302)
con.stroke()


con.strokeStyle = "red"

con.beginPath()
con.moveTo(800,600)
con.lineTo(400,350)
con.lineTo(0,600)
con.stroke()
