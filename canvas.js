/**
 * Created by M on 2016/5/8.
 */
var i;
var context;
var width,height;
function draw(id){
    var canvas=document.getElementById(id);
    /*此时context是全局变量*/
    context=canvas.getContext('2d');//getContext('2d')  HTML5中内置对象
    width=canvas.width;
    height=canvas.height;
    setInterval(paint,10);
    i=0;
}
/*i表示每加载一次坐标的变化*/
function paint(){
    /*坐标变换的方法*/
    /*context.fillStyle="#f60";
    context.fillRect(i,0,10,10);
    i++;*/
        context.fillStyle="#3598Dc";
        context.clearRect(0,0,width,height);//给定矩形内清空一个矩形
        context.fillStyle="#3598Dc";
     for(var j=0;j<=1000;j=j+10){
         context.fillRect(i+j,20,5,5);
     }
    i++;
}