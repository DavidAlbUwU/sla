canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_x = 75;
greencar_y = 100; 

backgroundImage = "parking.png";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(roverY >=0)
    {
        roverY = roverY - 10;
        console.log("Quando direcional cima for pressionada,  x = " + roverX + " | y = " +roverY);
         uploadBackground();
         uploadrover();
    }
}

function down()
{
	if(roverY <=500)
    {
        roverY = roverY + 10;
        console.log("Quando direcional baixo for pressionada,  x = " + roverX + " | y = " +roverY);
         uploadBackground();
         uploadrover();
    }
}

function left()
{
	if(roverX >=0)
    {
        roverX = roverX - 10;
        console.log("Quando direcional esquerda for pressionada,  x = " + roverX + " | y = " +roverY);
         uploadBackground();
         uploadrover();
    }
}

function right()
{
	if(roverX <=700)
    {
        roverX = roverX - 10;
        console.log("Quando direcional direita for pressionada,  x = " + roverX + " | y = " +roverY);
         uploadBackground();
         uploadrover();
    }
}