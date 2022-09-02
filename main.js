 var objectDetector=0;
 var objects=0;
 var statu1=""
 var statu=0;
var dog=[];
var variable=0;
var variable1=0;

function preload(){
  dog=loadImage("recliner.jpg");
  
}

function setup(){
  canvas=createCanvas(350,350);
  canvas.center()
}



function modelLoaded(){
  console.log("cocossd is initialized");
statu=true;
objectDetector.detect(objects,gotResults)
}
function gotResults(error,results){
  if(error){
      console.error(error)
  }

  if(results){
      console.log(results);
      statu1=results;
      console.log(objects[0].label)
  };
};
function draw(){
  if(statu=!""){
    
};

for(var i=0; i<statu1.length; i++){
  variable=statu1[i].confidence;
  variable1=floor(variable*100);
document.getElementById("statsu").innerHTML="The object is detected"
document.getElementById("1").innerHTML="The objects detected are " + statu1.length
noFill();
stroke("red");
rect(statu1[i].x,statu1[i].y,statu1[i].width,statu1[i].height);
if(i=!"person"){

}
}}