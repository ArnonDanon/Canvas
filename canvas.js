(function (){
    var canvas= document.querySelector("canvas");
    var contex2d=canvas.getContext('2d');

    function resizeCanvas(){
        canvas.height=window.innerHeight;
        canvas.width=window.innerWidth;
        drawCircle();
    }

    resizeCanvas();
    
    function drawCircle(){
        contex2d.beginPath();
        contex2d.arc(
            canvas.width/2,
            canvas.height/2,
            25,
            0,
            2*Math.PI);
        contex2d.stroke();
    };
    

    window.addEventListener("resize",resizeCanvas) ;
    console.log(canvas);
}());

