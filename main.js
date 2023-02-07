var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 
 var inpute = document.getElementById("inp").value;
function new_image()
{
	fabric.Image.fromURL(get_image , function(Img){
block_img_objet=Img;

block_img_objet.scaleToWidht(700);
block_img_objet.scaleToHeight(510);
block_img_objet.set({
    left:0,
    top:0
});
canvas.add(block_img_objet)
    });

}

function play(){
x.play();	
}

function name(){
document.getElementById("bt").innerHTML= inpute;


}