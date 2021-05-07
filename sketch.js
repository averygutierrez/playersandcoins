"useStrict"; 


let state = 'title';
let canv;
let points = 0;
let w = 600
let h = 600
let player;
let coins = [];
let playerImg;
let coinImg;

function preload(){
  playerImg = loadImage('lion.png');
  coinImg = loadImage('star.png');
  
}



function setup() {
  canv = createCanvas(600, 600);
  textFont ('Georgia');
  player = new Player();
  //coins [0] = new Coin();
  coins.push(new Coins()); 
  
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW ) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW ) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW ) {
    player.direction = 'down'
  } else if (key == '') {
    player.direction = 'still'
  }
}








function draw() {
  






  
switch(state) {
  case 'title':
    title();
   canv.mouseClicked(titleMouseClick);
    break;
    case 'level 1':
    level1();
    canv.mouseClicked(level1MouseClick);
    break;
    case 'you win':
    youWin();
    canv.mouseClicked(youWinMouseClick);
    break;
    default:
    break;
}
  
}



//function mousePressed(){
//  state = 'level 1';
//}

function title(){
  background(255, 222, 130);
  textSize(70);
  stroke(255);
  fill (105, 79, 40);
  textAlign(CENTER);
  text("Catching Dreams", w/2, h/5);
   textSize(20);
  text('click anywhere to begin',w/2, h/3)
}

function titleMouseClick(){
    console.log('canvas is clicked on title');
    state = 'level 1'
 
}

function level1MouseClick(){
  //points ++;
  // console.log('points' + points);
  
  //if (points >= 10) {
   // state = 'you win';
    
    
    
 // }
}



function level1 (){
  background (61, 71, 120);
  fill (255, 254, 252);

  if (random(1) <= 0.01){
    coins.push(new Coins());
  }
  
  player.display();
  player.move();
  
  
  //iterating through coins array to display and move them
  // using for loop
  for (let i = 0; i < coins.length; i++){
  coins[i].display();
  coins[i].move();
  }
  
  //using foreach
  //coins.forEach(function(coin){
  //coins[i].display();
 // coins[i].move();
//}
  
  //check for collision, if collision occurs increase points by 1 and splice that coin out of array
  // need to iterate backwards through array

 for (let i = coins. length - 1; i >= 0; i--) {
 if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r +  coins[i].r) /2){
    points++;
    console.log(points);
    coins.splice(i, 1);
    } else if(coins[i].y > h){
      coins.splice(i,1);
      console.log ('coin is out');
    }
}

    text(`points: ${points} `, w/4, h - 30);
  
}

//player.display();
//player.move();

//coin.display();
//coin.move();

function youWin(){
   background(255, 242, 156);
  textSize(95);
  stroke(255);
  fill (105, 79, 40);
  text("WINNER", w/2, h/2);
   textSize(20);
  text('click anywhere to restart',w/2, h * 3/4)
}


function youWinMouseClick(){
  state = 'level 1';
  points = 0;
}
