

var xball = 400;
var yball = 100;
var ball_size = 20;
var balldy = 5;
var balldx = 5;

var padx = 350;
var pady = 990;
var padw = 100;
var padh = 10;
var dxpad = 0;

var game_over = false;
var score = 0;


function setup() {
	createCanvas(800, 1000);
  

	
}

function ball(x, y, scal) {
  push();
    translate(x, y,);
    fill('white');
    circle(0, 0, scal);
  pop();
}

function paddle(x, y, w, h) {
  push();
    translate(x, y);
    fill(0, 255, 255);
    rect(0, 0, w, h);
  pop();
}

function checkKeys(){
  // if (keyIsPressed) {
  //   balldy = 5; //animates ball when I press ANY key
  // }

  // if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)){
  //   balldy = 0; //stops animation once I start moving the paddle any direction 
  // }

 
  if (keyIsDown(RIGHT_ARROW)){
    dxpad = 8;
  }
  else if (keyIsDown(LEFT_ARROW)){// allows for movement of the paddle
    dxpad = -8;
  }
  else{
    dxpad = 0;
  }
}


function updateball(){
  yball += balldy;
  xball += balldx;
  if (yball > pady && xball >= padx && xball <= padx + padw){ // bounce off paddle
    balldy = -5;
    score += 1
  }
  else if (yball < 0){ //top of screen bounce
    balldy = 5;
  }
  else if (xball > 800){ // right edge bounce
    balldx = -5;
  }
  else if (xball < 0){ //left edge bounce
    balldx = 5;
  }
  else if (yball > 1000){ //ball is missed by the paddle and goes off the screen.
    game_over = true;
  }
  }


function updatepaddle(){
  padx += dxpad;
}

function endofgame(){

  if (game_over){
    balldx = 0;
    balldy = 0;
    background('red');
    push();
      fill('blue');
      textSize(50);
      text('Game Over', 300, 500);
      rect(300, 600, 300, 100); //blue rect
    pop();

    push();
      fill('white');
      textSize(30);
      text('click here to restart', 320, 650);
    pop();

    push();
    fill('white');
    textSize(30);
    text('Final Score:', 100, 98);
    text(score, 263, 100);
  pop();
  }

}

function updatedifficulty(){
  if (score > 1){
    balldy = balldy * 2;
    balldx = balldx * 2;
  }
}





function draw() {
  if (game_over == false) {
    background('black'); //define background in draw function rather than setup so my animatons don't leave a trail
    ball(xball, yball, ball_size);
    checkKeys();
    updateball();
    updatepaddle();
    updatedifficulty();
    paddle(padx, pady, padw, padh); 
 }
 else {
   endofgame();
   xball = 400;
   yball = 100; //must re-set variables or else game_over will continue to be true.
   balldy = 5;
   balldx = 5;

 }
  
} 

function mousePressed(){
    if(mouseX > 300 && mouseX < 600 && mouseY > 600 && mouseY < 700){
      game_over = false;
    }
  }