
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
        +'<b><%name%></b>'
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
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">￥<%price%></td>'
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">'
        +'<div class="cake_num">'
        +'<dl>'
        +'<dd class="n_left">-</dd>'
        +'<dt>'
        +'<input type="text" value="1">'
        +'</dt>'
        +'<dd class="n_right">+</dd>'
        +'</dl>'
        +'</div>'
        +'</td>'
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">'
        +'￥268'
        +'</td>'
        +'<td width="10%" style="border-bottom:1px solid #d9e8ec;">'
        +'<a href="#">删除</a>'
        +'</td>'
        +'</tr>';

    var arr = ["name","num","price"];
    var carItem = _carItem;
    //var car = $(document).data('Car');
    var car = [{name:'Cici',num:2,price:268}];
    var total = 0;
    var item = "";
    for(var i =0; i < car.length;i++){
        var _car = car[i];
        total += _car['num'] * _car['price'];
        for(var j =0; j < arr.length;j++){
            var _replace = arr[j];
            _carItem = _carItem.replace("<%"+_replace+"%>",_car[_replace]);
        }
        $(_carItem).insertBefore(".buy_car_list table tbody tr");
        _carItem = carItem;
    }

    //$(_carItem).insertBefore(".buy_car_list table tbody tr");

    $('#total_money').html('￥' + total);
});




//继续购买
$('.login_btn').click(function(){
    window.location="index.html";
});




































