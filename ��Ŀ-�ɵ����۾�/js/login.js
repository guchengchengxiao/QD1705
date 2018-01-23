$(function(){
    var user = $("input[name = a]");
    var password = $("input[name = b]");
    var repassword = $("input[name = c]");
    var yanzheng = $("input[name = d]");
    var blank = $(".blank");
    var Ver_Code = $("#Ver_Code");
    var p1 = $("#p1");
    var p2 = $("#p2");
    var p3 = $("#p3");
    var p4 = $("p4");
    var aBtns = $("input[type = button]");
})
//生成验证码
function fncheck(){
    var str = "";
    for(var i = 0; i < 4; i++){
        var arr = [];
        arr.push(parseInt(Math.random() * 10));
        arr.push(String.fromCharCode(parseInt() * 26) + 97);
        arr.push(String.formCharCode(parseInt() * 26) + 65);
        str += arr[parseInt(Math.random() * 3)];
    }
    Ver_Code.val(str);
}
 fnCheck();
 Ver_Code.click(fnCheck);
 Btn[0].onclick = function(){
  var reg1=/^((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})$/;
  var reg2=/^[a-z0-9_-]{6,12}$/;
  var _dealcookie = new DealCookie();
  if(reg1.test(user.val()) == true && user.val() != "" && reg2.test(password.val() == true && password.val() != "" && rePassword.val() == password.val() && yanzheng.val() == Ver_Code.val() && yanzheng.val() != "" ){
     _dealcookie.editCookie("user",user.val(),"/",7);
     _dealcookie.editCookie("pwd",password.val(),"/",7);
     alert("您已成功注册可得网，请点击确认登录！");
     window.location.href = "register.html";
  }else{
    if(user.val() == ""){
        user.css("border","1px solid #90c31f");
        blank[0].style.display = "block";
    }else{
        user.css("border","1px solid #ccc");
        blank[0].style.display = "none";
    }
    if(password.val() == ""){
        password.css("border","1px solid #90c31f");
        blank[1].style.display = "block";
    }else{
        password.css("border","1px solid #ccc");
        blank[1].style.display="none";
        }
     if(rePassword.val()=="" && password.val()==""){
        rePassword.css("border","1px solid #90c31f");
        blank[2].style.display="block";
    }else{
        rePassword.css("border","1px solid #ccc");
        blank[2].style.display="none";
    }
    if(yanzheng.val()==""){
        yanzheng.css("border","1px solid #90c31f");
        blank[3].style.display="block";
    }else{
        yanzheng.css("border","1px solid #ccc");
        blank[3].style.display="none";
    }
    if(reg1.test(user.val())==false && user.val()!=""){
        user.css("border","1px solid #90c31f");
        p1.css("display","block")
    }else{
        user.css("border","1px solid #ccc");
        p1.css("display","none")
    }
    if(reg2.test(password.val())==false && password.val()!=""){
        password.css("border","1px solid #90c31f");
        p2.css("display","block")
    }else{
        password.css("border","1px solid #ccc");
        p2.css("display","none")
    }
    if(rePassword.val()!=password.val()){
        rePassword.css("border","1px solid #90c31f");
        p3.css("display","block")
    }else{
        rePassword.css("border","1px solid #ccc");
        p3.css("display","none")
    }
    if(yanzheng.val()!=Ver_Code.val() && yanzheng.val()!=""){
        yanzheng.css("border","1px solid #90c31f");
        p4.css("display","block")
    }else{
        yanzheng.css("border","1px solid #ccc");
        p4.css("display","none")
      }
   }
}
