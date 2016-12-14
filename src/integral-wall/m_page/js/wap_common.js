/**
 * Created by tonggang on 2016/12/10.
 */
// JavaScript Document
function alertFn(boxClass,btnClass){
    var oRulebox=document.querySelector('.'+boxClass);
    var oBtnin=document.querySelector('.'+btnClass);
    var oClose=oRulebox.querySelector('.close');
    var oMark=document.querySelector('#mark');
    oBtnin.addEventListener('click',alertBoxShow,false);
    oClose.addEventListener('click',alertBoxHide,false);
    function alertBoxShow(){
        oRulebox.classList.add('moveDown');
        oMark.style.height=document.body.scrollHeight+'px';
        oMark.style.display='block';
        document.body.style.overflowY='hidden';
    }
    function alertBoxHide(){
        oRulebox.classList.remove('moveDown');
        oMark.style.display='none';
        document.body.style.overflowY='auto';
    }
}
function goBack(){
    var oBack=document.querySelector('.icon-back'),
        href=window.location.href;
    oBack.addEventListener('touchend',function(){
        var pushPage_b = localStorage.getItem("pushPage_b");
        if(pushPage_b){
            uexWindow.evaluateScript("spread","0","uexWindow.close(-1)");
        }else if(window.location.href.indexOf('html')==-1||window.location.href.indexOf('index.html')!=-1){
            this.href='http://m.tk.cn/';
        }else{
            this.href='javascript:history.go(-1)';
        }
    },false)
}
function tab(cls){
    var oTab=document.querySelector('.'+cls),
        aTabTit=oTab.querySelectorAll('.tab-tit li'),
        aTabCon=oTab.querySelectorAll('.tab-con div'),
        n=0,
        show=function(n){
            aTabTit[n].classList.add('active');
            aTabCon[n].style.display='block';
        };
    show(n);
    for(var i=0;i<aTabTit.length;i++){
        aTabTit[i].index=i;
        aTabTit[i].addEventListener('click',function(){
            for(var i=0;i<aTabTit.length;i++){
                aTabTit[i].classList.remove('active');
                aTabCon[i].style.display='none';
            }
            show(this.index);
        },false);
    }
}
function scrollDefault(id){
    var obj = document.getElementById(id);
    var maxH = obj.scrollHeight - obj.clientHeight;
    var oldY = 0;
    obj.addEventListener('touchstart', function(e){
        var cY = e.targetTouches[0].clientY;
        oldY = cY;
        obj.addEventListener('touchmove', function(ev){
            var mY = ev.targetTouches[0].clientY;
            var upDown = mY - oldY > 0 ? true : false;
            if((obj.scrollTop == 0 && upDown) || (obj.scrollTop == maxH && !upDown)){
                ev.preventDefault();
            }
        },false);
        obj.addEventListener('touchend', function(){
            oldY = 0;
        });
    },false);
}
function appOpenDl(){
    var oBtn = document.getElementById("btn");
    oBtn.onclick = openApp;
    function goIos(){
        var t1 = Date.now();
        var ifr = document.createElement("iframe");
        ifr.style.display = "none";
        ifr.src = "appcandssb10002://";
        document.body.appendChild(ifr);
        timeout = window.setTimeout(function(){
            try_to_open_app(t1);
        }, t);
    }
    var timeout, t = 1500, hasApp = true;
    function openApp(){
        goIos();
        setTimeout(function(){
            if(!hasApp){
                download_app();
            }
        }, t+200);
    }
    function try_to_open_app(t1){
        var t2 = Date.now();
        if(!t1 || t2 - t1< t+200){
            hasApp = false;
        }
    }
    var isAndroid = (window.navigator.userAgent.indexOf('Android') >= 0) ? true : false;
    function download_app(){
        if(isAndroid){
            window.location.href="http://m.tk.cn/apkdownload/taikang_60227.apk";
        } else{
            window.location.href="https://itunes.apple.com/cn/app/tai-kang-zai-xian/id909185021?mt=8";
        }
    }
}
function wx_share(fTitle,fDesc,fImgurl,fcImgurl,fLink){
    //fTitle分享标题
    //fDesc分享描述
    //fImgurl分享给朋友图片链接
    //fcImgurl分享到朋友圈图片链接
    //fLink分享地址
    var pageUrl = location.href.split('#')[0];
    setTimeout(function(){
        z_weixinshare(pageUrl, fTitle, fDesc, fLink, fImgurl, fcImgurl);
    },500);
}
function loadingsharejs(fTitle,fDesc,fImgurl,fcImgurl,fLink){
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        loadjsfile("http://mimage.tk.cn/js/weixinshare.js");
        loadjsfile("http://res.wx.qq.com/open/js/jweixin-1.0.0.js");
        wx_share(fTitle,fDesc,fImgurl,fcImgurl,fLink)
    }
}
//判断app内部
if(window.location.href.indexOf('devicetype')!=-1){
    localStorage.setItem('inApp',1);
}
if(localStorage.getItem('inApp')){
    document.body.classList.add('inApp');
    document.title='活动详情';
    var aBtn1=document.querySelectorAll('a[data-apphref]');
    for(var i=0;i<aBtn1.length;i++){
        aBtn1[i].href=aBtn1[i].dataset.apphref;
    }
}
//百度统计
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?1e8c76421da066b19cdd7616bd7053cf";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
