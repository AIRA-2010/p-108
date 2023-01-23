function start(){
    classifier =ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QBEg5o-pg/model.json",modelReady);
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);

    color_r = Math.floor(Math.random()*255)+1;
    color_g = Math.floor(Math.random()*255)+1;
    color_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML ="I CAN HEAR : "+results[0].label;
    document.getElementById("result_confidence").innerHTML ="ACCURACY : "+(results[0].confidence*100).toFixed(2)+" % ";
    document.getElementById("result_label").style.color="rgb("+color_r+","+color_g+","+color_b+")";
    document.getElementById("result_confidence").style.color="rgb("+color_r+","+color_g+","+color_b+")";

    img_1 =document.getElementById("dog.gif");
    img_2 =document.getElementById("cat.gif");
    img_3 =document.getElementById("monkey.gif");
    
    if(results[0].label == "dog"){
       img_1.src = "dog.gif";
    }else if(results[0].label == "cat"){
        img_2.src = "cat.gif";
     }else if(results[0].label == "monkey"){
        img_3.src = "monkey.gif";
     }
     else{
        img_1.src="sound-wave-waves.gif";
     }
  }  
}