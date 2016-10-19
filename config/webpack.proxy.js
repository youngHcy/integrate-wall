/**
 * 路由的映射文件
 * @param options
 * @param options.envMode 环境变量
 */
module.exports = function (options) {
    'use strict';

    // 本地开发地址，默认：http://localhost:8527/pack
    var targetHostLocal = [options.envMode.local, ''].join('');
    // 本地开发地址，默认：http://172.xx.xx.xx:8527/pack
    var targetHostAddr = [options.envMode.addr, ''].join('');

    // 联调地址
    // var targetHostLocal = 'http://10.94.191.37:8088';
    var targetHostRemote = 'http://106.120.159.160';
    // var targetHostRemote = 'http://sh.qiao.baidu.com';

    var proxyHash = {};

    /* 直播 */
    (function () {
        //后端给出的接口
        proxyHash['/live/users/enter'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/video/mock/userenter.json';
            }
        };
        //直播状态
        proxyHash['/seserver/video/getvideostatus'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/video/mock/pageview.json';
            }
        };
        //直播播放器相关设定
        proxyHash['/seserver/video/getvideoconfig'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/video/mock/videoconfig.json'
            }
        }
    })();

    /* 婚恋 */
    (function () {
        //婚恋首页所有信息
        proxyHash['/marry/getmsg'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                // req.method = 'GET';
                req.url = '/marrytest/mock/ajax/mockindexmsg.json'
            }
        };
        //获取四张图片信息，暂时废弃不用
        proxyHash['/marry/four_pics'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/marrytest/mock/ajax/fourpic.json';
            }
        };
    })();

    /* sso */
    (function () {
        //登陆
        proxyHash['/live/room/index'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/loginmock.json';
            }
        };
        // 首页
        proxyHash['/live/room/getUserInfo'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/getUserInfo.json';
            }
        };
        // gexinghua
        proxyHash['/live/room/getRoomPersonaltitle'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/roomlist.json';
            }
        };
        proxyHash['/live/room/getRoomPersonalinfo'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/room.json';
            }
        };
        proxyHash['/live/room/roominfo'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/room.json';
            }
        };
        proxyHash['/live/room/roomList'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/roomlist.json';
            }
        };
        proxyHash['/live/room/initDefaultPersonal'] = {
            target: targetHostLocal,
            rewrite: function (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/spc.json';
            }
        };

        //审批页获取审批列表
        proxyHash['/live/judge/getjudgelist'] = {
            target: targetHostLocal,
            rewrite (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/judgetable.json'
            }
        };
        //获取一条审批的详情
        proxyHash['/live/judge/getjudgemessage'] = {
            target: targetHostLocal,
            rewrite (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/applymessage.json';
            }
        };
        //获取一条历史直播的详情
        proxyHash['/live/livehistory/getlivehistorydetail'] = {
            target: targetHostLocal,
            rewrite (req) {
                req.method = 'GET';
                req.url = '/sso/mock/ajax/livehistorydetail.json';
            }
        }
    })();


    return proxyHash;
};


