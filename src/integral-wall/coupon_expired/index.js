/*
* @
* */

//import 'touchjs'
import "zepto";
import './index.css';
import '../../common/reset.min.css'
$(document).ready(function(){
    //var name=$('.username').val(),
    // tel=$(".tel").val(),
    //shop_id=$(".shop_id").val(),
    //_gapNam= $('._gapNam'),
    // _gapTel=$('._gapTel'),
    //    ok1=false,
    //    ok2=false;
    //$('input[name="username"]').
    ////    .focus(function(){
    ////    //$(this).next().text('请输入姓名').removeClass('state1').addClass('state2');
    ////    $(this).removeClass('state5').addClass('state6')
    ////}).
    //blur(function(){
    //    if($(this).val().length >= 1 && $(this).val().search( /^\d*$/)!=1){
    //        $(this).next().text('').removeClass('state1').addClass('state4');
    //        $(this).removeClass('state6').addClass('state5')
    //        ok1=true;
    //    }else{
    //        $(this).next().text('请输入姓名').removeClass('state1').addClass('state3');
    //        $(this).removeClass('state6').addClass('state5')
    //    }
    //});
    //$('input[name="phone"]').
    ////focus(function(){
    ////    //$(this).next().text('请输入正确手机号码').removeClass('state1').addClass('state2');
    ////    $(this).removeClass('state5').addClass('state6')
    ////}).
    //blur(function(){
    //    if($(this).val().search( /^1[3|4|5|7|8][0-9]{9}$/)!=-1){
    //        $(this).next().text('').removeClass('state1').addClass('state4');
    //        //$(this).removeClass('state6').addClass('state5')
    //        ok2=true;
    //    }else{
    //        $(this).next().text('请输入正确手机号码').removeClass('state1').addClass('state3');
    //        $(this).removeClass('state6').addClass('state5')
    //        //$(this).val('13810398211')
    //        //$(this).css({'color':'red'});
    //    }
    //});
   $('#submit').on('touchstart',function(event){
       event.preventDefault()
       var name=$('.username').val(),
           tel=$(".tel").val(),
          shop_id=$(".shop_id").val(),
           _gapNam= $('._gapNam'),
           _gapTel=$('._gapTel');
       //$('#submit').animate({left:'30%'},20);
       //event.preventDefault();
       //$('.myForm').submit()
       //alert('1')
       var count = 0;
       if(name ==''){
          _gapNam.html('请填写姓名')
           count++;
           return false
       }else {
           _gapNam.html("");
   };
       //alert('2')
       if(tel === ''||!/^1[3|4|5|7|8][0-9]{9}$/.test(tel)){
           _gapTel.html('请填写正确的手机号');
           count++;
           return false
       }else if(/^1[3|4|5|7|8][0-9]{9}$/.test(tel)){
           _gapTel.html("")
       }
       //else if(!/^\d{11}$/.test(tel)){
       //    $('._gapTel').html('请填写正确手机号');
       //    //$('.tel').addClass('anotherClass')
       //    count++;
       //}else{
       //    $('.tel').css({"border":"1px solid blue"})
       //    $('._gapTel').hide();
       //}
       if(count==0){
           //alert('1')
        //$('myForm').submit()
        //   alert('3')
            $.ajax({
                url:'formhtml',
                data:{
                    name:name,
                    tel:tel,
                    shop_id:shop_id
                },
                dataType: 'json',
                type:'POST'

            //    success:function(data){
            //        if(msg===1){
            //            alert("发送成功")
            //
            //            window.location='https://huodong.nuomi.com/actshow/mobile/common/short/hujiangyingyu'
            //        }else{
            //            alert("添加失败")
            //        }
            //            // else if(data.error==='手机信号不好'){
            //        //    $('._gapTel').html('网络不正常');
            //        //}else if(data.error===''){
            //        //    $('tel').html(data.tel)
            //        //    $('.tel').addClass('anotherClass')
            //        //}
            //        //else {
            //        //    alert(data.msg || "报名失败")
            //        //}
            //    }
            })
        }

   })
})
