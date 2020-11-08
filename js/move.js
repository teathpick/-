function move(obj,json,fn){
  clearInterval(obj.timer);
  obj.timer=setInterval(function(){
    
    var bStop=true;
    for(var attr in json){
      //1获取当前值
      var iCur=getStyle(obj,attr);
      //2 算速度 （缓冲运动  目标值-当前值/8）
      var  iSpeed=(json[attr]-iCur)/8;   
          iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
      // 4 判断是否停止
      if(iCur!=json[attr]){
          bStop=false;  // 只要一个属性没到，定时器就不应该停
      }
        //3 赋值
      if(attr=='opacity'){
        obj.style.opacity=(iCur+iSpeed)/100;
        obj.style.filter='alpha(opacity='+(iCur+iSpeed)+')';
      }else{
        obj.style[attr]=iCur+iSpeed+'px'; 
      }
    }
    if(bStop){ // 所有值都到目标了
      clearInterval(obj.timer);
      if(fn){
        fn();
      }
    }
   },10);
}
function getStyle(obj,attr)
{
   if(obj.currentStyle) //ie	
   {
   	 var value=obj.currentStyle[attr];
   }else{
   	 var  value=getComputedStyle(obj,false)[attr];
   }
   if(attr=='opacity')
   {
   	  return  parseInt(parseFloat(value)*100);
   }else{
   	 return  parseInt(value);
   }
}

/*
1:获取当前值
2：算速度  (目标值-当前值)/8 （取整）
3: 赋值（透明度处理）
4：判断停止
5：多值运动  for in 
6：必须所有属性到达目标才clearInterval
*/