(function (){
    var canvas= document.querySelector("canvas");
    resizeCanvas(); 

    function resizeCanvas(){
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    }

    window.addEventListener("resize",resizeCanvas) ;
    console.log(canvas);
}());

