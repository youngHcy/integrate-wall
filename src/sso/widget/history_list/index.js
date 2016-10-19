/**
 * by cuihonglei 20160921
 */

// Lib

import 'jquery';
import 'bootstrap';
import Vue from 'vue';
import VueTouch from 'vue/vue-touch.js';
import eventBus from '../../static/event_bus/bus';

import './index.less';
import 'plugin/form.js';
import Clipboard from 'clipboard';

import API from '../../config/requests';


export default {
    template: require('./index.tpl.html'),
    props: {
        historyList: {
            pagelist: [],
            pagedata: '',
            type: Object,
            required: true
        },
        pageActive: {
            index: 0,
            active: true
        }
    },
    ready: function () {
        //初始化变量
        this._init();

        new Clipboard('.btn-copy');
    },

    methods: {
        _init: function () {
        },
        timeFormat: function (time) {
            var date = new Date(time * 1000);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            return Y + M + D + h + m + s
        },
        gopage: function (index) {
            this.$dispatch("gonewpage", [index - 1]);
        },
        getdata: function (roomid) {

            this.$dispatch("getroomdata", [roomid]);

        },
        copy () {
            eventBus.openToast(1, '复制成功');
        }
    }
}