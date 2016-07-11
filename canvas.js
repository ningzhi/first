/**
 * Created by M on 2016/5/7.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext("2d");
    context.fillStyle="green";
    context.strokeStyle="#fff";
    context.lineWidth=5;
    context.fillRect(0,0,400,300);
    context.strokeRect(10,10,180,120);
    context.strokeRect(50,50,180,120);
//    /*绘制一个矩形与它重合*/
    context.strokeRect(100,100,180,120);
}