class tree{
    constructor(_root){
        this.root = _root;
        this.leaves = [];
        this.Ydiff = []
    }

    addNextGeneration(_gen){
        this.root.addChildren(_gen)
    }

    showTree(j){
        this.root.showBranch(j); 
    }

    showLeaves(fix_j){
        this.leaves.forEach((leaf, index)=>{
            this.Ydiff[index] += random(0,3)
            fill(255, 0, 100, 100);
            noStroke();
            ellipse(leaf.x + fix_j[0], leaf.y + fix_j[1]+ this.Ydiff[index], 8, 8);
        })
    }
}