class Paper{
    constructor(x,y,r){
        var options= {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body= Bodies.circle(x,y,r,options);
        this.r= r
        World.add(world,this.body)
        console.log("hello")
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        fill("#7AF2F5");
        //ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();
        console.log("hi")
    }
}
