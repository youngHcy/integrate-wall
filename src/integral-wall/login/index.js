/**
 * Created by huangchenyang on 2016/10/27.
 */
///   var styles (2) find jie repace  of

//import 'zepto'
    /*
    * 动态加载JS
    * */

var windowInfo = {
    create:function(json){
        var json = json ||{
                title:'',
                price: 0,
                expireTime: ''
            };
        //var wrap ='<div class="mask">' +
        //    '<div class="switchOff">' +
        //    '<button class="cancel">×</button>' +
        //    '</div>' +
        //    '<div class="hint">' +
        //    '<span>您有'+ json.price +'元优惠券可以使用</span>' +
        //    '</div>' +
        //    '<div class="couponCheck">' +
        //    '<button>有效期：'+ json.time +'</button>' +
        //    '</div>'+
        //    '<div class="useNow">'+
        //    '<button>立即使用</button>'+
        //    '</div></div>';
        var wrap=
            '<div id="mask">'+
           '<div class="hint">'+
            '<span >恭喜您获得'+json.price+'元糯米通用劵</span>'+
            '</div>'+
            '<div class="_couponCheck">'+
            '<div class="couponD">'+
            '<div class="_price _couponD">'+
            '<span>10元</span>'+
        '</div>'+
        '<ul class="_priceDetail">'+
            '<li>'+
            '<span>糯米平台通用劵</span>'+
            '</li>'+
            '<li>'+
            '<span>订单满'+json.price+'.01元可用</span>'+
        '</li>'+
        '</ul>'+
        '</div>'+
        '<div class="_expireTime">'+
            '<span>有效期:'+json.expireTime+'</span>'+
        '</div>'+
        '<div class="useNow">'+
            '<button class="_cancel">立即使用</button>'+
            '</div>'+
            '</div>'+

            '</div>'+
        //    '<div id="mask">'+
        //    '<div class="switchOff">'+
        //    '<button class="cancel">×</button>'+
        //'</div>'+
        //'<div class="hint">'+
        //    '<span >恭喜您获得'+json.price+'元糯米通用劵</span>'+
        //    '</div>'+
        //    '<div class="_couponCheck">'+
        //    '<div class="couponD">'+
        //    '<div class="_price _couponD">' +
        //    '<span>'+json.price+'元</span>' +
        //    '</div>'+
        //'<ul class="_priceDetail">'+
        //    '<li>' +
        //    '<span>糯米平台通用劵</span>' +
        //    '</li>'+
        //    '<li>' +
        //    '<span>订单满10.01元可用</span>' +
        //    '</li>'+
        //'</ul>'+
        //'</div>'+
        //'<div class="_expireTime">' +
        //    '<span>有效期:'+json.expireTime+'</span>' +
        //    '</div>'+
        //'</div>'+
        //'<div class="useNow">'+
        //    '<button class="_cancel">'+json._button+'</button>'+
        //    '</div>'+
        //    '</div>'
          $('#mask').remove();
           $('body').append(wrap);
            this.event();
    },
    event:function(){
        ///  click() ?
    //    $('._cancel ').click(function(event){
    //   event.preventDefault();
    //    $('#mask').hide()
    //    location.href='http://www.baidu.com'
    //});
    //$('.couponCheck').click(function(event){
    //   event.preventDefault();
    //   $('.mask').hide()//location.href=''
    //});
    //    $('.useNow').click(function(event){
    //        event.preventDefault();
    //        $('.mask').hide()//location.href=''
    //    });
    },
    //loadCss:function(){
        //this.create();
        //var head = document.getElementsByTagName('HEAD').item(0);
        //var style = document.createElement('link');
        //style.href = 'index.css';
        //style.rel = 'stylesheet';
        //style.type = 'text/css';
        //head.appendChild(style);

//    },
     op:$('#mask'),
     show:function(data){
         this.create(data);
     },
     hide:function(){
        this.op.remove();
     },
    GetQueryString:function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
},
// 调用方法
};

//var data = {
//    aa: 111,
//    bb: [
//        11, 32
//    ]
//}
//windowInfo.loadCss();
//windowInfo.show({
//       price:10,
//       expireTime:'2016-12-11',
//});
//windowInfo.hideD();
/*
* 格式化时间
* */
Date.prototype.format = function(fmt){ //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var userId=$('#userId').val()
alert(userId)
$ .ajax({
         //url:'/giftcard/find',
           url:'http://cq01-ps-dev201.cq01.baidu.com:8800/lntegral/vouchers',
         // url:'http://10.94.43.58:8081/giftcard/find?userId=2500282385',
         data:{
             userId:2500282689
         },
          jsonp: "callback",
          dataType: 'jsonp',
          type:'get',
    success:function(data){
        console.log(data)
        console.log(windowInfo.GetQueryString("userId"))
         if(data.status==0){
             //alert("1")
             console.log(data.name)
             //console.log(data.data[0].money)
             windowInfo.show({
                 price:data.money,
               expireTime:new Date(data.expireTime).format("yyyy-M-d h:m:s"),
                 _button:'查看优惠券'
             })
             var flag=false
             $('._cancel ').click(function(event){
                 event.preventDefault();
                 $('#mask').hide()
                 flag=true
                 if(flag){
                     setTimeout(function(){
                     location.href='http://www.sina.com.cn'
                     },2000)
                 }

             });
         }
        //else if(data.data.status==2){
        //    windowInfo.show({
        //        price:data.data.price,
        //        expireTime:data.data.expireTime,
        //        _button:'查看优惠券'
        //    })
        //    var flag=false
        //    $('._cancel ').click(function(event){
        //        event.preventDefault();
        //        $('#mask').hide()
        //        flag=true
        //        if(flag){
        //            setTimeout(function(){
        //                location.href='http://www.baidu.com.cn'
        //            },2000)
        //        }
        //
        //    });
        //}
    }
})

