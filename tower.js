class Tower{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,30,40);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    

    World.remove(world,this.body);
    push();
    this.visiblity=this.visiblity-5;
    tint(255,this.visiblity)
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
    }
}