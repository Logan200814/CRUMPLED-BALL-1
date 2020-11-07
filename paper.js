class Paper {
    constructor(x, y, r) {
      var options = {
          'restitution':0,
          'friction':0.3,
          'density':0.3
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      ellipse(0, 0, this.r*2,this.r*2);
      pop();
    }
  };