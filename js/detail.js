/**
 * Created by ying on 2017/1/10.
 */
//功能点1：异步请求页头与页尾
$('#header').load('data/header.php');
$('#footer').load('data/footer_de.php');

//二维码展示、隐藏效果
$(function(){
    $('.scan_goods').mouseenter(function(){
        $('.qcode-masks').slideDown();
    });
    $('.scan_goods').mouseleave(function(){
        $('.qcode-masks').slideUp();
    });
});

//商品详情页 数量增加或减少

$('.n_left').click(function(){
    //判断按钮是否可用
    if($(this).attr('class').indexOf("nopoint")>0)
    {
        return false;
    }
    var num=$('.num_1').val();
    num--;
    $('.n_right').removeClass("nopoint");
    if(num<2){
        $(this).addClass("nopoint");
        num=1;

    }
    $('.num_1').val(num);
});

$('.n_right').click(function(){
    if($(this).attr("class").indexOf("nopoint")>0){
        return false;
    }
    var num=$('.num_1').val();
    num++;
    $('.n_left').removeClass("nopoint");
    if(num>9){
        num=10;
        $(this).addClass("nopoint");
    }
    $('.num_1').val(num);
})


/*升级换购按钮切换*/
$('.adc_check').click(function(){
    if($(this).attr('class').indexOf('hg_checked') > 0){
        $(this).removeClass('hg_checked');
        $(this).addClass('no_check');
    } else {
        $(this).addClass('hg_checked');
        $(this).removeClass('no_check');
    }
});

/*材料点评按钮切换*/
$("ul.Select_view li").click(function () {
    var _index = $(this).index();
    $("ul.Select_view li,ul.view_list > li").removeClass("cur");
    $(this).addClass("cur");
    $("ul.view_list > li").eq(_index).addClass("cur");
});

$(document).data('Car',[]);

$("#add_cart").click(function(e){
    //var _name = $('.pro_name span').html()
    //var _price = +$('#price').html();
    //var buy_num = +$('#buy_number').val();

    var num = +getCookie("cartNum") || 0;
    var _num = +$('.num_1').val();
    $('#cartNum').html(num + _num);
    setCookie("cartNum",num + _num);
    alert("已经成功添加到购物车");
})

//立即购买
$('#buy_now').click(function(){
    window.location="./shopcart.html";



})









































