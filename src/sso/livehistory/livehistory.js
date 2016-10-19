/**
 * Created by lihuanyu on 2016/9/26.
 */

'use strict';

//lib
import 'jquery';
import 'bootstrap';

//全局调用
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import vTop from '../widget/top';
import vSlider from '../widget/slider';
import vFilter from '../widget/search_filter';
import vJudgeTable from '../widget/judge_table';
import vPage from '../widget/pagination';
import vMessage from '../widget/message_modal';
import vToast from '../widget/toast';

import './livehistory.less';

import API from '../config/requests.js';
import route  from '../config/pages.js';
import  loginfn from '../static/js/loginPart.js';

var vm = new Vue({
    el: '#home',
    data: {
        loginData: {
            name: 'cuihonglei',
            loginoutlink: API.rdGET
        },
        userInfo: {
            waterimg: {
                name: '',
                url: '',
                watername: ''
            }
        },
        sliderData: route.selectPage({"name": "历史直播"}),
        filterStatusList: ['全部', '未审核', '已通过', '未通过', '已直播', '未开播'],
        currentPage: 1,
        totalPage: 20,
        toastShow: false,
        toastStatus: 0
    },
    ready: function () {
        //测试弹出框部分代码
        // let _this = this;
        // setTimeout(function () {
        //     _this.toastShow = true;
        //     _this.toastStatus = 1
        // }, 3000);
        // setTimeout(function () {
        //     _this.toastShow = false;
        // }, 10000);
    },
    events: {
        //翻页事件
        changePage (newPage) {
            this.currentPage = newPage;
        },
        openMessageModal (id) {
            console.log('开盒事件在父组件被触发，id是' + id);
            this.$broadcast('openMessageModal', id);
        }
    },
    methods: {
        handleCloseToast () {
            this.toastShow = false;
        }
    },
    components: {
        vTop,
        vSlider,
        vFilter,
        vJudgeTable,
        vPage,
        vMessage,
        vToast
    }
});