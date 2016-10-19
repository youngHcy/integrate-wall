/**
 * by cuihonglei 20160831
 *
 *
 *
 *
 *              |---直播
 *              |---预览
 *  main-api--  |---回放
 *              |---结束
 *
 *
 */

import preComponent from '../view/pre' //预览
import onlineComponent from '../view/online' //直播
import backComponent from '../view/back' //viewsspecial回放
import overComponent from '../view/over' //结束

// Lib
import 'zepto';
// expose?cyberplayer!
import 'expose?cyberplayer!plugin/player/cyberplayer.js'
import Vue from 'vue';


// Component
import 'plugin/flexible/flexible';
import 'plugin/flexible/flexible.less';
import './index.less';
import 'common.less';
import '../widget/share';
import popupComponent from '../widget/popup';
import advertiseComponent from '../widget/advertise';
import '../widget/share'

import requestConfig from '../config/requests.js';

$(document).ready(function () {

    var vm = new Vue({
        el: 'body',
        data: {
            vc: 'over',
            isPopup: false,
            userData: null
        },
        computed: {
            //计算当前渲染哪个视图
            getVc () {
                if (!this.vc) {
                    return null;
                }
                return 'vc-' + this.vc;
            }

        },
        methods: {

        },
        ready () {
            let _this = this;

            //禁用拖拽
            document.addEventListener('touchmove', function (e) {
                e.preventDefault()
            });

            //从地址栏获取room id
            var roomId = getUrlSearchParam('room_id');

            //异步获取当前状态确定加载哪个view
            $.ajax({
                type: 'POST',
                data: {
                    room_id: roomId,
                },
                url: requestConfig.userEnter,
                success (resRaw) {
                    // var res = JSON.parse(resRaw);
                    var res = resRaw;
                    //console.log(res);
                    if (res.status === 0) {
                        // console.log(res.data.video.title);
                        document.title = res.data.video.title;//将直播标题设置为网页标题
                        //res.data.room_status = '2';
                        switch (res.data.room_status) {
                            case '0':
                                vm.vc = 'over';
                                break;
                            case '1':
                                vm.vc = 'pre';
                                break;
                            case '2':
                                vm.vc = 'online';
                                break;
                            case '3':
                                vm.vc = 'over';
                                break;
                            case '4':
                                vm.vc = 'back';
                                break;
                        }
                        vm.userData = res.data;
                    } else {
                        _this.$broadcast('errorStatus', '网络连接错误...');
                        // console.log('无效的房间id');
                    }
                },
                error (err) {
                    _this.$broadcast('errorStatus', '网络连接错误...');
                    // console.log(err);
                }
            });


        },
        components: {
            'vc-pre': preComponent,
            'vc-online': onlineComponent,
            'vc-back': backComponent,
            'vc-over': overComponent,
            'v-popup': popupComponent,
            'v-advertise': advertiseComponent
        }
    })

});

function getUrlSearchParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}