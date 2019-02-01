class car extends Rectangle{
    constructor(x , y, width, height, speed){
        super(x, y, width, height);
        this.speed = speed;
        this.color = [floor(random(255)),floor(random(255)),floor(random(255))]
    }

    move(){
        this.x += this.speed;
    }

    show(){
        fill(this.color[0],this.color[1],this.color[2]);
        noStroke();
        rect(this.x-3, this.y+4 , this.width+6, this.height-9)
        fill(32,32,32);
        ellipse(this.x + this.width*0.15 ,this.y + this.height -7,10,10);
        ellipse(this.x + this.width*0.85 ,this.y + this.height -7,10,10);
    }
}