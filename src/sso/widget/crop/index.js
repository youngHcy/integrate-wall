
import Vue from 'vue';


import $ from "jquery";

//console.log(croppie)
import './index.less';

export default{
	template: require('./index.tpl.html'),

    props: {
         sliderData:{
            type: Object,
            required: false
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
