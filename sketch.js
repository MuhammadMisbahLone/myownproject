const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bike,bikeImg;
var backgroundImg,bg;
var ground;
var bridge,bridgeImg;
var bridgesign,bridgesignImg;
var noparking,noparkingImg;
var noparkingsign,noparkingsignImg;
var noentry,noentryImg;
var noentrysign,noentrysignImg;
var uturn,uturnImg;
var uturnsign,uturnsignImg;
var nouturn,nouturnImg;
var nouturnsign,nouturnsignImg;
var nohorn,nohornImg;
var nohornsign,nohornsignImg;
var last,lastImg;
var start,startImg;
var greeting,greetingImg;
function preload() {
    backgroundImg = loadImage("bg.jpg");
    bikeImg = loadImage("bike.png");
    bridgeImg = loadImage("bridge.png");
    bridgesignImg = loadImage("bridgesign.png");
    noparkingImg = loadImage("noparking.png");
    noparkingsignImg = loadImage("noparkingsign.jpg");
    noentryImg = loadImage("noentry.png");
    noentrysignImg = loadImage("noentrysign.png");
    uturnImg = loadImage("uturn.png");
    uturnsignImg = loadImage("uturnsign.png");
    nouturnImg = loadImage("nouturn.png");
    nouturnsignImg = loadImage("nouturnsign.jpg");
    nohornImg = loadImage("nohorn.png");
    nohornsignImg = loadImage("nohornsign.jpg");
    lastImg = loadImage("message.jpg");
    startImg = loadImage("start.jpg");
    greetingImg = loadImage("hello.jpg");
} 

function setup(){
    var canvas = createCanvas(600,500);
    bg = createSprite(400,220,20,20);
    bg.addImage(backgroundImg);
    bg.scale = 1.4;
    bike = createSprite(120,360,20,20);
    bike.addImage(bikeImg);
    bike.scale = 0.4;
    //bridge
    bridge = createSprite(800,320,20,20);
    bridge.addImage(bridgeImg);
    bridge.scale = 0.4;
    bridgesign = createSprite(800,200,20,20);
    bridgesign.addImage(bridgesignImg);
    bridgesign.scale = 0.2;
    //noparking
    noparking = createSprite(1400,320,20,20);
    noparking.addImage(noparkingImg);
    noparking.scale = 0.2;
    noparkingsign = createSprite(1400,200,20,20);
    noparkingsign.addImage(noparkingsignImg);
    noparkingsign.scale = 0.2;
    //noentry
    noentry = createSprite(2000,320,20,20);
    noentry.addImage(noentryImg);
    noentry.scale = 0.2;
    noentrysign = createSprite(2000,200,20,20);
    noentrysign.addImage(noentrysignImg);
    noentrysign.scale = 0.4;
    //uturn
    uturn = createSprite(2600,320,20,20);
    uturn.addImage(uturnImg);
    uturn.scale = 0.2;
    uturnsign = createSprite(2600,200,20,20);
    uturnsign.addImage(uturnsignImg);
    uturnsign.scale = 0.4;
    //nouturn
    nouturn = createSprite(3200,320,20,20);
    nouturn.addImage(nouturnImg);
    nouturn.scale = 0.4;
    nouturnsign = createSprite(3200,200,20,20);
    nouturnsign.addImage(nouturnsignImg);
    nouturnsign.scale = 0.4;
     //nohorn
     nohorn = createSprite(3800,320,20,20);
     nohorn.addImage(nohornImg);
     nohorn.scale = 0.2;
     nohornsign = createSprite(3800,200,20,20);
     nohornsign.addImage(nohornsignImg);
     nohornsign.scale = 0.2;
     last = createSprite(4600,230,20,20);
     last.addImage(lastImg);
     last.scale = 0.9;
     start = createSprite(300,100,20,20);
     start.addImage( startImg);
     start.scale = 0.8;
     greeting = createSprite(300,100,20,20);
     greeting.addImage(greetingImg);
     greeting.scale = 2.0;
    ground = createSprite(300,480,600,20);
    engine = Engine.create();
    world = engine.world;
}
function draw(){
    background(225);
    Engine.update(engine);
    if (bg.x < 200){
        bg.x = bg.width/2;
      }
      if (bg.x < 200){
        
      }
      greeting.velocityY = -4;
      if (last.x < 300){
        bg.velocityX = 0;
        bridge.velocityX = 0;
        bridgesign.velocityX = 0;
        noparking.velocityX = 0;
        noparkingsign.velocityX = 0;
        noentry.velocityX = 0;
        noentrysign.velocityX = 0;
        uturn.velocityX = 0;
        uturnsign.velocityX = 0;
        nouturn.velocityX = 0;
        nouturnsign.velocityX = 0;
        nohorn.velocityX = 0;
        nohornsign.velocityX = 0;
        last.velocityX = 0;
      }
    if(keyDown("space")) {
        start.visible = false;
        bg.velocityX = -8;
        bridge.velocityX = -8;
        bridgesign.velocityX = -8;
        noparking.velocityX = -8;
        noparkingsign.velocityX = -8;
        noentry.velocityX = -8;
        noentrysign.velocityX = -8;
        uturn.velocityX = -8;
        uturnsign.velocityX = -8;
        nouturn.velocityX = -8;
        nouturnsign.velocityX = -8;
        nohorn.velocityX = -8;
        nohornsign.velocityX = -8;
        last.velocityX = -8;
    }
    drawSprites();
}
