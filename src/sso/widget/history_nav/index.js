/**
 * by cuihonglei 20160921
 */

// Lib
import 'jquery';
import Vue from 'vue';
import VueTouch from 'vue/vue-touch.js';



import './index.less';

export default{
	template: require('./index.tpl.html'),
    props: {
         historyNav:{
            type: Object,
            required: true
        }
    },
    ready: function(){
        //初始化变量
       // this._init();
    },
    methods: {
        _init: function() {

        }

    }
}