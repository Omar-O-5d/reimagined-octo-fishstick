camera = document.getElementById("camera");
      
Webcam.attach( camera );      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
   //console.log(results);
     //   random_number_r=Math.floor(Math.random()*255) +1;
       // random_number_g=Math.floor(Math.random()*255) +1;
        //random_number_b=Math.floor(Math.random()*255) +1;

        //document.getElementById("result_object_name").innerHTML='The family member is - '+ results[0].label;
        //document.getElementById("result_confidence").innerHTML='Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
        //document.getElementById("result_object_accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        //document.getElementById("result_object_accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
  }
}

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oPj15JVnP/',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    image="selfie_image"
    document.getElementById("result_object_name").innerHTML='Family Member - '+ results[0].label;
    classifier.classify(gotResult);
  }
