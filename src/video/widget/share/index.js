/**
 * Created by lihuanyu on 2016/9/7.
 */

//微信分享
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    var imgUrl = 'http://s.map.qq.com/hr_img/wapLogo.jpg';
    var oUrl = function (href) {
        var thisHref;
        if (href.search == "") {
            thisHref = href.origin + href.pathname + '?ref=share' + href.hash;
        } else {
            thisHref = href.origin + href.pathname + href.search + '&ref=share' + href.hash
        }
        return thisHref;
    }(location);

    /**
     * @brief 获取分享的标题
     */
    function getTitle() {
        return "腾讯地图街景-足不出户看天下";
    }
    /**
     * @brief 获取分享的内容
     * @param {String} url 用于显示的URL
     * @param {String} sep 不同字段之间的分隔符
     */
    function getDesc() {
        return "腾讯地图街景是由腾讯推出的一项全景服务，通过街景，只要用手机就可以看到街景上的真实景像，拥有身临其境的感受！";
    }
// 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        WeixinJSBridge.invoke('sendAppMessage', {
            "appid": "wx751a1acca5688ba3",
            "img_url": imgUrl,
            "img_width": "100",
            "img_height": "100",
            "link": oUrl,
            "title": getTitle(),
            "desc": getDesc()
        }, function (res) {
        });
    });
// 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function (argv) {
        WeixinJSBridge.invoke('shareTimeline', {
            "img_url": imgUrl,
            "img_width": "100",
            "img_height": "100",
            "link": oUrl,
            "title": getTitle(),
            "desc": getDesc()
        }, function (res) {
        });
    });
// 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function (argv) {
        WeixinJSBridge.invoke('shareWeibo', {
            "img_url": imgUrl,
            "title": getTitle(),
            "content": getTitle() + '\n' + getDesc() + " " + oUrl + " ",
            "url": oUrl
        }, function (res) {
        });
    });

}, false);