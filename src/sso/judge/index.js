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
import vJudgePanel from '../widget/judge_panel';

import './index.less';

import API from '../config/requests.js';
import route  from '../config/pages.js';
import  loginfn from '../static/js/loginPart.js';

var vm = new Vue({
    el: '#home',
    ready: function () {

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
    methods: {},
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
        sliderData: route.selectPage({"name": "个性化审批"}),
        currentPage: 1,
        totalPage: 20,
    },
    components: {
        vTop,
        vSlider,
        vFilter,
        vJudgeTable,
        vPage,
        vMessage,
        vJudgePanel
    }
});