//this is just a comment to test git remove it afterwards

const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop("0.4", "#fff");
gradient.addColorStop("0.5", "#f43f");
gradient.addColorStop("0.55", "#4040ff");
gradient.addColorStop("0.6", "#fff444");
gradient.addColorStop("0.9", "#f4f");


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, canvas.height - 90, 50, 50);
    handleObstacles(); 
    handleParticles(); 
    bird.update();
    bird.draw();  
    ctx.fillStyle = gradient;
    ctx.font = "90px Georgia";
    ctx.strokeText(score, 430, 70);
    ctx.fillText(score, 430, 70);
    handleCollisions();
    if(handleCollisions()){
        return;
    }       
    requestAnimationFrame(animate);
    frame++;
    angle += 0.3;
    hue++;
}

animate();



window.addEventListener("keydown", function(e){
    if(e.code === "Space"){
        spacePressed = true;
    }
    
})

window.addEventListener("keyup", function(e){
    if(e.code === "Space"){
        spacePressed = false;
    }
})         

const bang = new Image();
bang.src = "bang.png";
function handleCollisions(){
    for(let i = 0; i < obstacleArray.length; i++){
        if(bird.x < obstacleArray[i].x + obstacleArray[i].width && bird.x + bird.width > obstacleArray[i].x && ((bird.y < 0 + obstacleArray[i].top && bird.y + bird.height > 0) || (bird.y >= canvas.height - obstacleArray[i].bottom && bird.y + bird.height < canvas.height))){


            //collision detected

            ctx.drawImage(bang, bird.x, bird.y, 50,50);
            ctx.font = "25px Georgia";
            ctx.fillStyle = "black";
            ctx.fillText("GAME OVER, Your Score is " + score, 160, canvas.height / 2 - 10)
            return true;


        } 
    }
}
