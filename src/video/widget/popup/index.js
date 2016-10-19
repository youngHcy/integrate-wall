/**
 * Created by lihuanyu on 2016/9/9.
 */

'use strict';
import Vue from 'vue';
import 'zepto';
import './index.less';

export default {
    template: require('./index.tpl.html'),
    props: ['isPop'],
    computed: {

    },
    data () {
        return {
            popUpClass: '',
            popCloseClass: '.hw-overlay-popdown'
        }
    },
    ready () {

        //验证是否父组件是否向子组件发送了数据
        // var _this = this;
        // function tellPop() {
        //     console.log(_this.isPop);
        // }
        // setInterval(tellPop, 2000);

    },
    methods: {
        cancelPop () {
            this.isPop = false;
        }
    }
}