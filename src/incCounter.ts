
export default
class IntCounter{
    private countedValue = 0;
    public get value(){
        return this.countedValue;
    }

    public constructor(){}

    public addCount(){
        this.countedValue++;
    }
    
    public reset(){
        this.countedValue = 0;
    }
}