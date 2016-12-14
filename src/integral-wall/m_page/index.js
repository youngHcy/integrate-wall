

var initInterval = '';
var codeStatus = false;
$(function() {
    //初始化出生日期
    var selectDate = new MobileSelectDate();
//		var codeStatus = false;
    selectDate.init({
        trigger : '#txt_date',
        value : "1985-01-01"
    });
    //绑定发送验证码事件
    $("#sendCode").on("click", sendCode);
    //快速测保费事件
    $("#btn-start").on("click", premium);
    //重新测算
    //$(".btn-retest").on("click", againPremium);
})
//发送验证码
function sendCode() {
    var mobile = $("#mobile").val().trim();//手机号
    if (!checkData())
        return;
    if (codeStatus)
        return;
    var url = 'code.json';
    $.ajax({
        url : url,
        type : "get",
        data : {
            mobile : mobile
        },
        dataType : "json",
        success : function(data) {
            if (data.result == '00') {
                alertbox("验证码发送成功");
                countDown();//倒计时
            } else {
                alertbox(data.data.desc);
            }
        },
        error : function(e) {
            alertbox("网络连接出错，请稍后再试");
        }
    });
}

//快速测保费
function premium() {
    var sex = $("input[name='sex']:checked").val();//性别
    var birthday = $("#txt_date").text().trim();//出生日期
    var insurance = $("#insurance").val().toString();//保额
    var payWay = $("#payWay").val();//交费方式
    var securityYear = $("input[name='time']:checked").val();//保障期间
    var mobile = $("#mobile").val().trim();//手机号码
    var code = $("#code").val().trim();//验证码
    if (!checkData())
        return;
    if (!codeStatus) {
        alertbox("请先发送验证码");
        return;
    }
    if (!isDefine(code)) {
        alertbox('请输入验证码');
        return;
    }
    var fromcoop = getCookie('FROM_COOP');
    if (!isDefine(fromcoop)) {
        fromcoop = '53686';
    }
    var url = 'insurance.json';
    openLoading("loadingIndex01");
    $.ajax({
        url : url,
        type : "get",
        data : {
            gender : sex,
            birthday : birthday,
            fee : insurance,
            payType : payWay,
            insurancePeriod : securityYear,
            mobile : mobile,
            yzm : code,
            fromid : fromcoop,
            cal_type : 298
        },
        dataType : "json",
        success : function(data) {
            closeLoading("loadingIndex01");
            if (data.result == '0000') {
                if ($("#payWay option:selected").text() == "趸交") {
                    $("#preium").html("您应交保费：<span>￥<b>" + data.totalpremium + "</b></span>元");
                } else {
                    $("#preium").html("您应交保费：<span>￥<b>" + data.totalpremium + "</b></span>元/年");
                }
                $("#age").text(getAge(birthday) + "岁");
                $("#gender").text($("input[name='sex']:checked").val() == "M" ? "男" : "女");
                $("#period").text($("input[name='time']:checked").val() == "Y30" ? "30年" : "至75周岁");
                $("#amount").text(data.fee);//基本保额
                $("#payWay1").text($("#payWay option:selected").text());//交费方式
                $("#money").text(data.illness_premium);
                $("#money1").text(data.recovery_premium);
                $("#money2").text(data.mid_premium);
                $("#money3").text(data.light_premium);
                $("#money4").text(data.alive_premium);
                $("#money5").text($("#insurance option:selected").text());
                $("#money6").text($("#insurance option:selected").text());
                if (parseInt(data.age) >= 18) {
                    $("#gt18").show();
                    $("#lt18").hide();
                } else {
                    $("#gt18").hide();
                    $("#lt18").show();
                }
                $(".index-wrap").hide();
                $(".index-wrap1").show();
            } else if (data.result == '0001') {
                alertbox("系统异常");
            } else if (data.result == '0002') {
                alertbox("测算失败");
            }
            else if (data.result == '0004') {
                alertbox("表单元素有问题");
            }
            else {
                alertbox(data.desc);
            }
        },
        error : function(e) {
            closeLoading("loadingIndex01");
            alertbox("网络连接出错，请稍后再试");
        }
    });
}

//验证数据
function checkData() {
    var birthday = $("#txt_date").text().trim();//出生日期
    var mobile = $("#mobile").val().trim();//手机号码
    if (birthday == "请选择" || !isDefine(birthday)) {
        alertbox("请选择出生日期");
        return false;
    }
    if (getDay(birthday) < 30) {
        alertbox("出生日期不能小于30天");
        return false;
    }
    if (getAge(birthday) > 55) {
        alertbox("亲，年龄超过55周岁，无法参与测算哦！");
        return false;
    }
    if (!isDefine(mobile)) {
        alertbox('请输入手机号码');
        return false;
    }
    var exp = /^1[3,4,5,7,8]\d{9}$/;
    if (!exp.test(mobile)) {
        alertbox('手机号码格式不正确');
        return false;
    }
    return true;
}

//根据年龄限制交费方式和保障期间
function ageLimit() {
    var birthday = $("#txt_date").text().trim();//出生日期
    var payway = 55 - parseInt(getAge(birthday));//交费方式
    $("#payWay option:first").prop("selected", "selected");
    if (getAge(birthday) >= 0 && getAge(birthday) <= 40) {
        $("input[name='time']").first().prop("checked", "true");
        $("#securityYear label").first().show();
        $("#securityYear label").last().show();
    } else if (getAge(birthday) >= 41 && getAge(birthday) <= 55) {
        $("input[name='time']").last().prop("checked", "true");
        $("#securityYear label").first().hide();
        $("#securityYear label").last().show();
    } else {
        alertbox("亲，年龄超过55周岁，无法参与测算哦！");
    }
    // 5、10、15、2
    var str = "";
    if (payway < 5) {
        str = '<option selected="" value="SP">趸交</option>';
    } else if (payway < 10) {
        str = '<option selected="" value="SP">趸交</option>'
            +'<option value="Y5">5年交</option>';
    } else if (payway < 15) {
        str = '<option selected="" value="SP">趸交</option>'
            +'<option value="Y5">5年交</option>'
            +'<option value="Y10">10年交</option>';
    } else if (payway < 20) {
        str = '<option selected="" value="SP">趸交</option>'
            +'<option value="Y5">5年交</option>'
            +'<option value="Y10">10年交</option>'
            +'<option value="Y15">15年交</option>';
    } else {
        str = '<option selected="" value="SP">趸交</option>'
            +'<option value="Y5">5年交</option>'
            +'<option value="Y10">10年交</option>'
            +'<option value="Y15">15年交</option>'
            +'<option value="Y20">20年交</option>';
    }
    $("#payWay").html(str);
}

//重新测算
//function againPremium() {
//    $("#txt_date").text("请选择");
//    $("input[name='sex']").first().prop("checked", "true");
//    $("#insurance option:first").prop("selected", "selected");
//    var str = '<option selected="" value="SP">趸交</option>';
//    $("#payWay").html(str);
//    $("input[name='time']").last().prop("checked", "true");
//    $("#mobile").val("");
//    $("#code").val("");
//    clearInterval(initInterval);
//    codeStatus = false;
//    $('#sendCode').val("发送验证码");
//    $(".statu1").show();
//    $(".statu2").hide();
//}

//倒计时
function countDown() {
    var time = 60;
    initInterval = setInterval(function() {
        if (time >= 0) {
            if (time < 10) {
                time = "0" + time;
            }
            codeStatus = true;
            var str = time + '秒后重新发送';
            $('#sendCode').val(str);
            time--;
        } else {
            clearInterval(initInterval);
            codeStatus = false;
            $('#sendCode').val("重新获取");
        }

    }, 1000);
    //每个1秒执行一次
}

//根据出生日期判断出生天数
function getDay(birthday) {
    var myTime = new Date();
    var r = birthday.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) {
        return false
    }
    var birthTime = new Date(r[1], r[3] - 1, r[4]);
    return parseInt((myTime - birthTime) / (1000 * 60 * 60 * 24));
}

//根据出生日期获取年龄
function getAge(birthday) {
    var r = birthday.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) {
        return false
    };
    var birth = new Date(r[1], r[3] - 1, r[4]);
    if (birth.getFullYear() == r[1] && (birth.getMonth() + 1) == r[3] && birth.getDate() == r[4]) {
        var today = new Date();
        var age = today.getFullYear() - r[1];

        if (today.getMonth() > birth.getMonth()) {
            return age;
        }
        if (today.getMonth() == birth.getMonth()) {
            if ((today.getDate() + 1) >= birth.getDate()) {
                return age;
            } else {
                return age - 1;
            }
        }
        if (today.getMonth() < birth.getMonth()) {
            return age - 1;
        }
    }
    return age;
}
//获取formId
function getCookie(name){
    var arr, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg)){
        return (arr[2]);
    }else{
        return null;
    }
}
//判断是否为空值
function isDefine(value){
    if(value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof(value) == 'undefined'){
        return false;
    }else{
        value = value+"";
        value = value.replace(/\s/g,"");
        if(value == ""){
            return false;
        }
        return true;
    }
}
//弹窗提示
function alertbox(alertMessage) {
    $('#alert_mask').remove();
    var str = '';
    str = '<div class="k_mask" id="alert_mask">' +
        '<section class="alert_section" id="alert_section">' +
        '<div class="alert_content">' +
        '<p>' + alertMessage + '</p>' +
        '</div></section></div>';
    $('body').append(str);

    middleBox(document.getElementById('alert_section'));
    setTimeout(function () {
        $('#alert_mask').remove();
    }, 2000)
    $('.alert_close').click(function () {
        $('#alert_mask').remove();
    });
}
function middleBox(oBox) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    oBox.style.left = ( document.documentElement.clientWidth - oBox.offsetWidth ) / 2 + 'px';
    oBox.style.top = ( document.documentElement.clientHeight - oBox.offsetHeight - 90 ) / 2 + 'px';
}
//打开loading
function openLoading(id){
    $("#"+id).css("display","block");
}
//关闭loading
function closeLoading(id){
    $("#"+id).css("display","none");
}
//获取url参数
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}