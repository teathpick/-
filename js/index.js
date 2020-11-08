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

//第一个banner
var oMenumidtopul=document.getElementById('menumidtop')
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
aBtn[size-1].className='banneractive';
}else{
aBtn[iNow%12].className='banneractive';
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


//book
var oMenuimg = getByClass('menuimg')
var oBookname= getByClass('bookname')
for (var i = 0; i < oMenuimg.length; i++) {
    oMenuimg[i].index=i;
    oMenuimg[i].onmouseover=function(){
        oBookname[this.index].style.color='#ee8429';
        oBookname[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oMenuimg.length; j++) {
    oMenuimg[j].index=j;
    oMenuimg[j].onmouseout=function(){
        oBookname[this.index].style.color='';
        oBookname[this.index].style.textDecoration='none';
    }
}

//新书预售
var oNewbookpic = getByClass('newbookpic')
var oMenurightbannerlidivp= getByClass('menurightbannerlidivp')
for (var i = 0; i < oNewbookpic.length; i++) {
    oNewbookpic[i].index=i;
    oNewbookpic[i].onmouseover=function(){
        oMenurightbannerlidivp[this.index].style.color='#ee8429';
        oMenurightbannerlidivp[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oNewbookpic.length; j++) {
    oNewbookpic[j].index=j;
    oNewbookpic[j].onmouseout=function(){
        oMenurightbannerlidivp[this.index].style.color='';
        oMenurightbannerlidivp[this.index].style.textDecoration='none';
    }
}

//新书上架
var oBookbanner=document.getElementById('menumidbottom-bottom');
var aBookBtn=document.getElementById('bookbtn').getElementsByTagName('a');
var oBookUl=document.getElementById('menumidbottom-bottom-ul1');
var aBookLi=document.getElementsByName('menumidbottom-bottom-li1');
var oBookLeft_btn=document.getElementById('leftbtn');
var oBookRight_btn=document.getElementById('rightbtn');
var aiNow=0;
var bClick=true;
var asize=aBookLi.length;
timer='';
//1 按钮添加事件 
for(var i=0; i<aBookBtn.length;i++){
aBookBtn[i].index=i;
aBookBtn[i].onmousemove=function(){
aiNow=this.index;
clearInterval(timer);
aplay(); 
}
}
function aplay(){
// aiNow的值
if(aiNow==asize){
aBookLi[0].style.position='relative';
aBookLi[0].style.left=asize*800+'px'; 
};
if(aiNow==-1){
aBookLi[asize-1].style.position='relative';
aBookLi[asize-1].style.left=-asize*800+'px';
}
for(var j=0; j<aBookBtn.length; j++){
aBookBtn[j].className='';
}
if(aiNow==-1){
aBookBtn[asize-1].className='bookactive';
}else{
aBookBtn[aiNow%4].className='bookactive';
}
move(oBookUl,{left:-aiNow*800},function(){
if(aiNow==asize){
aBookLi[0].style.position='static';
aBookLi[0].style.left='0px';
oBookUl.style.left='0px';
aiNow=0;
}
if(aiNow==-1){
aBookLi[asize-1].style.position='static';
aBookLi[asize-1].style.left=0+'px'; 
oBookUl.style.left=-(asize-1)*800+'px';
aiNow=asize-1; 
}
bClick=true;
});
}

timer=setInterval(function(){
aiNow++;
aplay(); 
},10000);

oBookRight_btn.onclick=function(){
if(bClick){
bClick=false;
aiNow++;
clearInterval(timer);
aplay();
}   
}
oBookLeft_btn.onclick=function(){
if(bClick){
bClick=false;
aiNow--;
clearInterval(timer);
aplay();
}
}
oBookbanner.onmouseover=function(){
clearInterval(timer);
}
oBookbanner.onmouseout=function(){
timer=setInterval(function(){
aiNow++;
aplay();
},10000);
}
window.onfocus=function(){
timer=setInterval(function(){
aiNow++;
aplay();
},10000);
}
window.onblur=function(){
clearInterval(timer);
}

//menu右边部分广告 新书预售
var oMenurightbanner=document.getElementById('menurightbanner');
var oBookrightbtn=document.getElementById('bookrightbtn').getElementsByTagName('a');
var oMenurightbannerul=document.getElementById('menurightbannerul');
var bLi=oMenurightbannerul.getElementsByTagName('li');  
var oBookrightleftbtn=document.getElementById('bookrightleftbtn');
var oBookrightrightbtn=document.getElementById('bookrightrightbtn');
var biNow=0;
var bClick=true;
var bsiz=bLi.length;
//1 按钮添加事件 
for(var i=0; i<oBookrightbtn.length;i++){
oBookrightbtn[i].index=i;
oBookrightbtn[i].onmousemove=function(){
     clearInterval(timer);
 biNow=this.index;
bplay(); 
}
}
function bplay(){
// biNow的值
if(biNow==bsiz){
bLi[0].style.position='relative';
bLi[0].style.left=bsiz*238+'px'; 
};
if(biNow==-1){
bLi[bsiz-1].style.position='relative';
bLi[bsiz-1].style.left=-bsiz*238+'px';
}
for(var j=0; j<oBookrightbtn.length; j++){
oBookrightbtn[j].className='';
}
if(biNow==-1){
oBookrightbtn[bsiz-1].className='bookrightactive';
}else{
oBookrightbtn[biNow%5].className='bookrightactive';
}
move(oMenurightbannerul,{left:-biNow*238},function(){
if(biNow==bsiz){
bLi[0].style.position='static';
bLi[0].style.left='0px';
oMenurightbannerul.style.left='0px';
biNow=0;
}
if(biNow==-1){
bLi[bsiz-1].style.position='static';
bLi[bsiz-1].style.left=0+'px'; 
oMenurightbannerul.style.left=-(bsiz-1)*238+'px';
biNow=bsiz-1; 
}
bClick=true;
});
}
var timer=setInterval(function(){
biNow++;
bplay(); 
},3000);

oBookrightrightbtn.onclick=function(){
if(bClick){
clearInterval(timer);
bClick=false;
biNow++;
bplay();
}   
}
oBookrightleftbtn.onclick=function(){
if(bClick){
clearInterval(timer);
bClick=false;
biNow--;
bplay();
}
}
oMenurightbanner.onmouseover=function(){
clearInterval(timer);
}
oMenurightbanner.onmouseout=function(){
timer=setInterval(function(){
biNow++;
bplay();
},3000);
}
window.onfocus=function(){
timer=setInterval(function(){
biNow++;
bplay();
},3000);
}
window.onblur=function(){
clearInterval(timer);
}

//新书热卖榜 head
var oHeadli = getByClass('headli')
for(var i=0;i<oHeadli.length;i++){
oHeadli[i].onmousemove=function(){
for(var j=0; j<oHeadli.length;j++){
oHeadli[j].className='headli';
}
this.className='headliactive';
}
}




//book
var oPic = getByClass('pic')
var oLongspan= getByClass('longspana')
for (var i = 0; i < oPic.length; i++) {
    oPic[i].index=i;
    oPic[i].onmouseover=function(){
        oLongspan[this.index].style.color='#ee8429';
        oLongspan[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oPic.length; j++) {
    oPic[j].index=j;
    oPic[j].onmouseout=function(){
        oLongspan[this.index].style.color='';
        oLongspan[this.index].style.textDecoration='none';
    }
}


                           // 1获取元素

            var  aA=document.getElementById('head').getElementsByTagName('a');
            var  aUl=document.getElementById('menurightbottom-mid').getElementsByTagName('ul');
            //2 给一组按钮添加事件  for
            for(var i=0; i<aA.length;i++){
                aA[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
                aA[i].onmouseover=function(){
                   // 先将所有元素的class清除
                   for(var j=0; j<aUl.length;j++){
                       aUl[j].className='list';
                   }
                   //i???
                   aUl[this.index].className='ulactive';
                }
                
            }



var  oLi=document.getElementById('list1').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<oLi.length;i++){
    oLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    oLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<oLi.length;j++){
           oLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}

var  cLi=document.getElementById('list2').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<cLi.length;i++){
    cLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    cLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<cLi.length;j++){
           cLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}

var  dLi=document.getElementById('list3').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<dLi.length;i++){
    dLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    dLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<dLi.length;j++){
           dLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}

var  eLi=document.getElementById('list4').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<eLi.length;i++){
    eLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    eLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<eLi.length;j++){
           eLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}

var  fLi=document.getElementById('list5').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<fLi.length;i++){
    fLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    fLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<fLi.length;j++){
           fLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}

var  gLi=document.getElementById('list6').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<gLi.length;i++){
    gLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    gLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<gLi.length;j++){
           gLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}
var  hLi=document.getElementById('list7').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<hLi.length;i++){
    hLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    hLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<hLi.length;j++){
           hLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}
var  iLi=document.getElementById('list8').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<iLi.length;i++){
    iLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    iLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<iLi.length;j++){
           iLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}
var  jLi=document.getElementById('list9').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<jLi.length;i++){
    jLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    jLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<jLi.length;j++){
           jLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}
var  kLi=document.getElementById('list10').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<kLi.length;i++){
    kLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    kLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<kLi.length;j++){
           kLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}



// 独家特供head
var oDiv1=document.getElementById('part1_left-header')
var oPart1_left_headerli = oDiv1.getElementsByTagName('li')
for(var i=0;i<oPart1_left_headerli.length;i++){
oPart1_left_headerli[i].onmousemove=function(){
for(var j=0; j<oPart1_left_headerli.length;j++){
oPart1_left_headerli[j].className='part1_left-headerli';
}
this.className='opart1_left_headerliactive';
}
}

//独家提供触摸内容

var  bA=document.getElementById('part1_left-header').getElementsByTagName('a');
var  bUl=getByClass('part1_left-bottom');
//2 给一组按钮添加事件  for
for(var i=0; i<bA.length;i++){
    bA[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    bA[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<bUl.length;j++){
           bUl[j].style.display='none';
       }
       //i???
       bUl[this.index].style.display='block';
    }
    
}

//摸图片字hover
var oPart1_pic=getByClass('part1_pic')
var oBooklog=getByClass('namea')
for (var i = 0; i < oPart1_pic.length; i++) {
    oPart1_pic[i].index=i;
    oPart1_pic[i].onmouseover=function(){
        oBooklog[this.index].style.color='#ee8429';
        oBooklog[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oPart1_pic.length; j++) {
    oPart1_pic[j].index=j;
    oPart1_pic[j].onmouseout=function(){
        oBooklog[this.index].style.color='';
        oBooklog[this.index].style.textDecoration='none';
    }
}


// 独家特供head
var oDiv2=document.getElementById('part1_left-header2')
var oPart1_left_headerli2 = oDiv2.getElementsByTagName('li')
for(var i=0;i<oPart1_left_headerli2.length;i++){
oPart1_left_headerli2[i].onmousemove=function(){
for(var j=0; j<oPart1_left_headerli2.length;j++){
oPart1_left_headerli2[j].className='part1_left-headerli';
}
this.className='opart1_left_headerliactive';
}
}

//独家提供触摸内容

var  cA=document.getElementById('part1_left-header2').getElementsByTagName('a');
var  cUl=getByClass('part1_left-bottom2');
//2 给一组按钮添加事件  for
for(var i=0; i<cA.length;i++){
    cA[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    cA[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<cUl.length;j++){
           cUl[j].style.display='none';
       }
       //i???
       cUl[this.index].style.display='block';
    }
    
}

var  lLi=document.getElementById('list11').getElementsByTagName('li');
//2 给一组按钮添加事件  for
for(var i=0; i<lLi.length;i++){
    lLi[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    lLi[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<lLi.length;j++){
           lLi[j].className='';
       }
       // 给当前鼠标经过的按钮加active
       this.className='active'
       //i???
       
    }
}
//part2 下面头
var oDiv3=document.getElementById('part2_head')
var oPart2_headli = oDiv3.getElementsByTagName('li')
for(var i=0;i<oPart2_headli.length;i++){
oPart2_headli[i].onmousemove=function(){
for(var j=0; j<oPart2_headli.length;j++){
oPart2_headli[j].className='part2_headli';
}
this.className='part2_headliactive';
}
}

//摸图片字hover
var oAuthorpic=getByClass('authorpic')
var oNameb=getByClass('nameb')
for (var i = 0; i < oAuthorpic.length; i++) {
    oAuthorpic[i].index=i;
    oAuthorpic[i].onmouseover=function(){
        oNameb[this.index].style.color='#ee8429';
        oNameb[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oAuthorpic.length; j++) {
    oAuthorpic[j].index=j;
    oAuthorpic[j].onmouseout=function(){
        oNameb[this.index].style.color='';
        oNameb[this.index].style.textDecoration='none';
    }
}

//摸图片字hover
var oShowpic=getByClass('showpic')
var oShowbooknamea=getByClass('showbooknamea')
for (var i = 0; i < oShowpic.length; i++) {
    oShowpic[i].index=i;
    oShowpic[i].onmouseover=function(){
        oShowbooknamea[this.index].style.color='#ee8429';
        oShowbooknamea[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oShowpic.length; j++) {
    oShowpic[j].index=j;
    oShowpic[j].onmouseout=function(){
        oShowbooknamea[this.index].style.color='';
        oShowbooknamea[this.index].style.textDecoration='none';
    }
}

//热门作者 名人堂 新人作家 鼠标悬停换div
var  dA=document.getElementById('part2_head').getElementsByTagName('span');
var  dUl=getByClass('part2_bottom-leftbottom');
//2 给一组按钮添加事件  for
for(var i=0; i<dA.length;i++){
    dA[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    dA[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<dUl.length;j++){
           dUl[j].style.display='none';
       }
       //i???
       dUl[this.index].style.display='block';
    }
    
}

//摸图片字hover
var oChangepic=getByClass('changepic')
var oChangea=getByClass('changea')
for (var i = 0; i < oChangepic.length; i++) {
    oChangepic[i].index=i;
    oChangepic[i].onmouseover=function(){
        oChangea[this.index].style.color='#ee8429';
        oChangea[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oChangepic.length; j++) {
    oChangepic[j].index=j;
    oChangepic[j].onmouseout=function(){
        oChangea[this.index].style.color='';
        oChangea[this.index].style.textDecoration='none';
    }
}



//part3 下面头
var oDiv4=document.getElementById('part3_bottom-lefthead')
var oPart3_headli = oDiv4.getElementsByTagName('li')
for(var i=0;i<oPart3_headli.length;i++){
oPart3_headli[i].onmousemove=function(){
for(var j=0; j<oPart3_headli.length;j++){
oPart3_headli[j].className='part3_bottom-leftheadli';
}
this.className='part3_bottom-leftheadliactive';
}
}


//摸图片字hover
var oBigotherpic=getByClass('bigotherpic')
var oOtherbookname=getByClass('otherbookname')
for (var i = 0; i < oBigotherpic.length; i++) {
    oBigotherpic[i].index=i;
    oBigotherpic[i].onmouseover=function(){
        oOtherbookname[this.index].style.color='#ee8429';
        oOtherbookname[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oBigotherpic.length; j++) {
    oBigotherpic[j].index=j;
    oBigotherpic[j].onmouseout=function(){
        oOtherbookname[this.index].style.color='';
        oOtherbookname[this.index].style.textDecoration='none';
    }
}


//读者推荐 鼠标悬停换div
var  eA=document.getElementById('part3_bottom-lefthead').getElementsByTagName('li');
var  eUl=getByClass('part3_bottom-twoleft');
//2 给一组按钮添加事件  for
for(var i=0; i<eA.length;i++){
    eA[i].index=i;// aA[0].index=0; aA[1].index=1  aA[2].index=2
    eA[i].onmouseover=function(){
       // 先将所有元素的class清除
       for(var j=0; j<eUl.length;j++){
           eUl[j].style.display='none';
       }
       //i???
       eUl[this.index].style.display='block';
    }
    
}

//part3 banner
var oPart3_banner=document.getElementById('part3_banner');
var oPart3_btn=document.getElementById('part3_btn').getElementsByTagName('a');
var oPart3_bannerul=document.getElementById('part3_bannerul');
var mLi=oPart3_bannerul.getElementsByTagName('li');  
var oPart3_leftleftbtn=document.getElementById('part3_leftleftbtn');
var oPart3_leftrightbtn=document.getElementById('part3_leftrightbtn');
var cinow=0;
var bClick=true;
var csize=4;
//1 按钮添加事件 
for(var i=0; i<oPart3_btn.length;i++){
oPart3_btn[i].index=i;
oPart3_btn[i].onmousemove=function(){
     clearInterval(timer);
 cinow=this.index;
cPlay(); 
}
}
function cPlay(){
// cinow的值
if(cinow==csize){
mLi[0].style.position='relative';
mLi[0].style.left=csize*985+'px'; 
};
if(cinow==-1){
mLi[csize-1].style.position='relative';
mLi[csize-1].style.left=-csize*985+'px';
}
for(var j=0; j<oPart3_btn.length; j++){
oPart3_btn[j].className='';
}
if(cinow==-1){
oPart3_btn[csize-1].className='part3_active';
}else{
oPart3_btn[cinow%4].className='part3_active';
}
move(oPart3_bannerul,{left:-cinow*985},function(){
if(cinow==csize){
mLi[0].style.position='static';
mLi[0].style.left='0px';
oPart3_bannerul.style.left='0px';
cinow=0;
}
if(cinow==-1){
mLi[csize-1].style.position='static';
mLi[csize-1].style.left=0+'px'; 
oPart3_bannerul.style.left=-(csize-1)*985+'px';
cinow=csize-1; 
}
bClick=true;
});
}
var timer=setInterval(function(){
cinow++;
cPlay(); 
},3000);

oPart3_leftrightbtn.onclick=function(){
if(bClick){
clearInterval(timer);
bClick=false;
cinow++;
cPlay();
}   
}
oPart3_leftleftbtn.onclick=function(){
if(bClick){
clearInterval(timer);
bClick=false;
cinow--;
cPlay();
}
}
oPart3_banner.onmouseover=function(){
clearInterval(timer);
}
oPart3_banner.onmouseout=function(){
timer=setInterval(function(){
cinow++;
cPlay();
},3000);
}
window.onfocus=function(){
timer=setInterval(function(){
cinow++;
cPlay();
},3000);
}
window.onblur=function(){
clearInterval(timer);
}


//摸图片字hover
var oVipimg=getByClass('vipimg')
var oVipbookname=getByClass('vipbookname')
for (var i = 0; i < oVipimg.length; i++) {
    oVipimg[i].index=i;
    oVipimg[i].onmouseover=function(){
        oVipbookname[this.index].style.color='#ee8429';
        oVipbookname[this.index].style.textDecoration='underline';
    }
}
for (var j = 0; j < oVipimg.length; j++) {
    oVipimg[j].index=j;
    oVipimg[j].onmouseout=function(){
        oVipbookname[this.index].style.color='';
        oVipbookname[this.index].style.textDecoration='none';
    }
}

var oRight3 = getByClass('right3')
var oRight2 = getByClass('right2')
var oRight4 = getByClass('right4')
var oRight5 = getByClass('right5')
var oRight6 = getByClass('right6')
var oRight7 = getByClass('right7')
var oRight8 = getByClass('right8')
oRight3[0].onmouseover=function(){
oRight2[0].style.display='block';
oRight3[0].style.display='none';
oRight4[0].style.display='block';
}
oRight2[0].onmouseout=function(){
oRight3[0].style.display='block';
oRight2[0].style.display='none';
oRight4[0].style.display='none';
}
oRight5[0].onmouseover=function(){
oRight6[0].style.display='block';
oRight5[0].style.display='none';
}
oRight6[0].onmouseout=function(){
oRight5[0].style.display='block';
oRight6[0].style.display='none';
}


//返回顶部
    var oBtn=document.getElementById('top_btn');
    var timer='';
    var beSys=false; 
    oBtn.style.display='none'
    window.onscroll=function(){
    // 判断：是定时器触发的还是人为触发
    oBtn.style.display='block';
          if(beSys==false) 
          {
            clearInterval(timer);
          }
          beSys=false;
    }
      //onscroll 只要滚动条改变都会触发
    oBtn.onclick=function(){ 
        clearInterval(timer);
        timer=setInterval(function(){
            beSys=true;
            // 1：获取当前值
            var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            // 2：算速度
                var iSpeed=-oScrollTop/60;
                iSpeed=Math.floor(iSpeed);//向下取整 
            //3: 判断
            if(oScrollTop==0){
                oBtn.style.display='none';
                clearInterval(timer);	
            }else{
                document.documentElement.scrollTop=document.body.scrollTop=oScrollTop+iSpeed;  	
            }
                
            },1);
            
        }
    }
