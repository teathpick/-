 window.onload=function(){
         //菜单
          var oleftsidebar_level_one=getByClass('leftsidebar_level_one')
          var oleftsidebar_level_one_dl=getByClass('leftsidebar_level_one-dl')
          for(var i=0;i<oleftsidebar_level_one.length;i++){
              if(i=0){
                 oleftsidebar_level_one[0].onmouseover=function(){
                     oleftsidebar_level_one_dl[0].style.borderBottom='none';
                }
             }
            else{
                  oleftsidebar_level_one[i].onmouseover=function(){
                      oleftsidebar_level_one_dl[i-1].style.borderBottom='none';
                 }
              }

         }

}