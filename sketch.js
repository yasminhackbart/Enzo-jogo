var flag = 0;
var pulo=0
var megaman;


var parado;
var correndo;
var correndo2;
var abaixando;
var pulando;

var goomba;
var goombaImg;

var cogumelo1;
var cogumelo1Img

var cogumelo2;
var cogumelo2Img;

var coin;
var coinImg

var blocoImg
var bloco2Img;
var madeiraImg;
var madeira2Img;

var chao;
var chao2;
var lava;

 var fundoImg;

function preload(){
  parado = loadAnimation("assets/parado.png");
  correndo = loadAnimation("assets/correndo1.png","assets/correndo2.png","assets/correndo3.png");
  correndo2 = loadAnimation("assets/correndo1.1.png","assets/correndo2.1.png","assets/correndo3.1.png");
  pulando = loadAnimation("assets/pulando.png");
  abaixando = loadAnimation("assets/abaixado.png");

  cogumelo1Img = loadImage("assets/cogumelo1.png");
  cogumelo2Img = loadImage("assets/cogumelo2.png");
  blocoImg = loadImage("assets/bloco.png")
  bloco2Img = loadImage("assets/bloco2.png")
  madeiraImg = loadImage("assets/madeira.png")
  madeira2Img = loadImage("assets/madeira2.png")
  goombaImg = loadAnimation("assets/goomba.png","assets/goomba2.png","assets/goomba.png");
  coinImg = loadImage("assets/coin.png");
  
  fundoImg = loadImage("assets/fundo.jpg");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  megaman = createSprite(-700,height - 250);
  megaman.addAnimation("parado", parado);
  megaman.addAnimation("pulando", pulando);
  megaman.addAnimation("correndo", correndo);
  megaman.addAnimation("correndo2", correndo2);
  megaman.addAnimation("abaixando", abaixando);

  megaman.scale = 0.6;

  cogumelo1 = createSprite(282, height - 200);
  cogumelo1.addImage(cogumelo1Img);
  cogumelo1.scale = 0.2;

  cogumelo2 = createSprite(682, height - 200);
  cogumelo2.addImage(cogumelo2Img);
  cogumelo2.scale = 0.2;

  goomba = createSprite(-230, height - 200);
  goomba.addAnimation("andando",goombaImg);
  goomba.scale = 0.3

  goomba1 = createSprite(1250, height - 210);
  goomba1.addAnimation("andando",goombaImg);
  goomba1.scale = 0.3

  goomba2 = createSprite(1500, height - 210);
  goomba2.addAnimation("andando",goombaImg);
  goomba2.scale = 0.3

  coin = createSprite(-582, height - 215);
  coin.addImage(coinImg)
  coin.scale = 0.3;

  coin1 = createSprite(282, height - 485);
  coin1.addImage(coinImg)
  coin1.scale = 0.3;

  coin2 = createSprite(482, height -385);
  coin2.addImage(coinImg)
  coin2.scale = 0.3;

  coin3 = createSprite(682, height - 485);
  coin3.addImage(coinImg)
  coin3.scale = 0.3;

  coin4 = createSprite(882, height - 210);
  coin4.addImage(coinImg)
  coin4.scale = 0.3;

  coin5 = createSprite(1982, height - 685);
  coin5.addImage(coinImg)
  coin5.scale = 0.3;

  chao = createSprite(width / 2, height - 50,windowWidth * 5, 230 );
  chao.shapeColor = "green";

  chao2 = createSprite(width / 2, height - 50,windowWidth * 5,140)
  chao2.shapeColor = "#8a5507";

  obs = createSprite(-680, height - 215);
  obs.addImage(blocoImg);

  obs1 = createSprite(-582, height - 315);
  obs1.addImage(blocoImg);

  obs2 = createSprite(82, height - 215);
  obs2.addImage(blocoImg);

  obs3 = createSprite(82,  height - 315);
  obs3.addImage(blocoImg);

  obs4 = createSprite(82, height - 415);
  obs4.addImage(blocoImg);

  obs5 = createSprite(-16, height - 215);
  obs5.addImage(blocoImg);
 
  obs6 = createSprite(-300, height - 370, 200,20)
  obs6.addImage(madeiraImg);
  

  obs7 = createSprite(282, height - 415, 100, 50);
  obs7.addImage(madeira2Img);
  obs7.scale = 0.9;

  obs8 = createSprite(482, height - 315, 100, 50);
  obs8.addImage(madeira2Img);
  obs8.scale = 0.9

  obs9 = createSprite(682, height - 415, 100,50);
  obs9.addImage(madeira2Img);
  obs9.scale = 0.9

  obs10 = createSprite(882, height - 300, 100, 130);
  obs10.addImage(blocoImg);

  obs11 = createSprite(882, height - 400, 100, 130);
  obs11.addImage(blocoImg);

  obs13 = createSprite(1132, height - 215);
  obs13.shapeColor = "green";
  obs14 = createSprite(1132, height - 315);
  obs14.shapeColor = "green";
  obs15 = createSprite(1132, height - 415);
  obs15.shapeColor = "green";
  obs16 = createSprite(1132, height - 515);
  obs16.shapeColor = "green";

  obs17 = createSprite(1382, height - 215);
  obs17.shapeColor = "green";
  obs18 = createSprite(1382, height - 315);
  obs18.shapeColor = "green";
  obs19 = createSprite(1382, height - 415);
  obs19.shapeColor = "green";
  obs20 = createSprite(1382, height - 515);
  obs20.shapeColor = "green";

  obs21 = createSprite(1632, height - 215);
  obs21.shapeColor = "green";
  obs22 = createSprite(1632, height - 315);
  obs22.shapeColor = "green";
  obs23 = createSprite(1632, height - 415);
  obs23.shapeColor = "green";
  obs24 = createSprite(1632, height - 515);
  obs24.shapeColor = "green";
  obs25 = createSprite(2332, height - 365, 100,400 )
  obs25.shapeColor = "green";
  obs26 = createSprite(1982, height - 615, 100,50)
  obs26.addImage(madeira2Img)
 
  lava = createSprite(1982, height - 173, 600, 20)
  lava.shapeColor = "red";

  caixa = createSprite(3300, height - 240);
  caixa.addImage(bloco2Img);
  caixa.scale = 0.7;


}

function draw() {

  background(fundoImg); 
  drawSprites();

  goomba.collide(chao);
  
  megaman.collide(obs13);
  megaman.collide(obs14);
  megaman.collide(obs15);
  megaman.collide(obs16);
  megaman.collide(obs17);
  megaman.collide(obs18);
  megaman.collide(obs19);
  megaman.collide(obs20);
  megaman.collide(obs21);
  megaman.collide(obs22);
  megaman.collide(obs23);
  megaman.collide(obs24);
  megaman.collide(obs25);
  megaman.collide(obs26)

  
  megaman.collide(lava);
  megaman.collide(caixa);
  
  camera.position.x = megaman.x;
  console.log(megaman.x);

  megaman.velocityY += 1;
  megaman.debug = false;
  megaman.setCollider("rectangle",0,0,150,170)




  if(megaman.collide(chao)){
    megaman.changeAnimation("parado");
    megaman.scale = 0.6;


   if(keyIsDown(UP_ARROW)) {
      megaman.velocityY =-18;
       megaman.changeAnimation("pulando");
       megaman.scale = 0.6;
   
     }
  }



  if(
   megaman.collide(obs)
  || megaman.collide(obs3)
  || megaman.collide(obs4)
  || megaman.collide(obs5)
  || megaman.collide(obs6)
  || megaman.collide(obs7)
  || megaman.collide(obs8)
  || megaman.collide(obs9)
  || megaman.collide(obs10)
  || megaman.collide(obs11)
  ){
    megaman.changeAnimation("parado");
    megaman.scale = 0.6;
    pulo=0;
    if(keyIsDown(UP_ARROW)) {
      megaman.velocityY =-18;
       megaman.changeAnimation("pulando");
       megaman.scale = 0.6;
       pulo=1
     }
  } 
  
  if(megaman.collide(obs1)){
    megaman.changeAnimation("parado");
    megaman.scale = 0.6;
    pulo=0
    if(keyIsDown(UP_ARROW)) {
      megaman.velocityY =-18;
       megaman.changeAnimation("pulando");
       megaman.scale = 0.6;
       pulo=1
     }
  } 

  if(megaman.collide(obs2)){
    megaman.changeAnimation("parado");
    megaman.scale = 0.6;
    pulo=0
    if(keyIsDown(UP_ARROW)) {
      megaman.velocityY =-16;
       megaman.changeAnimation("pulando");
       megaman.scale = 0.6;
       pulo=1
     }
  } 

  



  if(keyIsDown(RIGHT_ARROW) ) {
    megaman.x += 12;
    if(pulo==0){
      megaman.changeAnimation("correndo");
    megaman.scale = 0.6;
    }
    
  }


  if(keyIsDown(LEFT_ARROW)) {
    megaman.x -= 12;
    if(pulo==0){
       megaman.changeAnimation("correndo2");
    megaman.scale = 0.6;
    }
  }



  if(keyIsDown(DOWN_ARROW)) {
    megaman.changeAnimation("abaixando");
    megaman.scale =0.5;
  }
  
 
   

}

