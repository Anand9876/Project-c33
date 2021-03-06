var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var gameState="start";
var count=0;
var turn=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){ 

     particle.display();
     if(particle.body.position.y>760){

       if(particle.body.position.x<300){
         score=score+500;
         particle=null;
         if(count>=5)gameState="end";

       }
     }
   }
   if(particle!=null){ 

    particle.display();
    if(particle.body.position.y>760){

      if(particle.body.position.x<600){
        score=score+100;
        particle=null;
        if(count>=5)gameState="end";

      }
    }
  }
  if(particle!=null){ 

    particle.display();
    if(particle.body.position.y>760){

      if(particle.body.position.x<900){
        score=score+200;
        particle=null;
        if(count>=5) gameState="end";

      }
    }
  }
  if(count>=5&& particle===null){
    noStroke();
        textSize(50)
        fill("white")
        text("GAME OVER! ", 250, 150)
  }
   noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-750, 50)

        noStroke();
        textSize(35)
        fill("white")
        text("500", 10, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("500", 90, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("500",170, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("100", 250, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("100" , 330, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("100", 410, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("100", 490, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("100",570, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("200", 650, 750)
        noStroke();
        textSize(35)
        fill("white")
        text("200", 730, 750)

}
function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
    
  }
}