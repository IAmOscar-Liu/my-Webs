class cave extends Rectangle{
    constructor(x , y, width, height){
        super(x, y, width, height)
        this.isFilled = false;
    }

    static isReachingCaves(_Caves,_frog){
        let isEntering = false;
        _frog.y -= grid;
        for(let i = 0; i < _Caves.length; i++){
            if(_Caves[i].intersects(_frog) && !_Caves[i].isFilled){
                _frog.x = _Caves[i].x;
                _Caves[i].isFilled = true;
                isEntering = true;
                numOfSuccess_Frog ++;
                document.querySelectorAll('#info span')[1].innerHTML = numOfSuccess_Frog;
                break;
            }
        }
        if(isEntering){
            return true;
        }else{
            _frog.y += grid;
            return false;
        }
    }

}