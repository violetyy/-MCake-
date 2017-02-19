
$(function(){
    var _carItem = '<tr>'
        +'<td style="padding-left:20px;border-bottom:1px solid #d9e8ec;" class="cartCheck">'
        +'<span>'
        +'<i></i>'
        +'<em></em>'
        +'<input type="checkbox" hidden="hidden">'
        +'</span>'
        +'</td>'
        +'<td class="pro_left" style="border-bottom:1px solid #d9e8ec;">'
        +'<div class="buy_pro_img">'
        +'<a href="detail.html" target="_blank">'
        +'<img src="images/l1.jpg" width="114" height="114" alt="Cici">'
        +'</a>'
        +'</div>'
        +'<div class="alert">'
        +'<a href="detail.html" target="_blank" class="Grey">'
        +'<b>Cici</b>'
        +'</a>'
        +'Cici'
        +'<br>'
        +'<br>'
        +'赠品：标配餐具(餐勺七把)1套'
        +'</div>'
        +'</td>'
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">'
        + '<div class="cake_num"><%num%>盒</div>'
        +'</td>'
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">￥268</td>'
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">'
        +'<div class="cake_num">'
        +'<dl>'
        +'<dd class="n_left"></dd>'
        +'<dt>'
        +'<input type="text" value="1">'
        +'</dt>'
        +'<dd class="n_right"></dd>'
        +'</dl>'
        +'</div>'
        +'</td>'
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">'
        +'￥<span id="totalprice">268</span>'
        +'</td>'
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">'
        +'<a href="#">删除</a>'
        +'</td>'
        +'</tr>';

    var arr = ["name","num","price"];
    var carItem = _carItem;
    var _num = +getCookie('cartNum') || 0;
    //var car = [{name:'Cici',num:2,price:268}];
    var total = 0;
    var item = "";

    if(_num > 0){
        total = _num * 268;
        _carItem = _carItem.replace("<%num%>",_num);
        $(_carItem).insertBefore(".buy_car_list table tbody tr");
        update(_num);
    }
    //for(var i =0; i < car.length;i++){
    //    var _car = car[i];
    //    total += _car['num'] * _car['price'];
    //    for(var j =0; j < arr.length;j++){
    //        var _replace = arr[j];
    //        _carItem = _carItem.replace("<%"+_replace+"%>",_car[_replace]);
    //    }
    //    $(_carItem).insertBefore(".buy_car_list table tbody tr");
    //    _carItem = carItem;
    //}

    //$(_carItem).insertBefore(".buy_car_list table tbody tr");

    $('#total_money').html('￥' + total);

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
    });

    function update(num){
        updateNum(num);
        updatePrice(num)
    }

    function updateNum(num){
        $('#cartNum').html(num);
        $('#total_amount').html(num);
        $('.cake_num input').val(num);
    }

    function updatePrice(num){
        $('#totalprice').html(num * 268);
        $('#total_money').html('￥' + num*268);
    }
});




//继续购买
$('.login_btn').click(function(){
    window.location="index.html";
});




































