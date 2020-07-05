(function (){
    var canvas= document.querySelector("canvas");
    var contex2d=canvas.getContext('2d');

    class Circle {

        constructor(x, y, radius,color,direction) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color=color;
            this.direction=direction;
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
                this.direction*=-1;
            }
            this.x+=1*this.direction;
            
            console.log(this.x +' ' +this.direction);
        }
    }
    

    function resizeCanvas(){
        canvas.height=window.innerHeight;
        canvas.width=window.innerWidth;
        var x=canvas.width/2;
        var y=canvas.height/2;
        var radius=25;
            
        var circle=new Circle(x,y,radius,'red',1);
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

