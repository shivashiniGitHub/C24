const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4,box5,pig1,pig2,log1,log2,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);

    box2 = new Box(950,320,70,70);

    ground = new Ground(600,390,1200,20);

    pig1 = new pig(825,320);

    log1 = new log(825,310,330,PI/2)

    box3 = new Box(700,290,70,70);

    box4 = new Box(950,290,70,70);

    pig2 = new pig(825,290);

    log2 = new log(825,280,330,PI/2);

    box5 = new Box(825,270,70,70);

    log3 = new log(775,270,150,PI/5);

    log4 = new log(900,270,150,PI/0.115);

    bird1 = new bird(400,400);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();
}