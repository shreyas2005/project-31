class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
            
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        this.pointB=pointB;

    }
    attach(enteredbody){
        this.chain.bodyA=enteredbody;

    }
    fly(){
        this.chain.bodyA=null;
    }
    display(){
        if(  this.chain.bodyA!=null){
        var pos=this.chain.bodyA.position;
        var pos2=this.chain.pointB;
        line(pos.x,pos.y,pos2.x,pos2.y);
    }
}
}