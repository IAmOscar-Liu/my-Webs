class log extends Rectangle{
    constructor(x , y, width, height, speed){
        super(x, y, width, height);
        this.speed = speed;
    }

    move(){
        this.x += this.speed;
    }

    show(){
        fill(153,76,0);
        noStroke();
        rect(this.x, this.y+1 , this.width, this.height-2)
        arc(this.x + 2 , this.y+ 1 + (this.height-2)/2, grid-2, grid-2, HALF_PI, -1*HALF_PI );
        arc(this.x - 2 + this.width , this.y+ 1 + (this.height-2)/2, grid-2, grid-2, -1*HALF_PI,HALF_PI);
    }
}