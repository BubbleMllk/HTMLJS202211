var canvas = document.getElementById("c")
var ctx = canvas.getContext('2d')
var x = 480
var y = 300

//for text on canvas
var fontstyle = ctx.font = "16px Times New Roman"
var font = fontstyle.fillStyle = "black"

//setting up sentence
ctx.fillText("You picked", 300, 150)

//draws a blank canvas
function blank(){
    ctx.fillStyle = "blue";

    //Draws a rectanle fillRect(x,y,width,height)
    ctx.fillRect(400,200,200,100);
}



//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]



//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})


//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    //alert(rps[pChoice] + " " + rps[cChoice]) 
    

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            
            {
                
                //Your pick
                ctx.fillText("Rock", 375, 150)
                //display a tie
                ctx.fillText("Tie" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Rock", 570, 150)
                

            }
            else if(cChoice === 1)
            {
                
                //Your pick
                ctx.fillText("Rock", 375, 150)
                //display a tie
                ctx.fillText("Loss" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Paper", 570, 150)

            }
            else
            {
                //Your pick
                ctx.fillText("Rock", 375, 150)
                //display a tie
                ctx.fillText("Win" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Scissors", 570, 150)
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                //Your pick
                ctx.fillText("Paper", 375, 150)
                //display a win
                ctx.fillText("Win" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Rock", 570, 150)
                }
                else if(cChoice === 1)
                {
                //Your pick
                ctx.fillText("Paper", 375, 150)
                //display a tie
                ctx.fillText("Tie" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Paper", 570, 150)
                }
                else
                {
                //Your pick
                ctx.fillText("Paper", 375, 150)
                //display a Loss
                ctx.fillText("Loss" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Scissors", 570, 150)
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                //Your pick
                ctx.fillText("Scissors", 375, 150)
                //display a tie
                ctx.fillText("Lose" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Rock", 570, 150)
                }
                else if(cChoice === 1)
                {
                //Your pick
                ctx.fillText("Scissors", 375, 150)
                //display a tie
                ctx.fillText("Win" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Paper", 570, 150)
                }
                else
                {
                //Your pick
                ctx.fillText("Scissor", 375, 150)
                //display a tie
                ctx.fillText("Tie" , x, y)
                //CPU pick
                ctx.fillText("CPU picks Scissors", 570, 150)
                }
             break;
    }
}
