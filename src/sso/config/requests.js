
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
    // requestDomain = 'http://sh.qiao.baidu.com';
    requestDomain = 'http://live.nuomi.com';

}

var requestConfig = {
    // 获取 banner 数据
    'getUserInfo':requestDomain+'/live/room/getUserInfo',
    'upImg':requestDomain+'/live/room/uploadFore',
    'create':requestDomain+ '/live/room/create?',
    'roomlist': requestDomain+'/live/room/getRoomPersonaltitle',
    'getroom':requestDomain+'/live/room/getRoomPersonalinfo',
    'personal':requestDomain+'/live/room/personal', //个性化提交
    'login':requestDomain+'/',
    'isLogin': requestDomain + '/live/room/index',
    'onlineGET': 'https://passport.baidu.com/?logout',
    'rdGET': 'https://passport.rdtest.baidu.com/?logout',
    'qaGET': 'https://passport.qatest.baidu.com/?logout',
    'wartermark':requestDomain+'/live/room/wartermark',
    'historyInfo':requestDomain+'/live/room/roominfo',
    'historylist':requestDomain+'/live/room/roomList',
    'specform':requestDomain+'/live/room/initDefaultPersonal',
    'editRoom':requestDomain+'/live/room/editRoom',
    'judgeTableList': requestDomain + '/live/judge/getjudgelist',
    'judgeMessage': requestDomain + '/live/judge/getjudgemessage',
    'liveHistoryDetail': requestDomain + '/live/livehistory/getlivehistorydetail'
};

module.exports = requestConfig;
