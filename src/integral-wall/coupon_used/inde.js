/*
* @
* */
//function getCookie(name)
//{
//    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
//    if(arr=document.cookie.match(reg))
//        return unescape(arr[2]);
//    else
//        return null;
//}
//console.log(getCookie("name"))
$(document).ready(function(){
   $('#submit').click(function(event){
       event.preventDefault();
       //var name=$('.username').val();
       //var tel=$(".tel").val();
       //var shop_id=$(".shop_id").val()
       $('.myForm').submit()
       //var count = 0;
       //if(name === ''){
       //    alert('未填姓名')
       //    count++;
       //}
       //if(tel === ''){
       //    $('._gapTel').html('请填写手机号');
       //    count++;
       //}else if(!/^\d{11}$/.test(tel)){
       //    $('._gapTel').html('请填写正确手机号');
       //    //$('.tel').addClass('anotherClass')
       //    count++;
       //}else{
       //    $('.tel').css({"border":"1px solid blue"})
       //    $('._gapTel').hide();
       //}
       // if(count === 0){
        $('myForm').submit()
            $.ajax({
                url:'formhtml',
                data:{
                    name:name,
                    tel:tel,
                    shop_id:shop_id
                },
                dataType: 'json',
                type:'POST',
                success:function(data){
                    if(msg===1){
                        alert("发送成功")

                        window.location='https://huodong.nuomi.com/actshow/mobile/common/short/hujiangyingyu'
                    }else{
                        alert("添加成功")
                    }
                        // else if(data.error==='手机信号不好'){
                    //    $('._gapTel').html('网络不正常');
                    //}else if(data.error===''){
                    //    $('tel').html(data.tel)
                    //    $('.tel').addClass('anotherClass')
                    //}
                    //else {
                    //    alert(data.msg || "报名失败")
                    //}
                }
            })
        //}

   })
})
