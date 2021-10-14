class Slingshot{
    constructor(bodyA, pointB,){
      var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
      }
      this.sling1 = loadImage("sling1.png");
      this.sling2 = loadImage("sling2.png");
      this.sling3 = loadImage("sling3.png");
      this.pointB = pointB;
      this.sling = Constraint.create(options);      
      World.add(world, this.sling)

      
    }
    display(){
        image(this.sling1, width/2-380, height-428)
        image(this.sling2, width/2-405, height-475)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            push();
            strokeWeight(4);
            line(pointA.x+30, pointA.y, pointB.x, pointB.y+300)
            line(pointA.x-32, pointA.y-10, pointB.x, pointB.y+300)
            pop();
        }
        
        
    }
}
