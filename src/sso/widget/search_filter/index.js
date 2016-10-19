/**
 * Created by lihuanyu on 2016/9/26.
 */

// Lib
import 'jquery';
import Vue from 'vue';
import VueTouch from 'vue/vue-touch.js';
import vSelect from "vue-select"


import './index.less';

export default {
    template: require('./index.tpl.html'),
    props: {
        title: {
            type: String,
            default: '申请列表'
        },
        select1Name: {
            type: String,
            default: '主播'
        },
        selected1: {
            default: null
        },
        options1: {
            type: Array,
        },
        select2Name: {
            type: String,
            default: '位置'
        },
        selected2: {
            default: null
        },
        options2: {
            type: Array,
        },
        statusList: {
            type: Array,
            default: () => ['全部', '未审核', '已通过', '未通过']
        }
    },
    data() {
        return {

        }
    },
    components: {
        vSelect
    }
}