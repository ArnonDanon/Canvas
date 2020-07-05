(function (){
    var canvas= document.querySelector("canvas");
    var contex2d=canvas.getContext('2d');

    class Circle {

        constructor(x, y, radius,color,xDirection,yDirection) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color=color;
            this.xDirection=xDirection;
            this.yDirection=yDirection;
        }

        draw (){
            contex2d.beginPath();
            contex2d.arc(
                this.x,
                this.y,
                this.radius,
                0,
                2*Math.PI);
            contex2d.fillStyle = this.color;
            contex2d.fill(); 
            contex2d.closePath();
            if(this.x - this.radius < 0 || this.x+this.radius>canvas.width)
            {
                this.xDirection*=-1;
            }
            if(this.y - this.radius < 0 || this.y+this.radius>canvas.height)
            {
                this.yDirection*=-1;
            }
            this.y+=1*this.yDirection;
            this.x+=1*this.xDirection;
        }
    }
    
    function randomInt(min, max) {
        min = Math.floor(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

    function resizeCanvas(){
        canvas.height=window.innerHeight;
        canvas.width=window.innerWidth;
        
        var x=canvas.width/2;
        var y=canvas.height/2;
        var radius=randomInt(5,30);
        var xDirection=randomInt(-1,1);
        if(xDirection===0) xDirection=1;
        var yDirection=randomInt(-1,1);
        if(yDirection===0)yDirection=1;

        var circle=new Circle(x,y,radius,'red',xDirection,yDirection);
        animate();
        
        function animate(){
            
            requestAnimationFrame(animate);
            clearCanvas();
            circle.draw();
            
        }
    }
    
    resizeCanvas();
    
    function clearCanvas(){
        contex2d.clearRect(0,0,canvas.width,canvas.height);
    }
    
    

    window.addEventListener("resize",resizeCanvas) ;
    console.log(canvas);
}());

