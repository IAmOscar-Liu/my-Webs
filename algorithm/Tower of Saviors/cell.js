const stoneSize = 36;
const cellPadding = (resolution - stoneSize)/2;

function pickCandyType(){
    let index = 0;
    let r = random(1);
    while (r > 0) {
      r = r - candyType[index].prob;
      index++;
    }
    index--;
    return candyType[index].type;
}

class cell{
    constructor(_col , _row){
        this.right = this.left = this.top = this.bottom = undefined;
        this.y = _row * resolution;
        this.x = _col * resolution;
        this.isIntersect = false;
        this.type = pickCandyType();
        this.isCombo = false;
        this.img = undefined;
    }

    static setImg(_cell){
        let img = document.createElement("IMG");
        img.setAttribute("src", `./asset/${_cell.type}.png`);
        img.setAttribute("width",`${stoneSize}px`);
        img.setAttribute('height',`${stoneSize}px`);
        img.setAttribute('draggable',"false")
        img.setAttribute('style',`left:${_cell.x + cellPadding}px; top:${_cell.y + cellPadding}px`)   
        document.querySelector('div#sketch-holder #imgContainer > div').appendChild(img);
        _cell.img = img 
    }

    drawCell(){
        stroke(255);
        strokeWeight(2);
        if(this.isCombo || this.isIntersect){
            //fill(255);
            switch (this.type){
                case "red":fill(255,0,0); break;
                case "yellow":fill(255,255,0); break;
                case "green":fill(0,255,0); break;
                case "blue":fill(51,51,255); break;
                case "purple":fill(255,102,255); break;
                default:break;
            }    
        }else{
            noFill();
        }
        rect(this.x, this.y, resolution, resolution);
        this.img.setAttribute('style',`left:${this.x + cellPadding}px; top:${this.y + cellPadding}`)
        //noStroke();
        // switch (this.type){
        //     case "red":fill(255,0,0); break;
        //     case "yellow":fill(255,255,0); break;
        //     case "green":fill(0,255,0); break;
        //     case "blue":fill(51,51,255); break;
        //     case "purple":fill(255,102,255); break;
        //     default:break
        // }

        // if(this.isIntersect){
            //ellipse(this.x + resolution/2, this.y + resolution/2, resolution*0.75, resolution*0.75);
        // }else{
        //     ellipse(this.x + resolution/2, this.y + resolution/2, resolution/2, resolution/2);
        // }
       
    }

    checkRight(_cell,_listData){
        if(this.type == _cell.type){
            _listData.num++;
            _listData.list.push(this);
            if(this.right){
                return this.right.checkRight(_cell,_listData);
            }else{
                return _listData;
            }         
        }else{
            return _listData;
        }
    }

    checkBottom(_cell,_listData){
        if(this.type == _cell.type){
            _listData.num++;
            _listData.list.push(this);
            if(this.bottom){
                return this.bottom.checkBottom(_cell,_listData);
            }else{
                return _listData;
            }         
        }else{
            return _listData;
        }
    }

    static swapCell(Prev, current, cells){      
        let tmp = cells[Prev[0]][Prev[1]];
        cells[Prev[0]][Prev[1]] = cells[current[0]][current[1]];
        cells[current[0]][current[1]] = tmp;

        cells[Prev[0]][Prev[1]].x = Prev[0]*resolution;
        cells[Prev[0]][Prev[1]].y = Prev[1]*resolution;
        cells[current[0]][current[1]].x = current[0]*resolution;
        cells[current[0]][current[1]].y = current[1]*resolution;
    }

    static dropAnamation(_finalY, _cell, _yy){
        if(_cell.y < _finalY){
            _cell.y += _yy;
            setTimeout(() => cell.dropAnamation(_finalY, _cell, _yy), shiftDelay)
        } 
    }
}