var canvas = new fabric.Canvas('my_canvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
    block_object_image=Img;

    block_object_image.scaleToWidth(700);
    block_object_image.scaleToHeight(510);
    block_object_image.set({
 top:0,
 left:0
    });
    canvas.add(block_object_image);
    });
	
}

function playSound(){
	x.play();
}
