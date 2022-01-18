var bola;
var position;
var database;

function setup() {
  database = firebase.database();
  createCanvas(400, 400);
  bola = createSprite(200, 200, 10, 10);
  bola.shapeColor = "hotpink";

  var bolapos = database.ref('bola/position');
  bolapos.on("value", lerPos, mostrarErro);
}

function draw() {
  background(0);
if(position!===undefined){
  drawSprites();

if (keyDown("up")){
  escreverPos(0,-3);
}
if (keyDown("down")){
  escreverPos(0,3);
}
if (keyDown("left")){
  escreverPos(-3,0);
}
if (keyDown("right")){
  escreverPos(3,0);
}
}
}
function escreverPos(x,y){
  database.ref('bola/position').set({
    'x': position.x + x ,
    'y': position.y + y
  });
}
function lerPos(data){
  position = data.val();
  bola.x = position.x;
  bola.y = position.y;
}
function mostrarErro(){
  console.log("erro na conexão com a base de dados");
}