class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.7,
            friction:0,
            density:7
        }

        this.bob=Bodies.circle(x,y,25,options);
        World.add(world,this.bob)
    }

    display(){
        push()
        ellipseMode(RADIUS)
        fill(254,0,255)
        ellipse(this.bob.position.x,this.bob.position.y,25,25)
        pop()
    }    
}