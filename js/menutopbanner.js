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
 oMenuimg[0].onmouseover=function(){
     oBookname[0].style.color='#ec7814';
     oBookname[0].style.textDecoration='underline';
 }
 oMenuimg[1].onmouseover=function(){
     oBookname[1].style.color='#ec7814';
     oBookname[1].style.textDecoration='underline';
 }
 oMenuimg[2].onmouseover=function(){
     oBookname[2].style.color='#ec7814';
     oBookname[2].style.textDecoration='underline';
 }
 oMenuimg[3].onmouseover=function(){
     oBookname[3].style.color='#ec7814';
     oBookname[3].style.textDecoration='underline';
 }
 oMenuimg[4].onmouseover=function(){
     oBookname[4].style.color='#ec7814';
     oBookname[4].style.textDecoration='underline';
 }
 oMenuimg[5].onmouseover=function(){
     oBookname[5].style.color='#ec7814';
     oBookname[5].style.textDecoration='underline';
 }
 oMenuimg[6].onmouseover=function(){
     oBookname[6].style.color='#ec7814';
     oBookname[6].style.textDecoration='underline';
 }
 oMenuimg[7].onmouseover=function(){
     oBookname[7].style.color='#ec7814';
     oBookname[7].style.textDecoration='underline';
 }


 oMenuimg[0].onmouseout=function(){
     oBookname[0].style.color='';
     oBookname[0].style.textDecoration='none';
 }
 oMenuimg[1].onmouseout=function(){
     oBookname[1].style.color='';
     oBookname[1].style.textDecoration='none';
 }
 oMenuimg[2].onmouseout=function(){
     oBookname[2].style.color='';
     oBookname[2].style.textDecoration='none';
 }
 oMenuimg[3].onmouseout=function(){
     oBookname[3].style.color='';
     oBookname[3].style.textDecoration='none';
 }
 oMenuimg[4].onmouseout=function(){
     oBookname[4].style.color='';
     oBookname[4].style.textDecoration='none';
 }
 oMenuimg[5].onmouseout=function(){
     oBookname[5].style.color='';
     oBookname[5].style.textDecoration='none';
 }
 oMenuimg[6].onmouseout=function(){
     oBookname[6].style.color='';
     oBookname[6].style.textDecoration='none';
 }
 oMenuimg[7].onmouseout=function(){
     oBookname[7].style.color='';
     oBookname[7].style.textDecoration='none';
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

}


//book


//  oMenuimg[0].onmouseover=function(){
//  oBookname[0].style.color='#ec7814';
//  oBookname[0].style.textDecoration='underline';
//  }
//  oMenuimg[1].onmouseover=function(){
//  oBookname[1].style.color='#ec7814';
//  oBookname[1].style.textDecoration='underline';
//  }
//  oMenuimg[2].onmouseover=function(){
//  oBookname[2].style.color='#ec7814';
//  oBookname[2].style.textDecoration='underline';
//  }
//  oMenuimg[3].onmouseover=function(){
//  oBookname[3].style.color='#ec7814';
//  oBookname[3].style.textDecoration='underline';
//  }
//  oMenuimg[4].onmouseover=function(){
//  oBookname[4].style.color='#ec7814';
//  oBookname[4].style.textDecoration='underline';
//  }
//  oMenuimg[5].onmouseover=function(){
//  oBookname[5].style.color='#ec7814';
//  oBookname[5].style.textDecoration='underline';
//  }
//  oMenuimg[6].onmouseover=function(){
//  oBookname[6].style.color='#ec7814';
//  oBookname[6].style.textDecoration='underline';
//  }
//  oMenuimg[7].onmouseover=function(){
//  oBookname[7].style.color='#ec7814';
//  oBookname[7].style.textDecoration='underline';
//  }
//     oMenuimg[8].onmouseover=function(){
//     oBookname[8].style.color='#ec7814';
//     oBookname[8].style.textDecoration='underline';
//     }
//     oMenuimg[9].onmouseover=function(){
//     oBookname[9].style.color='#ec7814';
//     oBookname[9].style.textDecoration='underline';
//     }
//     oMenuimg[10].onmouseover=function(){
//     oBookname[10].style.color='#ec7814';
//     oBookname[10].style.textDecoration='underline';
//     }
//     oMenuimg[11].onmouseover=function(){
//     oBookname[11].style.color='#ec7814';
//     oBookname[11].style.textDecoration='underline';
//     }
//     oMenuimg[12].onmouseover=function(){
//     oBookname[12].style.color='#ec7814';
//     oBookname[12].style.textDecoration='underline';
//     }
//     oMenuimg[13].onmouseover=function(){
//     oBookname[13].style.color='#ec7814';
//     oBookname[13].style.textDecoration='underline';
//     }
//     oMenuimg[14].onmouseover=function(){
//     oBookname[14].style.color='#ec7814';
//     oBookname[14].style.textDecoration='underline';
//     }
//     oMenuimg[15].onmouseover=function(){
//     oBookname[15].style.color='#ec7814';
//     oBookname[15].style.textDecoration='underline';
//     }
//         oMenuimg[16].onmouseover=function(){
//         oBookname[16].style.color='#ec7814';
//         oBookname[16].style.textDecoration='underline';
//         }
//         oMenuimg[17].onmouseover=function(){
//         oBookname[17].style.color='#ec7814';
//         oBookname[17].style.textDecoration='underline';
//         }
//         oMenuimg[18].onmouseover=function(){
//         oBookname[18].style.color='#ec7814';
//         oBookname[18].style.textDecoration='underline';
//         }
//         oMenuimg[19].onmouseover=function(){
//         oBookname[19].style.color='#ec7814';
//         oBookname[19].style.textDecoration='underline';
//         }
//         oMenuimg[20].onmouseover=function(){
//         oBookname[20].style.color='#ec7814';
//         oBookname[20].style.textDecoration='underline';
//         }
//         oMenuimg[21].onmouseover=function(){
//         oBookname[21].style.color='#ec7814';
//         oBookname[21].style.textDecoration='underline';
//         }
//         oMenuimg[22].onmouseover=function(){
//         oBookname[22].style.color='#ec7814';
//         oBookname[22].style.textDecoration='underline';
//         }
//         oMenuimg[23].onmouseover=function(){
//         oBookname[23].style.color='#ec7814';
//         oBookname[23].style.textDecoration='underline';
//         }
//             oMenuimg[24].onmouseover=function(){
//             oBookname[24].style.color='#ec7814';
//             oBookname[24].style.textDecoration='underline';
//             }
//             oMenuimg[25].onmouseover=function(){
//             oBookname[25].style.color='#ec7814';
//             oBookname[25].style.textDecoration='underline';
//             }
//             oMenuimg[26].onmouseover=function(){
//             oBookname[26].style.color='#ec7814';
//             oBookname[26].style.textDecoration='underline';
//             }
//             oMenuimg[27].onmouseover=function(){
//             oBookname[27].style.color='#ec7814';
//             oBookname[27].style.textDecoration='underline';
//             }
//             oMenuimg[28].onmouseover=function(){
//             oBookname[28].style.color='#ec7814';
//             oBookname[28].style.textDecoration='underline';
//             }
//             oMenuimg[29].onmouseover=function(){
//             oBookname[29].style.color='#ec7814';
//             oBookname[29].style.textDecoration='underline';
//             }
//             oMenuimg[30].onmouseover=function(){
//             oBookname[30].style.color='#ec7814';
//             oBookname[30].style.textDecoration='underline';
//             }
//             oMenuimg[31].onmouseover=function(){
//             oBookname[31].style.color='#ec7814';
//             oBookname[31].style.textDecoration='underline';
//             }


//  oMenuimg[0].onmouseout=function(){
//  oBookname[0].style.color='';
//  oBookname[0].style.textDecoration='none';
//  }
//  oMenuimg[1].onmouseout=function(){
//  oBookname[1].style.color='';
//  oBookname[1].style.textDecoration='none';
//  }
//  oMenuimg[2].onmouseout=function(){
//  oBookname[2].style.color='';
//  oBookname[2].style.textDecoration='none';
//  }
//  oMenuimg[3].onmouseout=function(){
//  oBookname[3].style.color='';
//  oBookname[3].style.textDecoration='none';
//  }
//  oMenuimg[4].onmouseout=function(){
//  oBookname[4].style.color='';
//  oBookname[4].style.textDecoration='none';
//  }
//  oMenuimg[5].onmouseout=function(){
//  oBookname[5].style.color='';
//  oBookname[5].style.textDecoration='none';
//  }
//  oMenuimg[6].onmouseout=function(){
//  oBookname[6].style.color='';
//  oBookname[6].style.textDecoration='none';
//  }
//  oMenuimg[7].onmouseout=function(){
//  oBookname[7].style.color='';
//  oBookname[7].style.textDecoration='none';
//  }
//         oMenuimg[8].onmouseout=function(){
//         oBookname[8].style.color='';
//         oBookname[8].style.textDecoration='none';
//         }
//         oMenuimg[9].onmouseout=function(){
//         oBookname[9].style.color='';
//         oBookname[9].style.textDecoration='none';
//         }
//         oMenuimg[10].onmouseout=function(){
//         oBookname[10].style.color='';
//         oBookname[10].style.textDecoration='none';
//         }
//         oMenuimg[11].onmouseout=function(){
//         oBookname[11].style.color='';
//         oBookname[11].style.textDecoration='none';
//         }
//         oMenuimg[12].onmouseout=function(){
//         oBookname[12].style.color='';
//         oBookname[12].style.textDecoration='none';
//         }
//         oMenuimg[13].onmouseout=function(){
//         oBookname[13].style.color='';
//         oBookname[13].style.textDecoration='none';
//         }
//         oMenuimg[14].onmouseout=function(){
//         oBookname[14].style.color='';
//         oBookname[14].style.textDecoration='none';
//         }
//         oMenuimg[15].onmouseout=function(){
//         oBookname[15].style.color='';
//         oBookname[15].style.textDecoration='none';
//         }
//         oMenuimg[16].onmouseout=function(){
//             oBookname[16].style.color='';
//             oBookname[16].style.textDecoration='none';
//             }
//             oMenuimg[17].onmouseout=function(){
//             oBookname[17].style.color='';
//             oBookname[17].style.textDecoration='none';
//             }
//             oMenuimg[18].onmouseout=function(){
//             oBookname[18].style.color='';
//             oBookname[18].style.textDecoration='none';
//             }
//             oMenuimg[19].onmouseout=function(){
//             oBookname[19].style.color='';
//             oBookname[19].style.textDecoration='none';
//             }
//             oMenuimg[20].onmouseout=function(){
//             oBookname[20].style.color='';
//             oBookname[20].style.textDecoration='none';
//             }
//             oMenuimg[21].onmouseout=function(){
//             oBookname[21].style.color='';
//             oBookname[21].style.textDecoration='none';
//             }
//             oMenuimg[22].onmouseout=function(){
//             oBookname[22].style.color='';
//             oBookname[22].style.textDecoration='none';
//             }
//             oMenuimg[23].onmouseout=function(){
//             oBookname[23].style.color='';
//             oBookname[23].style.textDecoration='none';
//             }
//                    oMenuimg[24].onmouseout=function(){
//                    oBookname[24].style.color='';
//                    oBookname[24].style.textDecoration='none';
//                    }
//                    oMenuimg[25].onmouseout=function(){
//                    oBookname[25].style.color='';
//                    oBookname[25].style.textDecoration='none';
//                    }
//                    oMenuimg[26].onmouseout=function(){
//                    oBookname[26].style.color='';
//                    oBookname[26].style.textDecoration='none';
//                    }
//                    oMenuimg[27].onmouseout=function(){
//                    oBookname[27].style.color='';
//                    oBookname[27].style.textDecoration='none';
//                    }
//                    oMenuimg[28].onmouseout=function(){
//                    oBookname[28].style.color='';
//                    oBookname[28].style.textDecoration='none';
//                    }
//                    oMenuimg[29].onmouseout=function(){
//                    oBookname[29].style.color='';
//                    oBookname[29].style.textDecoration='none';
//                    }
//                    oMenuimg[30].onmouseout=function(){
//                    oBookname[30].style.color='';
//                    oBookname[30].style.textDecoration='none';
//                    }
//                    oMenuimg[31].onmouseout=function(){
//                    oBookname[31].style.color='';
//                    oBookname[31].style.textDecoration='none';
//                    }


//右边
//  oPic[0].onmouseover=function(){
//  oLongspan[0].style.color='#ec7814';
//  oLongspan[0].style.textDecoration='underline';
//  }
//  oPic[1].onmouseover=function(){
//  oLongspan[1].style.color='#ec7814';
//  oLongspan[1].style.textDecoration='underline';
//  }
//  oPic[2].onmouseover=function(){
//  oLongspan[2].style.color='#ec7814';
//  oLongspan[2].style.textDecoration='underline';
//  }
//  oPic[3].onmouseover=function(){
//  oLongspan[3].style.color='#ec7814';
//  oLongspan[3].style.textDecoration='underline';
//  }
//  oPic[4].onmouseover=function(){
//  oLongspan[4].style.color='#ec7814';
//  oLongspan[4].style.textDecoration='underline';
//  }
//  oPic[5].onmouseover=function(){
//  oLongspan[5].style.color='#ec7814';
//  oLongspan[5].style.textDecoration='underline';
//  }
//  oPic[6].onmouseover=function(){
//  oLongspan[6].style.color='#ec7814';
//  oLongspan[6].style.textDecoration='underline';
//  }
//  oPic[7].onmouseover=function(){
//  oLongspan[7].style.color='#ec7814';
//  oLongspan[7].style.textDecoration='underline';
//  }
//     oPic[8].onmouseover=function(){
//     oLongspan[8].style.color='#ec7814';
//     oLongspan[8].style.textDecoration='underline';
//     }
//     oPic[9].onmouseover=function(){
//     oLongspan[9].style.color='#ec7814';
//     oLongspan[9].style.textDecoration='underline';
//     }
//     oPic[10].onmouseover=function(){
//         oLongspan[10].style.color='#ec7814';
//         oLongspan[10].style.textDecoration='underline';
//         }
//         oPic[11].onmouseover=function(){
//         oLongspan[11].style.color='#ec7814';
//         oLongspan[11].style.textDecoration='underline';
//         }
//         oPic[12].onmouseover=function(){
//         oLongspan[12].style.color='#ec7814';
//         oLongspan[12].style.textDecoration='underline';
//         }
//         oPic[13].onmouseover=function(){
//         oLongspan[13].style.color='#ec7814';
//         oLongspan[13].style.textDecoration='underline';
//         }
//         oPic[14].onmouseover=function(){
//         oLongspan[14].style.color='#ec7814';
//         oLongspan[14].style.textDecoration='underline';
//         }
//         oPic[15].onmouseover=function(){
//             oLongspan[15].style.color='#ec7814';
//             oLongspan[15].style.textDecoration='underline';
//             }
//             oPic[16].onmouseover=function(){
//             oLongspan[16].style.color='#ec7814';
//             oLongspan[16].style.textDecoration='underline';
//             }
//             oPic[17].onmouseover=function(){
//             oLongspan[17].style.color='#ec7814';
//             oLongspan[17].style.textDecoration='underline';
//             }
//            oPic[18].onmouseover=function(){
//            oLongspan[18].style.color='#ec7814';
//            oLongspan[18].style.textDecoration='underline';
//            }
//            oPic[19].onmouseover=function(){
//            oLongspan[19].style.color='#ec7814';
//            oLongspan[19].style.textDecoration='underline';
//            }
//            oPic[20].onmouseover=function(){
//             oLongspan[20].style.color='#ec7814';
//             oLongspan[20].style.textDecoration='underline';
//             }
//             oPic[21].onmouseover=function(){
//             oLongspan[21].style.color='#ec7814';
//             oLongspan[21].style.textDecoration='underline';
//             }
//             oPic[22].onmouseover=function(){
//             oLongspan[22].style.color='#ec7814';
//             oLongspan[22].style.textDecoration='underline';
//             }
//             oPic[23].onmouseover=function(){
//             oLongspan[23].style.color='#ec7814';
//             oLongspan[23].style.textDecoration='underline';
//             }
//             oPic[24].onmouseover=function(){
//             oLongspan[24].style.color='#ec7814';
//             oLongspan[24].style.textDecoration='underline';
//             }
//             oPic[25].onmouseover=function(){
//             oLongspan[25].style.color='#ec7814';
//             oLongspan[25].style.textDecoration='underline';
//             }
//             oPic[26].onmouseover=function(){
//             oLongspan[26].style.color='#ec7814';
//             oLongspan[26].style.textDecoration='underline';
//             }
//             oPic[27].onmouseover=function(){
//             oLongspan[27].style.color='#ec7814';
//             oLongspan[27].style.textDecoration='underline';
//             }
//                oPic[28].onmouseover=function(){
//                oLongspan[28].style.color='#ec7814';
//                oLongspan[28].style.textDecoration='underline';
//                }
//                oPic[29].onmouseover=function(){
//                oLongspan[29].style.color='#ec7814';
//                oLongspan[29].style.textDecoration='underline';
//                }
//                oPic[30].onmouseover=function(){
//                    oLongspan[30].style.color='#ec7814';
//                    oLongspan[30].style.textDecoration='underline';
//                    }
//                    oPic[31].onmouseover=function(){
//                    oLongspan[31].style.color='#ec7814';
//                    oLongspan[31].style.textDecoration='underline';
//                    }
//                    oPic[32].onmouseover=function(){
//                    oLongspan[32].style.color='#ec7814';
//                    oLongspan[32].style.textDecoration='underline';
//                    }
//                    oPic[33].onmouseover=function(){
//                    oLongspan[33].style.color='#ec7814';
//                    oLongspan[33].style.textDecoration='underline';
//                    }
//                    oPic[34].onmouseover=function(){
//                    oLongspan[34].style.color='#ec7814';
//                    oLongspan[34].style.textDecoration='underline';
//                    }
//                    oPic[35].onmouseover=function(){
//                        oLongspan[35].style.color='#ec7814';
//                        oLongspan[35].style.textDecoration='underline';
//                        }
//                        oPic[36].onmouseover=function(){
//                        oLongspan[36].style.color='#ec7814';
//                        oLongspan[36].style.textDecoration='underline';
//                        }
//                        oPic[37].onmouseover=function(){
//                        oLongspan[37].style.color='#ec7814';
//                        oLongspan[37].style.textDecoration='underline';
//                        }
//                       oPic[38].onmouseover=function(){
//                       oLongspan[38].style.color='#ec7814';
//                       oLongspan[38].style.textDecoration='underline';
//                       }
//                       oPic[39].onmouseover=function(){
//                       oLongspan[39].style.color='#ec7814';
//                       oLongspan[39].style.textDecoration='underline';
//                       }
//                       oPic[40].onmouseover=function(){
//                         oLongspan[40].style.color='#ec7814';
//                         oLongspan[40].style.textDecoration='underline';
//                         }
//                         oPic[41].onmouseover=function(){
//                         oLongspan[41].style.color='#ec7814';
//                         oLongspan[41].style.textDecoration='underline';
//                         }
//                         oPic[42].onmouseover=function(){
//                         oLongspan[42].style.color='#ec7814';
//                         oLongspan[42].style.textDecoration='underline';
//                         }
//                         oPic[43].onmouseover=function(){
//                         oLongspan[43].style.color='#ec7814';
//                         oLongspan[43].style.textDecoration='underline';
//                         }
//                         oPic[44].onmouseover=function(){
//                         oLongspan[44].style.color='#ec7814';
//                         oLongspan[44].style.textDecoration='underline';
//                         }
//                         oPic[45].onmouseover=function(){
//                         oLongspan[45].style.color='#ec7814';
//                         oLongspan[45].style.textDecoration='underline';
//                         }
//                         oPic[46].onmouseover=function(){
//                         oLongspan[46].style.color='#ec7814';
//                         oLongspan[46].style.textDecoration='underline';
//                         }
//                         oPic[47].onmouseover=function(){
//                         oLongspan[47].style.color='#ec7814';
//                         oLongspan[47].style.textDecoration='underline';
//                         }
//                            oPic[48].onmouseover=function(){
//                            oLongspan[48].style.color='#ec7814';
//                            oLongspan[48].style.textDecoration='underline';
//                            }
//                            oPic[49].onmouseover=function(){
//                            oLongspan[49].style.color='#ec7814';
//                            oLongspan[49].style.textDecoration='underline';
//                            }




//     oPic[0].onmouseout=function(){
//         oLongspan[0].style.color='';
//         oLongspan[0].style.textDecoration='none';
//         }
//         oPic[1].onmouseout=function(){
//         oLongspan[1].style.color='';
//         oLongspan[1].style.textDecoration='none';
//         }
//         oPic[2].onmouseout=function(){
//         oLongspan[2].style.color='';
//         oLongspan[2].style.textDecoration='none';
//         }
//         oPic[3].onmouseout=function(){
//         oLongspan[3].style.color='';
//         oLongspan[3].style.textDecoration='none';
//         }
//         oPic[4].onmouseout=function(){
//         oLongspan[4].style.color='';
//         oLongspan[4].style.textDecoration='none';
//         }
//         oPic[5].onmouseout=function(){
//         oLongspan[5].style.color='';
//         oLongspan[5].style.textDecoration='none';
//         }
//         oPic[6].onmouseout=function(){
//         oLongspan[6].style.color='';
//         oLongspan[6].style.textDecoration='none';
//         }
//         oPic[7].onmouseout=function(){
//         oLongspan[7].style.color='';
//         oLongspan[7].style.textDecoration='none';
//         }
//                oPic[8].onmouseout=function(){
//                oLongspan[8].style.color='';
//                oLongspan[8].style.textDecoration='none';
//                }
//                oPic[9].onmouseout=function(){
//                oLongspan[9].style.color='';
//                oLongspan[9].style.textDecoration='none';
//                }
//                oPic[10].onmouseout=function(){
//                 oLongspan[10].style.color='';
//                 oLongspan[10].style.textDecoration='none';
//                 }
//                 oPic[11].onmouseout=function(){
//                 oLongspan[11].style.color='';
//                 oLongspan[11].style.textDecoration='none';
//                 }
//                 oPic[12].onmouseout=function(){
//                 oLongspan[12].style.color='';
//                 oLongspan[12].style.textDecoration='none';
//                 }
//                 oPic[13].onmouseout=function(){
//                 oLongspan[13].style.color='';
//                 oLongspan[13].style.textDecoration='none';
//                 }
//                 oPic[14].onmouseout=function(){
//                 oLongspan[14].style.color='';
//                 oLongspan[14].style.textDecoration='none';
//                 }
//                 oPic[15].onmouseout=function(){
//                 oLongspan[15].style.color='';
//                 oLongspan[15].style.textDecoration='none';
//                 }
//                 oPic[16].onmouseout=function(){
//                 oLongspan[16].style.color='';
//                 oLongspan[16].style.textDecoration='none';
//                 }
//                 oPic[17].onmouseout=function(){
//                 oLongspan[17].style.color='';
//                 oLongspan[17].style.textDecoration='none';
//                 }
//                        oPic[18].onmouseout=function(){
//                        oLongspan[18].style.color='';
//                        oLongspan[18].style.textDecoration='none';
//                        }
//                        oPic[19].onmouseout=function(){
//                        oLongspan[19].style.color='';
//                        oLongspan[19].style.textDecoration='none';
//                        }
//                        oPic[20].onmouseout=function(){
//                         oLongspan[20].style.color='';
//                         oLongspan[20].style.textDecoration='none';
//                         }
//                         oPic[21].onmouseout=function(){
//                         oLongspan[21].style.color='';
//                         oLongspan[21].style.textDecoration='none';
//                         }
//                         oPic[22].onmouseout=function(){
//                         oLongspan[22].style.color='';
//                         oLongspan[22].style.textDecoration='none';
//                         }
//                         oPic[23].onmouseout=function(){
//                         oLongspan[23].style.color='';
//                         oLongspan[23].style.textDecoration='none';
//                         }
//                         oPic[24].onmouseout=function(){
//                         oLongspan[24].style.color='';
//                         oLongspan[24].style.textDecoration='none';
//                         }
//                         oPic[25].onmouseout=function(){
//                         oLongspan[25].style.color='';
//                         oLongspan[25].style.textDecoration='none';
//                         }
//                         oPic[26].onmouseout=function(){
//                         oLongspan[26].style.color='';
//                         oLongspan[26].style.textDecoration='none';
//                         }
//                         oPic[27].onmouseout=function(){
//                         oLongspan[27].style.color='';
//                         oLongspan[27].style.textDecoration='none';
//                         }
//                                oPic[28].onmouseout=function(){
//                                oLongspan[28].style.color='';
//                                oLongspan[28].style.textDecoration='none';
//                                }
//                                oPic[29].onmouseout=function(){
//                                oLongspan[29].style.color='';
//                                oLongspan[29].style.textDecoration='none';
//                                }
//                                oPic[30].onmouseout=function(){
//                                 oLongspan[30].style.color='';
//                                 oLongspan[30].style.textDecoration='none';
//                                 }
//                                 oPic[31].onmouseout=function(){
//                                 oLongspan[31].style.color='';
//                                 oLongspan[31].style.textDecoration='none';
//                                 }
//                                 oPic[32].onmouseout=function(){
//                                 oLongspan[32].style.color='';
//                                 oLongspan[32].style.textDecoration='none';
//                                 }
//                                 oPic[33].onmouseout=function(){
//                                 oLongspan[33].style.color='';
//                                 oLongspan[33].style.textDecoration='none';
//                                 }
//                                 oPic[34].onmouseout=function(){
//                                 oLongspan[34].style.color='';
//                                 oLongspan[34].style.textDecoration='none';
//                                 }
//                                 oPic[35].onmouseout=function(){
//                                 oLongspan[35].style.color='';
//                                 oLongspan[35].style.textDecoration='none';
//                                 }
//                                 oPic[36].onmouseout=function(){
//                                 oLongspan[36].style.color='';
//                                 oLongspan[36].style.textDecoration='none';
//                                 }
//                                 oPic[37].onmouseout=function(){
//                                 oLongspan[37].style.color='';
//                                 oLongspan[37].style.textDecoration='none';
//                                 }
//                                        oPic[38].onmouseout=function(){
//                                        oLongspan[38].style.color='';
//                                        oLongspan[38].style.textDecoration='none';
//                                        }
//                                        oPic[39].onmouseout=function(){
//                                        oLongspan[39].style.color='';
//                                        oLongspan[39].style.textDecoration='none';
//                                        }
//                                        oPic[40].onmouseout=function(){
//                                         oLongspan[40].style.color='';
//                                         oLongspan[40].style.textDecoration='none';
//                                         }
//                                         oPic[41].onmouseout=function(){
//                                         oLongspan[41].style.color='';
//                                         oLongspan[41].style.textDecoration='none';
//                                         }
//                                         oPic[42].onmouseout=function(){
//                                         oLongspan[42].style.color='';
//                                         oLongspan[42].style.textDecoration='none';
//                                         }
//                                         oPic[43].onmouseout=function(){
//                                         oLongspan[43].style.color='';
//                                         oLongspan[43].style.textDecoration='none';
//                                         }
//                                         oPic[44].onmouseout=function(){
//                                         oLongspan[44].style.color='';
//                                         oLongspan[44].style.textDecoration='none';
//                                         }
//                                         oPic[45].onmouseout=function(){
//                                         oLongspan[45].style.color='';
//                                         oLongspan[45].style.textDecoration='none';
//                                         }
//                                         oPic[46].onmouseout=function(){
//                                         oLongspan[46].style.color='';
//                                         oLongspan[46].style.textDecoration='none';
//                                         }
//                                         oPic[47].onmouseout=function(){
//                                         oLongspan[47].style.color='';
//                                         oLongspan[47].style.textDecoration='none';
//                                         }
//                                                oPic[48].onmouseout=function(){
//                                                oLongspan[48].style.color='';
//                                                oLongspan[48].style.textDecoration='none';
//                                                }
//                                                oPic[49].onmouseout=function(){
//                                                oLongspan[49].style.color='';
//                                                oLongspan[49].style.textDecoration='none';
//                                                }
