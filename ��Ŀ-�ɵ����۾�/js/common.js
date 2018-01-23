$(function(){
    //右侧验光师/微信二维码
    var Ygs = $(".ygs");
    var Winxin = $(".weixin");
    var Ygs_btn = $(".ygs_btn");
    var weixin_bin = $(".weixin_btn");
    Ygs_btn.mouseenter(function(){
        Ygs.css("display","block");
    })
    Ygs_btn.mouseleave(function(){
        Ygs.css("display","none");
    })
    Winxin_btn.mouseenter(function(){
        Winxin.css("display","block");
    })
    Winxin_btn.mouseleave(function(){
        Winxin.css("display","none");
    })

   //右侧楼梯鼠标滚轮事件
   addEventListener("scroll",function(){
       var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
       var stairs = $(".Stairs");
       if(scrollTop >= 400){
            stairs.animate({opacity:1},50);
            stairs.css("display","block");
       }
       else if(scrollTop < 400){
            stairs.animate({opacity:0},50);
            stairs.css("display","none");
       }

   })
   //右侧滚轮滑动事件
 addEventListener("scroll",function(){
       var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
       var stairs = $(".goTop");
       if(scrollTop >= 400){
            goTop.animate({opacity:1},100);
            goTop.css("display","block");
       }
       else if(scrollTop < 400){
            goTop.animate({opacity:0},100);
            goTop.css("display","none");
       }

   })

})