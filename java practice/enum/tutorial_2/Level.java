
public enum Level {
    HIGH(3),
    MEDIUM(2),
    LOW(1);
    
    private int lv1Num;
    
    private Level(int num){
        this.lv1Num = num;
    }
    
    public int getLv1(){
        return this.lv1Num;
    }
    
    public void setLv1(int num){
        this.lv1Num = num;
    }
  }