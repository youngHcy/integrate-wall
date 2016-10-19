/**
 * Created by lihuanyu on 2016/9/13.
 */

function callNative() {
//尝试拉起原生APP，定时器计时，超过200ms无反应，则认为未安装APP。弹出下载页。
    var url = {
        open: 'app://xxxxx',
        down: 'xxxxxxxx'
    };
    var _this = this;
    var iframe = document.createElement('iframe');
    var body = document.body;
    iframe.style.cssText = 'display:none;width=0;height=0';
    var timer = null;

// 立即打开的按钮
    var openapp = document.getElementById('openapp');
    openapp.addEventListener('click', function () {
        if (/MicroMessenger/gi.test(navigator.userAgent)) {
            // 引导用户在浏览器中打开
        } else {
            body.appendChild(iframe);
            iframe.src = url.open;
            timer = setTimeout(function () {
                console.log(99);
                _this.isPopup = true;
                // wondow.location.href = url.down;
            }, 500);
        }
    }, false);
}