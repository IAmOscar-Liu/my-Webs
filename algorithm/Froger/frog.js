class frog extends Rectangle{
    constructor(x , y, width, height){
        super(x, y, width, height)
        let img = document.createElement("IMG");
        img.setAttribute("src", "https://img.pngmix.com/pm/frogs/frogs_003.png");
        img.setAttribute("width",'50px');
        img.setAttribute('height','50px');   
        document.querySelector('div#sketch-holder #frogs-holder > div').appendChild(img)
    }

    show(i){
        // fill(0,255,0);
        // noStroke();
        // ellipse(this.x + this.width/2, this.y + this.height/2 , this.width-10, this.height-10);
        document.querySelectorAll('img')[i].setAttribute('style',`left:${this.x}; top:${this.y}`)
    }

    gameReset(){
        if(life > 0){
            this.x = width/2 - grid;
            this.y = height - grid;
            life--;
            document.querySelectorAll('#info span')[0].innerHTML = life;
        }else{
            noLoop();
           showGameover();
        }
    }

    attachLog(_log){
        if(this.x + _log.speed >= 0 && this.x + _log.speed <= (width-grid)){
            this.x += _log.speed;
        }
    }
}

function showGameover(){
    document.getElementById('result').style.display = 'block';
    document.getElementById('message').style.display = 'flex';
    document.querySelector('#message p').innerHTML = 'Game Over';
}

function showSuccess(){
    document.getElementById('result').style.display = 'block';
    document.getElementById('message').style.display = 'flex';
    document.querySelector('#message p').innerHTML = 'Congratulation!';
}

function reload(){
    window.location.reload();
}
