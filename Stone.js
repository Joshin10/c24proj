class Stone{
    constructor(x,y,width,height){
    var options={
    'density':10,
    'friction':1.0,
    'resititution':0.5
    };
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width
    this.height=height
    World.add(world,this.body)
}
display(){
    var pos=this.body.postion
    var angle=this.body.angle;
    push();
    translate(pos.x.pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("black")
    rect(0,0,this.width,this.height);
    pop();

}
}