//商品弹框功能
$(document).on("mouseover",".pic_grid li",function(){
    //stop()是阻止在连续动画或事件中出现重复累积状况的方法。
    /*
     http://www.cnblogs.com/my_front_research/p/3180666.html?utm_source=tuicool&utm_medium=referral
     那么什么是 动画队列 呢？
     所谓的 动画队列 就是一系列要执行的动画，比如对一个盒子先在前一秒执行挪动动画，再过一秒执行变大的动画。
     那么，这就是两个动画了。
     再比如，点击某个按钮 a ，给盒子 b 触发动画效果，每次挪动 10px ，挪动 10px 需要的时间是 2s ，
     那么以很快的速度狂点这个 a 按钮，你在 2s 时间里点了 10 次，这个动画需要累积 10 次的。
     虽然我们 2s 里只能完成 1个 动画效果，但是剩下的 9个 动画还是要完成的，这就 形成了动画累积
     ，跟排队似的，若不做任何处理，将会逐个按照 先来先动画 的规则完成。
     但现实中，这种动画累积并非是我们期望的结果。所以，我们需要对动画进行更多的操作。
     从stop的参数来看，对于动画的操作，分为 当前动画 和 等候动画队列 ，传入的参数为boolean值类型。
     clearQueue，是否清除等候动画队列，默认false，即是不清除等候动画队列，设置为true，则清空等候动画队列。
     jumpToEnd，是否立即完成当前动画，默认false，即是停止当前动画，设置为true，则立即完成当前动画。
     */
    $(this).find("div.mask").stop().animate({"bottom":"3px"},100);
}).on("mouseout",".pic_grid li",function(){
    $(this).find("div.mask").stop().animate({"bottom":"-55px"},100);
});


//表框
$(document).on("click",".chooseList li b",function(){
    $(this).next().css("display","block");
    $(this).parent().siblings().children().eq(1).css("display","none");
})



//会员中心-login page
//功能点1：异步请求页头与页尾
$('#header').load('data/header.php');
$('#footer').load('data/footer.php');

//功能点2：异步验证用户信息

$("#loginName").focus(function(){
    $(this).siblings().first().css('display','none');
    $('#loginName_error').css('display','none');
})

$("#loginPwd").focus(function(){
    $(this).siblings().first().css('display','none');
    $('#loginPwd_error').css('display','none');
})

$("#loginName").blur(function(){

    var loginName = $(this).val();

    if(E.empty(loginName)){
        $("#loginName_error").html('用户名不能为空');
        $('#loginName_error').css('display','');
        $(this).siblings().first().css('display','');
        return false;
    }else{
        $("loginName_error").html('');
    }

    $.ajax({
        type:'post',
        url:'../data/login.php',
        data:{
            loginName: loginName
        },
        success:function(e){
            console.log(e);
        }
    })

})


$("#loginPwd").blur(function(){

    var loginPwd = $(this).val();

    if(E.empty(loginPwd)){
        $("#loginPwd_error").html('密码不能为空');
        $('#loginPwd_error').css('display','');
        $(this).siblings().first().css('display','');
        return false;
    }else{
        $("loginPwd_error").html('');
    }
})

$('.login_btn').click(function(){
    $.ajax({
        type:'post',
        url:'./data/login.php',
        data:{
            loginName: $('#loginName').val(),
            loginPwd:$('#loginPwd').val()
        },
        success:function(e){
            if(e.code == 1){
                alert('登录成功');
            } else if(e.code == 2){
                alert(e.msg);
            }
        }
    })
})

//会员中心-register page





