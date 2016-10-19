/**
 * by cuihonglei 20160903
 */

// Lib
import 'jquery';

import Vue from 'vue';


import './index.less';

export default{
	template: require('./index.tpl.html'),
    props: {
         sliderData:{
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