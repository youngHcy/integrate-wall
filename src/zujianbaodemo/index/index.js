/**
 * @file 示例入口JS，一个目录下同名的HTML,JS会被自动关联
 */

// LIB
import 'zepto';
import Vue from 'vue';
import 'DeferredBNJS';

// Requests
import requestConfig from '../config/requests.js';

import VueComponentParent from './parent';

// CSS
import './index.less';



// Vue整体实例化
new Vue({
    el:     '.vue-view',
    components: {
        // 局部定义组件为指令
        'vc-parent': VueComponentParent
    }
});


// BNJS支持：
BNJSReady(function () {

    $('body').append('<h3>显示BNJS信息：</h3>');
    $('body').append(['<div class="json-desc">', JSON.stringify(BNJS, null, 4), '</div>'].join(''));

    $('body').append('显示envMode环境信息：');
    $('body').append(['<div class="json-desc">', JSON.stringify(envMode, null, 4), '</div>'].join(''));

});


// DeferredBNJS示例
BNJSReady(function () {

    $('body').append('<h3>显示DeferredBNJS信息：</h3>');
    $('body').append(['<div class="json-desc">', JSON.stringify(DeferredBNJS, null, 4), '</div>'].join(''));

    // GET请求
    $('body').append('<h3>BNJS的http.get()示例：</h3>');
    BNJS.http.get({
        url:        requestConfig.demoAjax,
        onSuccess: function (res) {
            $('body').append(['<div class="json-desc">', 'DONE: ', JSON.stringify(res, null, 4), '</div>'].join(''));
        },
        onFail: function (res) {
            $('body').append(['<div class="json-desc">', 'FAIL: ', res.status, res.statusText, JSON.stringify(res, null, 4), '</div>'].join(''));
        }
    });

    $('body').append('<h3>DeferredBNJS的http.get()示例：</h3>');
    DeferredBNJS.http.get({
        url:        requestConfig.demoAjax
    }).then(function (res) {
        $('body').append(['<div class="json-desc">', 'DONE: ', JSON.stringify(res, null, 4), '</div>'].join(''));
    }, function (res) {
        $('body').append(['<div class="json-desc">', 'FAIL: ', res.status, res.statusText, JSON.stringify(res, null, 4), '</div>'].join(''));
    });


    $('.btn-ajax-interceptor-demo').on('click', function () {

        $('body').append('<h3>DeferredBNJS的http.get.curry()拦截器示例：</h3>');
        DeferredBNJS.http.get.curry({
            disable:    '.btn-ajax-interceptor-demo',
            overlay:    true,
            errtip:     '客户端请求出错，请重试！'
        })({
            url:        [envMode.addr, '/doc/demo/get'].join('')
        }).then(function (res) {
            $('body').append(['<div class="json-desc">', 'DONE: ', JSON.stringify(res, null, 4), '</div>'].join(''));
        }, function (res) {
            $('body').append(['<div class="json-desc">', 'FAIL: ', res.status, res.statusText, JSON.stringify(res, null, 4), '</div>'].join(''));
        });

    });
});


// account.getCommonSecretAccount()
BNJSReady(function () {

    $('body').append('<h3>显示account.getCommonSecretAccount()</h3>');
    /*DeferredBNJS.account.parent.getCommonSecretAccount({
        tpFlag: 'sapd_shoujichongzhi',
        requestData: 'displayName,siteId',
        onSuccess: function (res) {
            $('body').append(['<div class="json-desc">', 'DONE: ', JSON.stringify(res, null, 4), '</div>'].join(''));
        },
        onFail: function (res) {
            $('body').append(['<div class="json-desc">', 'FAIL: ', res.status, res.statusText, JSON.stringify(res, null, 4), '</div>'].join(''));
        }
    });*/

    DeferredBNJS.account.getCommonSecretAccount({
        tpFlag: 'sapd_shoujichongzhi',
        requestData: 'displayName,siteId'
    }).then(function (res) {
        $('body').append(['<div class="json-desc">', 'DONE: ', JSON.stringify(res, null, 4), '</div>'].join(''));
    }, function (res) {
        $('body').append(['<div class="json-desc">', 'FAIL: ', res.status, res.statusText, JSON.stringify(res, null, 4), '</div>'].join(''));
    });


    // 存储类：DeferredBNJS.localStorage
    DeferredBNJS.localStorage.setItem({
        key:    'DeferredBNJS.keyTest1',
        value:  'DeferredBNJS.valueTest1'
    }).then(function () {
        console.info('DeferredBNJS.localStorage.setItem succeed');
        DeferredBNJS.localStorage.getItem({
            key:    'DeferredBNJS.keyTest1'
        }).then(function (res) {
            console.info('DeferredBNJS.localStorage.getItem succeed', res);
        }, function () {
            console.warn('DeferredBNJS.localStorage.getItem error');
        });
    }, function () {
        console.info('DeferredBNJS.localStorage.setItem error');
    });

    // 对于options.callback的方式
    DeferredBNJS.ui.title.addActionButton({
        tag: '1',
        text: 'Search',
        icon: 'search',
        callback: Function
    }).then(null, null, function(res){
        alert('clicked button: ' + JSON.stringify(res));
    });
});


