var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 #myCanvas
 {
     border-width: 10px; 
     background-color: white;
     border-style: ridge;
     border-color: darkviolet;
 }
function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        block_image_object = Img;


        block_image_object.ScaleToWidth(700);
        block_image_object.ScaleToHeight(510);
    }
	
}

function playSound(){
	   x.play();  
}
