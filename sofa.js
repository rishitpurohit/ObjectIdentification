objectDetector=0;
objects=0;
function preload(){
  dog=loadImage("recliner.jpg")
}

function setup1(){
    canvas=createCapture(300,300);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statu").innerHTML="Status:detecting "
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
      objects=results;
      console.log(objects[0].label)
  };
};