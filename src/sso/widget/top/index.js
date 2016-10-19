/**
 * by cuihonglei 20160903
 */

// Lib
import 'jquery';
import Vue from 'vue';
import VueTouch from 'vue/vue-touch.js';

import eventBus from '../../static/event_bus/bus';
import API from '../../config/requests';

Vue.use(VueTouch);

import './index.less';

export default{
	template: require('./index.tpl.html'),
    props: {
         loginData:{
            type: Object,
            required: true
        }
    },
    data () {
        return {
            uname: '未登录',
            head_pic:'',
            toastCtrl: {
                msg: 'Loading...',
                isShow: false,
                isTiming: true,
                status: 0
            }
        }
    },
    ready () {
        let _this = this;
        $.ajax({
            url: API.isLogin,
            success (res) {
                // console.log(res);
                if (res.status === 0) {
                    //已登陆状态
                    // alert('已登陆');

                    _this.uname = res.uname;
                    _this.head_pic = res.head_pic;
                    eventBus.$emit('alreadyLogin', true);
                }else {
                    //未登录状态，跳转页面
                    eventBus.openToast(2, '错误，未登陆!');

                    setTimeout(function () {
                        //TODO: 改到登陆页去
                         window.location.href = '/admin/login/login.html'
                    }, 3000);
                    _this.uname = '未登录';
                }
            },
            error  () {
                eventBus.openToast(2, '网络或服务器错误');

                setTimeout(function () {
                    //TODO: 改到登陆页去
                    // window.location.href = 'http://www.baidu.com';
                }, 3000);
                _this.uname = '未登录';
            }
        });

        //初始化变量
       // this._init();
    },
    methods: {
        _init: function() {

        }

    }
}