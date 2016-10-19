/**
 * @file 直播结束页面
 * Created by lihuanyu on 2016/9/5.
 */

'use strict';

import Vue from 'vue';
import 'zepto';
import './index.less';

export default {
    template: require('./index.tpl.html'),
    data: () => ({
        errorMsg: '转码中...'
    }),
    events: {
        errorStatus (errormsg) {
            this.errorMsg = errormsg;
        }
    },
    methods: {
        refresh () {
            location.reload();
        }
    }
};