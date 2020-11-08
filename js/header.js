
window.onload=function(){
        //第一个导航
        var oNavbox=getByClass('nav_box')
        var oNavli= getByClass('nav_box_li')
        for (var i = 0; i < oNavli.length; i++) {
            oNavli[i].onmouseover=function(){
                oNavbox[0].style.borderRight=' red solid 2px';
            }
        }
        for (var i = 0; i < oNavli.length; i++) {
            oNavli[i].onmouseout=function(){
            oNavbox[0].style.borderRight='none';
        }
            
        }
        
        //搜索
        var oTxt=document.getElementById('search_txt');
        oTxt.onfocus=function(){
        if(oTxt.value=='请输入您要搜索的关键字'){
            oTxt.value='';
        }
    }
        oTxt.onblur=function(){
        if(oTxt.value==''){
            oTxt.value='请输入您要搜索的关键字';
        }
        }

    }