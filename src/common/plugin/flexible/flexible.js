/**
 *   应用rem替代物理像素，支持糯米适配
 *   计算原理：当前屏幕宽与标准320的宽度比
 *   Author: Lori<wangccong@baidu.com>
 */ (function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid = null;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        if (width >= 414) {
            docEl.setAttribute('data-fontscale', 2);
        }
        else {
            docEl.setAttribute('data-fontscale', 1);
        }
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }

    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = '12px';
    }
    else {
        doc.addEventListener('DOMContentLoaded', function (e) {
            doc.body.style.fontSize = '12px';
        }, false);
    }

    refreshRem();

})(window);
