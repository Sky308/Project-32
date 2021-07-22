const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time = 0;

function preload() {
getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
Engine.update(engine);

time = hour;

if(backgroundImg)
background(backgroundImg);

noStroke();
textSize(35)
fill("black")
text("Time: " +time, width-300, 50)

}

async function getBackgroundImg(){

    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=0 && hour<=2){
    bg = "sunrise1.png"
    }
    if(hour>=2 && hour<=4){
    bg = "sunrise2.png"
    }
    else if(hour>=4 && hour<=6){
    bg = "sunrise3.png"
    }
    else if(hour>=6 && hour<=8){
    bg = "sunrise4.png"
    }
    else if(hour>=8 && hour<=10){
    bg = "sunrise5.png"
    }
    else if(hour>=10 && hour<=12){
    bg = "sunrise6.png"
    }
    else if(hour>=12 && hour<=14){
    bg = "sunrise7.png"
    }
    else if(hour>=14 && hour<=16){
    bg = "sunrise8.png"
    }
    else if(hour>=16 && hour<=18){
    bg = "sunrise9.png"
    }
    else if(hour>=18 && hour<=20){
    bg = "sunrise10.png"
    }
    else if(hour>=20 && hour<=22){
    bg = "sunrise11.png"
    }
    else{
    bg = "sunrise12.png"
    }
    backgroundImg = loadImage(bg);

}
