class Rubber{
    constructor(x,y,r){
    var options={
    'density':0.3,
    'friction':5,
    'resititution':1
    };
    this.body=Bodies.circle(x,y,(r-20)/2,options,30);
    this.x=x
    this.y=y
    this.r=r
    World.add(world,this.body)
}
display(){
    var pos=this.body.postion
    push();
     translate(pos.x.pos.y);
    ellipseMode(CENTER);
    fill( "0" )
    ellipse(0,0,this.r,this.r);
    pop();

}
}   