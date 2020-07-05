(function (){
    var canvas= document.querySelector("canvas");
    var contex2d=canvas.getContext('2d');

    var randomCircles=[];

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
            contex2d.fillStyle = 'rgba('+this.color.r+','+this.color.g+','+this.color.b+','+this.color.a+')';
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
            this.y=this.y+(1*this.yDirection);
            this.x=this.x+(1*this.xDirection);
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
    
        randomCircles=[];
        GenerateRandomCircles(100);
        
        animate();
        
        function animate(){
            
            requestAnimationFrame(animate);
            clearCanvas();
            randomCircles.forEach(circle => {
                circle.draw();    
            });
        }
    }
    
    resizeCanvas();
    
    function GenerateRandomCircles(numberofCircles){
        for(var i=0;i<numberofCircles;i++){
            var circle= CreateRandomCircle();
            randomCircles.push(circle);
        }
    }
    function CreateRandomCircle() {
        var radius=randomInt(5,15);
        var x=randomInt(radius,canvas.width-radius);
        var y=randomInt(radius,canvas.height-radius);
        
        var xDirection=randomInt(-1,1);
        if(xDirection===0) xDirection=1;
        var yDirection=randomInt(-1,1);
        if(yDirection===0) yDirection=1;

        var color ={r:randomInt(0,255),g:randomInt(0,255),b:randomInt(0,255),a:Math.random()};
        var circle=new Circle(x,y,radius,color,xDirection,yDirection);
        return circle;
    }

    function clearCanvas(){
        contex2d.clearRect(0,0,canvas.width,canvas.height);
    }
    
    

    window.addEventListener("resize",resizeCanvas) ;
    
}());

