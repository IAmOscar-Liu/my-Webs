class Point{

    private x: number;
    private y: number;
    z: number = 16;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    // Another way of creating a constructor

    // z: number;
    // constructor(private x: number, private y: number){
    //     this.z = 16;
    // }
    

    draw(){
        console.log(`X: ${this.x}, Y:${this.y}`);
    }

    get X(){
        return this.x;
    }

    set X(value){
        if(value < 0){
            throw new Error("value cannot be less than 0");
        }

        this.x = value
    }

}

let point = new Point(1,2);
point.draw();
let x: number = point.X;
point.X = 19;

