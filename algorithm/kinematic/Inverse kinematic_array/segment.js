
class Segment {
    /* Unlike in Java, JavaScript does not implement
     * function overloading, which means we cannot simply have
     * two different constructors for our Segment class as Shiffman does in
     * his pde example. Instead, we must have one constructor function
     * which behaves differently depending on the type of arguments we pass.
     */
    constructor(point, len_, i) {
      if (point.hasOwnProperty("angle")) { // point is probably a Segment
  
        this.parent = point;
        this.sw = 0;
        this.b = new p5.Vector();
        this.a = this.parent.b.copy();
  
      } else {
        this.parent = null;
        this.sw = map(i, 0, 20, 1, 10);
        this.b = new p5.Vector();
        this.a = new p5.Vector(point.x, point.y);

      }
      this.len = len_;
      
      this.angle = 0;
      this.b = new p5.Vector();
      this.child = null;
      this.calculateB();

    }

    setA(pos) {
      this.a = pos.copy();
      this.calculateB();
    }

  
  
    follow(child) {
    /* Shiffman used function overloading here too, but since we can't
     * in JavaScript we instead check whether or not ty is undefined. */
      if (child.hasOwnProperty("angle")) {
  
        let targetX = child.a.x;
        let targetY = child.a.y;
        this.follow(new p5.Vector(targetX, targetY));
  
      } else {
  
        let target = new p5.Vector(child.x, child.y);
        let dir = p5.Vector.sub(target, this.a);
        this.angle = dir.heading();
        dir.setMag(this.len);
        dir.mult(-1);
        this.a = p5.Vector.add(target, dir);
  
      }
    }
  
  
    calculateB() {
      let dx = this.len * cos(this.angle);
      let dy = this.len * sin(this.angle)
      this.b.set(this.a.x + dx, this.a.y + dy);
    }
  
  
    update() {
      this.calculateB();
    }
  
  
    show() {
      stroke(255);
      strokeWeight(this.sw);
      line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
  }