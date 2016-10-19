/**
 * Created by lihuanyu on 2016/10/06.
 * @file: 弹出提示组件，有三类提示：loading, success, warning。使用方法，在父组件中设置props: toast-show, toast-status, toastMessage，分别代表是否显示弹窗，
 */

// Lib
import 'jquery';
import 'bootstrap'

import Vue from 'vue';
import VueTouch from 'vue/vue-touch.js';
import './index.less';

import Bus from '../../static/event_bus/bus';
import API from '../../config/requests';

export default {
    template: require('./index.tpl.html'),
    props: {
        toastCtrl: {
            type: Object,
            default: () => ({
                msg: 'Loading',
                isShow: false,
                isTiming: true,
                status: 0
            })
        }
    },
    data () {
        return {

        }
    },
    ready () {
        let _this = this;
        // this.$watch('toastStatus', function () {
        //     _this.closeIfNotLoading();
        // });
    },
    methods: {
        // //如果不是loading状态，三秒后关闭toast
        // closeIfNotLoading () {
        //     if (this.toastStatus !== 0) {
        //         let _this = this;
        //         setTimeout(function () {
        //             _this.closeToast();
        //         }, 3000);
        //     }
        // },
        //立即关闭toast，给右上角的关闭按钮用
        closeToast () {
            // this.$emit('close-toast');
            Bus.$emit('closeToast');
        }
    }
}