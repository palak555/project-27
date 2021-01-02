class Roof{
    constructor(x,y,width,height){
        this.roof=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.width=width;
        this.height=height;
        World.add(world,this.roof)

    }
    display(){
        rectMode(CENTER)
        fill("black")
        rect(this.roof.position.x,this.roof.position.y,this.width,this.height)
    }
}