/**
 * 路由的映射文件
 * @param options
 * @param options.envMode 环境变量
 */
module.exports = function (options) {
    'use strict';

    // 本地开发地址，默认：http://localhost:8527
    var targetHostLocal = [options.envMode.local, ''].join('');
    // 本地开发地址，默认：http://172.xx.xx.xx:8527
    var targetHostAddr = [options.envMode.addr, ''].join('');

    // 联调地址
    // var targetHostLocal = 'http://10.94.191.37:8088';
    var targetHostRemote = '';

    var proxyHash = {};

    /* 示例 */
    (function(){
        // 接口示例
        proxyHash['/doc/demo/get'] = {
            target: targetHostRemote || targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/zujianbaodemo/mock/ajax/succ.json';
            }
        };
        // 获取城市列表
        proxyHash['/tp/tpmis/getcitylist'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/doc/mock/ajax/cityList.json';
            }
        };
        //
        proxyHash['/giftcard/find'] = {
            target: targetHostRemote || targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/integral-wall/mock/ajax/find.json';
            }
        };

    })();


    return proxyHash;
};


