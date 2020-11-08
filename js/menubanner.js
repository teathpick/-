window.onload=function(){
    var oMenumidtopul=document.getElementById('menumidtopul')
    var aBtn=document.getElementById('menumidtopbtn').getElementsByTagName('a');
    var oUl=document.getElementById('menumidtopul');
    var aLi=oUl.getElementsByTagName('li');
    var iNow=0;
    var bClick=true;
    var size=aLi.length;
    timer='';

    
    for(var i=0; i<aBtn.length;i++){
        aBtn[i].index=i;
        aBtn[i].onclick=function(){
            iNow=this.index;  
            clearInterval(timer);   
           play(); 
        }
    }
   function play(){
     // iNow的值
     if(iNow==size){
        aLi[0].style.position='relative';
        aLi[0].style.left=size*750+'px'; 
     };
     if(iNow==-1){
        aLi[size-1].style.position='relative';
        aLi[size-1].style.left=-size*750+'px';
     }
     for(var j=0; j<aBtn.length; j++){
         aBtn[j].className='';
      }
     if(iNow==-1){
         aBtn[size-1].className='active';
     }else{
         aBtn[iNow%12].className='active';
     }
     move(oUl,{left:-iNow*750},function(){
        if(iNow==size){
          aLi[0].style.position='static';
          aLi[0].style.left='0px';
          oUl.style.left='0px';
          iNow=0;
        }
        if(iNow==-1){
         aLi[size-1].style.position='static';
         aLi[size-1].style.left=0+'px'; 
         oUl.style.left=-(size-1)*750+'px';
         iNow=size-1; 
        }
        bClick=true;
     });
   }
   
   timer=setInterval(function(){
     iNow++;
     play(); 
  },5000);
  
  oMenumidtopul.onmouseover=function(){
      clearInterval(timer);
  }
  oMenumidtopul.onmouseout=function(){
     timer=setInterval(function(){
         iNow++;
         play();
     },5000);
  }
 window.onfocus=function(){
     timer=setInterval(function(){
         iNow++;
         play();
     },5000);
 }
 window.onblur=function(){
     clearInterval(timer);
 }

}