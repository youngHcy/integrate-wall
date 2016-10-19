
// SE host
var requestDomain = '';
// TP host
var tpRequestDomain = '';

if (envMode.MODE_MK) {
    // 本地开发 host
    requestDomain =envMode.addr;
    // tpRequestDomain = envMode.local;
    // console.log(envMode)
    // 加油卡联调 host
    // requestDomain = 'http://10.94.43.41:8133';
    // tpRequestDomain = 'http://10.94.43.41:8133';

    // 加油卡提测 host
    /* requestDomain = 'http://cq01-nminst-devplat-c-1.epc.baidu.com:8989';
     tpRequestDomain = 'http://cq01-nminst-devplat-c-1.epc.baidu.com:8988';
     */
    // QQ 充值联调host
    // requestDomain = 'http://10.94.191.37:8088';
} else if(envMode.MODE_QA){
    // 测试QA环境 host
    requestDomain = 'http://cq01-nminst-devplat-c-1.epc.baidu.com:8989';
    tpRequestDomain = 'http://cq01-nminst-devplat-c-1.epc.baidu.com:8988';
} else if(envMode.MODE_OL){
    // 线上OL环境 host
    //requestDomain = envMode.addr //'http://sh.qiao.baidu.com';
    // requestDomain = 'http://sh.qiao.baidu.com';
    requestDomain = 'http://live.nuomi.com';
}

var requestConfig = {

    // 直播状态接口
    // queryVideoStatus: requestDomain + '/seserver/video/getvideostatus',
    // videoConfigApi: requestDomain + '/seserver/video/getvideoconfig',

    //参见WIKI： http://wiki.baidu.com/pages/viewpage.action?spaceKey=nmlive&postingDay=2016%2F9%2F7&title=users.enter
    userEnter: requestDomain + '/live/users/enter'

};

module.exports = requestConfig;
