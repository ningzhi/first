/**
 * Created by M on 2016/5/7.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="#f1f2f3";
    /*绘制背景*/
    context.fillRect(0,0,400,400);
    /*绘制圆形*/
    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle="rgba(255,0,0,0.25)";
        context.fill();
        context.strokeStyle="red" +
        "";
        context.stroke();
    }

}