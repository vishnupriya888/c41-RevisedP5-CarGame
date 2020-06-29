 var gameState = "START";
 var bg, bgI;
 var player, plr, cars, car1, car1I, car2, car2I, car3, car3I;
 var arrow;
  var names ;
var greet;
 var hearts,heart;

 function preload() {

   bgI = loadImage("bg.png");

   plr = loadImage("car1.PNG");

   car1I = loadImage("car2.PNG");

   car2I = loadImage("car3.PNG");

   car3I = loadImage("car4.PNG");

   heartI = loadImage("life.png");

   arrow = loadImage("arrows.png");
 }

 function setup() {

   createCanvas(722, 336);
   
   if(gameState === "PLAY"){
   //    health

 }
   var name = createElement('h3', "Enter your name");
   name.position(165, 75);

   var nameInput = createInput();
   nameInput.position(315, 95);

   var nameBtn = createButton('Enter');
   nameBtn.position(495, 95);

   nameBtn.mousePressed(function click() {
     name.hide();
     nameInput.hide();
     nameBtn.hide();
     nameInput.style('background-color',0)
     names = nameInput.value();
     greet = createElement('h2', "Hello " + names);
     greet.position(285, 70)
      console.log(nameInput.value());
     if( names.length === 0 || names.length > 10){
       name.show();
       nameInput.show();
       nameBtn.show();
       greet.value = undefined
       greet.hide();
        
     }
   })



   bg = createSprite(width - 5, 127, 0, 0);
   //bg.scale = 0.25;
   bg.addImage(bgI);


   car2 = createSprite(60, 303, 50, 30);
   car2.scale = 0.1;
   car2.addImage(car2I);

   car3 = createSprite(160, 313, 50, 30);
   car3.scale = 0.1;
   car3.addImage(car3I);



   car1 = createSprite(120, 303, 50, 30);
   car1.scale = 0.1;
   car1.addImage(car1I);


   player = createSprite(23, 313, 50, 30);
   player.scale = 0.1;
   player.addImage(plr);

   hearts = createGroup();
   
    for(var i = 25; hearts.length < 5; i+= 40){
      
      heart = createSprite(i,70,30,30);
      heart.addImage(heartI);
      heart.scale = 0.07;
      hearts.add(heart);
    }


 }

 function start() {

 drawSprite(bg);
       drawSprite(car2);
       drawSprite(car3);
       drawSprite(car1);
       drawSprite(player);
   fill(0)
   textSize(40);
   textFont('Raleway');
   text("CAR RACING GAME", width / 2 - 188, height / 2 - 90);
   textSize(18);
   textStyle(BOLD);
   
      player.x += 1.3;
   car1.x += 1.5;
   car2.x += 1;
   car3.x += 2.5;
   

   if(names !== undefined && names.length <= 10 && names.length !== 0){
   text("          Playing For The First Time?\n\n Press 'ENTER' to check out the rules.\n    Press 'ESC' To Learn The Controls.", width / 2 - 170, height / 2 - 20);
   text("        Played Before?\n\n Press 'SPACE' To Start.", width / 2 - 100, height / 2 + 80);
 


   if (player.x >= width + 23) {
     player.x = -23;
   }
   if (car1.x >= width + 23) {
     car1.x = -23;
   }
   if (car2.x >= width + 23) {
     car2.x = -23;
   }
   if (car3.x >= width + 23) {
     car3.x = -23;
   }


   if (car3.x <= player.x - 30) {
     car3.x -= 1;
     player.x += 0.5;
   }


   if (car1.x <= car2.x - 30) {
     car1.x -= 0.5;
     car2.x += 0.5;
   }

   if (keyDown('SPACE')) {

     gameState = "PLAY";
     player.x = 23;
     car1.x = 0;
     car2.x = 150;
     car3.x = 250;

   }
   if (keyCode === ESCAPE) {
     greet.hide();
     tint(60);
     image(bgI, -147, -220);
     fill(255)
     textSize(40);
     textFont('Raleway');
     text("CAR RACING GAME", width / 2 - 182, height / 2 - 80);
     textStyle(NORMAL)
     textSize(20);
     text("Press 'SPACE' to start", width / 2 - 110, height - 20);
     arrow.resize(240, 114);
     noTint();
     image(arrow, width / 2 - 140, height / 2 - 40);
     text("Switch to Left Lane", 258, 127);
     text("Move Backwards", 107, 219);
     text("Move Forwards", 430, 219);
     text("Switch to Right Lane", 255, 262);
     textSize(15);
     text("Press 'ENTER' to look at the Rules", 485, 20);


   } else if (keyCode === ENTER) {
     textFont('Raleway');
     greet.hide();
     fill(255);
     textSize(40);
     tint(60);
     image(bgI, -147, -220);
     text("CAR RACING GAME", width / 2 - 182, height / 2 - 100);
     textSize(20);
     textStyle(NORMAL);
     text("                                          Rules\n   1 .Overtake all the other cars and reach the finish line.\n                  2 . Avoid crashing into other cars.\n                       3 . Try to finish the race first.\n                 4. To learn the controls , Press 'ESC'.\n                5. And Most Importantly, HAVE FUN!", width / 2 - 262, height / 2 - 30)
     text("Press 'SPACE' to start", width / 2 - 110, height - 20);
   }
 }else{
   text("Enter a name less than 10 characters long.",175,150);
    
 }
  
 }

 function play() {
   //    displaying player's name
   greet.show();
   greet.html(names);
   greet.position(10, -15);


   // Infinite Background
   if (bg.x <= 97) {
     bg.x = width - 5;
   }
   // Movement of Player

   // Move Forwards
   if (keyDown(RIGHT_ARROW)) {

     bg.x -= 3;
     player.x = player.x + 1.5;

   }
   //   Move Backwards
   if (keyDown(LEFT_ARROW) && bg.x < 715) {

     bg.x += 3;
     player.x = player.x -= 0.5;
     console.log(bg.x);
     if (bg.x >= 710) {
       bg.x = 710;
       player.x -= 0.5
       if (player.x < 23) {
         player.x = 23;
       }
     }
   }
   // Switch to left lane
   if (keyDown(UP_ARROW) && player.y === 313) {

     player.y = 303;
   
     if (player.x > car1.x - 50 && player.x < car1.x + 50) {
       player.y = 313;
     }
     if (player.x > car2.x - 50 && player.x < car2.x + 50) {
       player.y = 313;
     }
     if (player.x > car3.x - 50 && player.x < car3.x + 50) {
       player.y = 313;
     }
   }

   
   // Switch to right lane
   if (keyDown(DOWN_ARROW) && player.y === 303) {

     player.y = 313;
   
     if (player.x > car1.x - 50 && player.x < car1.x + 50) {
       player.y =  303;
     }
     if (player.x > car2.x - 50 && player.x < car2.x + 50) {
       player.y = 303;
     }
     if (player.x > car3.x - 50 && player.x < car3.x + 50) {
       player.y = 303;
     }
   }

   
   // Movement of NPC's
   car1.x += random(0.1, 0.8);
   car2.x += random(0.5, 0.7);
   car3.x += random(0.7, 0.9);

   //   increasing speed of cars if player crosses them
   if (car1.x + 70 < player.x) {
     car1.x += 0.9
   }

   if (car2.x + 30 < player.x) {
     car2.x += 0.3;
   }

   // drawing Sprites to prevent overlapping of images

   if (car1.y === 313) {
     drawSprite(bg);
     drawSprites(hearts)
     drawSprite(car2);
     drawSprite(car1);
     drawSprite(car3);
     drawSprite(player);
   }
     if (player.y === 313) {
       drawSprite(bg);
       drawSprites(hearts)
       drawSprite(car2);
       drawSprite(car1);
       drawSprite(car3);
       drawSprite(player);
     } else if (player.y === 303) {
       drawSprite(bg);
       drawSprites(hearts);
             // hearts.scale = 0.07;
       drawSprite(player);
       drawSprite(car2);
       drawSprite(car3);
       drawSprite(car1);
     }
   
   
   if (player.x < car2.x - 60 && car2.x > player.x && car2.x - 150 < player.x) {
     car2.y = player.y;

   } else if (player.y >= 313 && car1.y === 303) {
     drawSprite(bg);
     drawSprites(hearts)
     drawSprite(car1);
     drawSprite(car2);
     drawSprite(car3);
     drawSprite(player);
   } else if (player.y === 303 && car1.y === 303) {
     drawSprite(bg);
     drawSprites(hearts)
     drawSprite(player);
     drawSprite(car1);
     drawSprite(car2);
     drawSprite(car3);
   }

   

   if (player.x <= car3.x - 60 && player.x > car2.x) {
     car3.y = player.y;

   } else if (player.x > 620) {
     car3.x += 0.3
     if (player.y === 313) {
       drawSprite(bg);
       drawSprites(hearts)
       drawSprite(car2);
       drawSprite(car1);
       drawSprite(car3);
       drawSprite(player);
     } else if (player.y === 303) {
       drawSprite(bg);
       drawSprites(hearts)
       drawSprite(player);
       drawSprite(car2);
       drawSprite(car3);
       drawSprite(car1);
     }
   }

   // Bumping into cars
   if (car1.x > player.x - 40 && player.y === car1.y && player.x > car1.x) {

     car1.x -= 3;
     player.x += 3;
      hearts.pop();
     console.log(hearts);

   }
   if (player.x > car1.x - 40 && player.y === car1.y && car1.x > player.x) {

     car1.x += 3;
     player.x -= 3;
     hearts.pop();
     console.log(hearts);
   }


   if (car2.x > player.x - 40 && player.y === car2.y && player.x > car2.x) {

     car2.x -= 3;
     player.x += 3;
hearts.pop();
     console.log(hearts);
   }
   if (player.x > car2.x - 50 && player.y === car2.y && car2.x > player.x) {

     car2.x += 3;
     player.x -= 3;
hearts.pop();
     console.log(hearts);
   }

   if (player.x >= car3.x - 50 && player.y === car3.y && car3.x > player.x) {

     player.x -= 3;
     car3.x += 3;
     hearts.pop();
     console.log(hearts);
   }
   if (car3.x >= player.x - 40 && player.y === car3.y && player.x > car3.x) {

     player.x += 3;
     car3.x -= 3;
     hearts.pop();
     console.log(hearts);
   }


   if (car1.x >= car2.x - 50 && car1.y === car2.y) {

     car1.x -= 0.3;
     car1.y = 313;
     car2.y = 303;
     car2.x += 1.3;
   }
   if (car1.x >= car3.x - 50 && car1.y === car3.y) {

     car1.x -= 0.3;
     car3.x += 1;
   
   }
   if (car2.x >= car3.x - 50) {

     car2.x -= 0.3;
     car3.x += 1;
   }

 
 

   if (player.x >= width - 10 || hearts.length === 0 ||car3.x >= width - 10 ) {

     gameState = "END"

   }
 }
 

 function end() {

   tint(60);
   image(bgI, -147, -220);
   
    fill(255);
     textSize(40);
   
   if(hearts.length === 0 ){
     
     
      
        text("Your Disqualified!",width/2-170,150);
    
        
   }
   if(car3.x >= width - 10){
     
     if(player.x < car1.x){
       text("You Placed \n       4th",width/2-130,150);
    }
     if(player.x > car1.x && player.x < car2.x){
       text("You Placed \n       3th",width/2-130,150);
    }
     if(player.x > car2.x && player.x < car3.x){
       text("You Placed \n       2th",width/2-130,150);
    }

 }
    if(player.x > width-10){
       text("You Placed \n       1st",width/2-130,150);
    }
}

 function draw() {
   background(0);


   if (gameState === "START") {

     start();
     
   }

   if (gameState === "PLAY") {

     play();

   }

   if (gameState === "END") {

     end();

   }


   textSize(15);
   text(mouseX + "," + mouseY, 5, 15);

 }

 