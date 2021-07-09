canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

greencar_x=5;
greencar_y=225;

function add() {
    background_imgtag=new Image();
    background_imgtag.onload=uplodebackground;
    background_imgtag.src=background_image;

   greencar_imgtag=new Image();
   greencar_imgtag.onload=uplodegreencar;
   greencar_imgtag.src=greencar_image;
}

function uplodebackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uplodegreencar() {
    ctx.drawImage(greencar_imgtag,greencar_x,greencar_y,greencar_width,greencar_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    
    key_pressed=e.keyCode;
    
    console.log(key_pressed);
    
    if(keypressed == '38'){
        up();
        console.log("up");
    }
    if(keypressed == '37'){
        left();
        console.log("left");
    }
    if(keypressed == '39'){
        right();
        console.log("right");
    }
    if(keypressed == '40'){
        down();
        console.log("down");
    }
    
    }function up()
    {
       if(greencar_y>=0) 
       {
           greencar_y=greencar_y - 10;
         console.log("when up arrow key is pressed, x = "+ greencar_x + " | y = " + greencar_y );
         uplodebackground();
         uplodegreencar();
       }
   }
   function down()
    {
       if(greencar_y<=500) 
       {
           greencar_y=greencar_y + 10;
         console.log("when down arrow key is pressed, x = "+ greencar_x + " | y = " + greencar_y );
         uplodebackground();
         uplodegreencar();
       }
   }
   function left()
    {
       if(greencar_x>=0) 
       {
           greencar_x=greencar_x - 10;
         console.log("when left arrow key is pressed, x = "+ greencar_x + " | y = " + greencar_y );
         uplodebackground();
         uplodegreencar();
       }
   }
   function right()
    {
       if(greencar_x<=700) 
       {
           greencar_x=greencar_x + 10;
         console.log("when right arrow key is pressed, x = "+ greencar_x + " | y = " + greencar_y );
         uplodebackground();
         uplodegreencar();
       }
   }