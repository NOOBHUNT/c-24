class Log {
    constructor(x,y,height,angle){
      var options ={
      'restitution':0.8,
      'friction' :1.0,
      'density' :1.0
      }
      this.body=Bodies.rectangle(x,y,20,height,angle,options);
      this.width=20;
      this.height=height;
      Matter.Body.setAngle(this.body,angle)
     World.add(world,this.body)
    }
  
  display(){
   var p=this.body.position;
  var angle=this.body.angle;
  push ();
  translate(p.x,p.y);
  rotate(angle)
  rectMode(CENTER);
  fill("red");
  strokeWeight(5);
  stroke("lightgreen")
  rect(0,0,this.width,this.height)
  pop ();
  }
}