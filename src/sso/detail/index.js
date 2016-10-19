/**
 *  by cuihonglei 20160921
 *  1
 *  2
 */

'use strict';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

//全局调用
import Vue from 'vue';
import vTop from '../widget/top';
import vSlider from '../widget/slider';
import vHistorynav from '../widget/history_nav';
import vHistorylist from '../widget/history_list';

import './index.less';

import API from '../config/requests.js';

// import ''
var page_index = location.href;

var vm = new Vue({
    el: '#home',
    ready: function () {

        this.getdata();


    },
    events: {
        reload: function () {
            $('.radio-box input').removeAttr("checked");

            $(".starttime").val('');

            $(".foreimg").html('');

            this.getdata();
        }
    },
    methods: {
        getdata: function () {
            $.ajax({
                url: API.history + '?pageindex=0&pagenum=10&status=0',
                success: function (data) {
                    if (data.status == 0) {
                        console.log(data.data)
                        vm.historyList = data.data;

                    }

                },
                error: function () {

                }
            });
        }
    },
    data: function () {
        return {
            loginData: {
                index: page_index,
                name: 'cuihonglei',
                loginoutlink: API.rdGET
            },
            historyNav: {
                data: [
                    {title: "未审核", vlue: 0},
                    {title: "已通过", vlue: 1},
                    {title: "未通过", vlue: 2},
                    {title: "已直播", vlue: 4},
                    {title: "未直播", vlue: 3}
                ]
            },
            historyList: {
                pagelist: [],
                pagedata: '10'
            },
            userInfo: {
                waterimg: {
                    name: '',
                    url: '',
                    watername: ''
                }
            },
            sliderData: {
                list: [
                    {
                        name: '创建直播预告',
                        link: '/fe/video_sso/page/video_sso/home/index.html',
                        status: true
                    }, {
                        name: '个性化配置申请',
                        link: '/fe/video_sso/page/video_sso/special_apply/special_apply.html',
                        status: false
                    }]
            }
        }
    },
    components: {
        vTop,
        vSlider,
        vHistorynav,
        vHistorylist
    }
});
