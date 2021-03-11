class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic: true,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_3.png","images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_8.png");
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,28,200,200);
        pop();
    }
}