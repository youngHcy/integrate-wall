/**
 * Created by tonggang on 2016/12/10.
 */
// JavaScript Document
// 以异步的方式加载 TKTracker 的方法
var memberid=window.localStorage.getItem('memberid');
function loadTracker(appType,appId,callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://mall.tk.cn/track/tk-track-min.js?'+Math.random(); // 加入随机数防止被缓存
    script.id = 'tk-tracker';
    script.appType = appType;
    script.appId = appId;
    script.onload = script.onreadystatechange = function() {
        if (script.readyState && script.readyState != 'loaded' && script.readyState != 'complete') return;
        script.onreadystatechange = script.onload = null
        if (callback) callback();
    }
    document.body.appendChild(script);
};
function onBodyReady(AppType,AppId,name) {
    loadTracker(AppType,AppId,function() {
        TKTracker.send({
            userId:memberid,
            event:name,
            label:{scode:getScodeValue()}
        });
    });
};
function getScodeValue() {
    var reg = new RegExp("(^|&)scode=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) {
        return unescape(r[2]);
    } else {
        return ''
    }
}
