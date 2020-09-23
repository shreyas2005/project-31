class bx {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity=255;
    }
   
    display(){
      var pos =this.body.position;
      push();
      if(this.body.speed<3){
      rectMode(CENTER);
      this.Visiblity-=5;
      fill(0, 252, 252);
      tint(255,this.Visiblity);
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
      }
      
      pop();
    }
    score(){
      if(this.Visiblity<0&&this.Visiblity>-1000 ){
        score+=1;
      }
    }
  };