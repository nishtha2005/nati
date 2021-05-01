class Ball {
    constructor(x, y) {
      var options = {
        'density':2,
        'friction': 20.0,
        'restitution':0.3,
      };
      this.body = Bodies.circle(x, y, 70,70,70,70);
      World.add(world, this.body);
      this.width = 100;
      this.height = 100;
    };
    display(){
      var pos = this.body.position;
     
      var angle = this.body.angle;

  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('red')
      fill('orange')
      rectMode(CENTER)
      ellipse(0, 0, this.width, this.height);
      pop();
    };
  };