class blueBox{
    constructor(x, y, w, h){
  
    var ground_options ={
        restitution : 0.8
      }

     this.body = Bodies.rectangle(x, y , w, h, ground_options)
     this.w = w;
     this.h = h;
     World.add(world, this.body);
    }

 display(){

    var pos = this.body.position;

 push();
 rectMode(CENTER);
 fill(69,212, 255);
 rect(pos.x, pos.y, this.w , this.h);
pop();
 }



}







