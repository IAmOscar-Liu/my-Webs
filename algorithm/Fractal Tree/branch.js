class branch{
    constructor(begin, end, generation){
        this.begin = begin;
        this.end = end;
        this.generation = generation;
        this.childA = null;
        this.childB = null;
        if(this.generation == maxGen){
            Tree.leaves.push(this.end);
            Tree.Ydiff.push(0)
        }
    }

    addChildren(_gen){
        //console.log('now gen:' + this.generation + ', _gen:' + _gen)
        if(this.childA == null){
            let dir1 = p5.Vector.sub(this.end, this.begin);
            let dir2 = p5.Vector.sub(this.end, this.begin);
            dir1.rotate(PI / 6);
            dir2.rotate(-PI / 4);
            dir1.mult(0.67);
            dir2.mult(0.67);
            let newEnd1 = p5.Vector.add(this.end, dir1);
            let newEnd2 = p5.Vector.add(this.end, dir2);
            this.childA = new branch(this.end, newEnd1, this.generation + 1);
            this.childB = new branch(this.end, newEnd2, this.generation + 1);
        }

        if( _gen > this.generation){
            this.childA.addChildren(_gen)
            this.childB.addChildren(_gen)
        }
    }

    showBranch(j){
        const newBeginX = (this.generation == 0) ? 0 : j[0];  //fix the begin point of the root
        const newBeginY = (this.generation == 0) ? 0 : j[1]; 
        stroke(255);
        line(this.begin.x + newBeginX, this.begin.y + newBeginY, this.end.x + j[0], this.end.y + j[1]);
        if(this.childA && this.childB){
            this.childA.showBranch(j);
            this.childB.showBranch(j);
        }
    }
}