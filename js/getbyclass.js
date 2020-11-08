
    function getByClass(name){
        //1.把所有元素获取到
        var aEl=document.getElementsByTagName('*');
        var  arr=[];
        var re=new RegExp('\\b'+name+'\\b','g');
        for (var i = 0; i < aEl.length; i++) {
            if (re.test(aEl[i].className)) {
                arr.push(aEl[i]);
            }
            
        }
        //2.判断获取到的元素是否为name,如果是，则返回出去
        return arr;
    }