const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var bird;
var box1, box2, box3;
function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(50, 690, 50, 50)
    box1 = new Box(550 ,680, 200, 20)
    Matter.Body.setStatic(box1.body, true)
    box2 = new Box(450 ,640, 20, 100)
    Matter.Body.setStatic(box2.body, true)
    box3 = new Box(650 ,640, 20, 100)
    Matter.Body.setStatic(box3.body, true)

    ground = new Ground(600, 700, 1200, 20);
}

function draw(){
    background(0);
    Engine.update(engine);
    if (keyIsDown(UP_ARROW)){
        Matter.Body.applyForce(bird.body, bird.body.position, {x:5, y:-15})
    }
    ground.display();
    bird.display()
    box1.display()
    box2.display()
    box3.display()
}