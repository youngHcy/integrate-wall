var pages;

var path =  "/sso";
// 打包处理
if(envMode.MODE_OL){
      path = '/admin';
}
var _page = {
    list: [{
        name: '创建直播预告',
        link: path + '/home/index.html',
        status: false,
    }, {
        name: '申请记录',
        link: path + '/history/index.html',
        status: true
    }, {
        name: '个性化审批',
        link: path + '/judge/index.html',
        status: false
    }, {
        name: '历史直播',
        link: path + '/livehistory/livehistory.html',
        status: false
    }]
};

function selectPage(active) {
    for (var i = 0; i < _page.list.length; i++) {

        _page.list[i].status = false;
        if ((_page.list[i].name).indexOf(active.name) != -1) {
            _page.list[i].status = true;
        }
    }

    return _page
}


module.exports = {
    selectPage: selectPage
};