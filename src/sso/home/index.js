/**
 *  by cuihonglei 20160903
 *  1 登录 分测试和  线上的环境  需要手动维护logindata
 *  2
 */

'use strict';

import 'jquery';
import 'bootstrap';

//全局调用
import 'bootstrap/dist/css/bootstrap.css';
import '../static/js/datetimepicker/css/bootstrap-datetimepicker.css';
import '../static/js/datetimepicker/js/bootstrap-datetimepicker.js';
import '../static/js/datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js';

import Vue from 'vue';
import vTop from '../widget/top';
import vSlider from '../widget/slider';
import vPreform from '../widget/preform';
import vSpecpart from '../widget/spec_part';
import vToast from '../widget/toast';
import Bus from '../static/event_bus/bus';

import './index.less';

import route  from '../config/pages.js';
import API from '../config/requests.js';

// import ''
var page_index = location.href;

var vm = new Vue({
    el: '#home',
    ready: function () {
        let _this = this;
        this.getdata();
        this.change();

        Bus.$on('openToast', function (toastCtrl) {
            _this.toastCtrl = toastCtrl;
            if (toastCtrl.isTiming === true) {
                setTimeout(function () {
                    _this.toastCtrl.isShow = false;
                }, 3000);
            }
        });
        Bus.$on('closeToast', _this.closeToast);
    },
    events: {
        reload: function () {
            $('.radio-box input').removeAttr("checked");
            $(".starttime").val('');
            $(".foreimg").html('');
            this.getdata();
        },
        changePage: function (newPage) {
            this.currentPage = newPage;
        }
    },
    methods: {
        change () {
            $("#waterform").change(function () {
                var url = $(this).find("option:selected").data('url');
                vm.waterimg = url;
            })
        },
        getroom (id) {
            $.ajax({
                url: API.specform,
                type: 'GET',
                success: function (data) {
                    // console.log(data);
                    if (data.status == 0) {
                        vm.speclist = data.data;
                        var _arr = [];
                        for (var i  in data.data.waterimglist) {
                            _arr.push(i)
                        }
                        setTimeout(function () {
                            vm.waterimg = data.data.waterimglist[_arr[0]].url;
                        }, 1000)
                    }
                },
                error: function () {

                }
            });
        },
        getdata () {
            var _this = this;
            $.ajax({
                url: API.getUserInfo,

                success: function (data) {
                    if (data.status == 0) {
                        // console.log(data.data);
                        vm.userInfo = data.data;

                        _this.getroom(111)
                    }

                },
                error: function () {

                }
            });
        },
        closeToast () {
            this.toastCtrl.isShow = false;
        }
    },
    data: function () {
        var path =
            location.pathname.split("page/video_sso")[0] + "page/video_sso";
        return {
            loginData: {
                index: page_index,
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
            speclist: {
                "zanbutton": {},
                "zanimg": [],
                "visitorimg": [],
                "waterimglist": {},
                fanico: {}
            },
            waterimg: '',
            sliderData: route.selectPage({"name": "创建直播预告"}),
            toastCtrl: {
                msg: 'Loading...',
                isShow: false,
                isTiming: true,
                status: 0
            }
        }
    },
    components: {
        vTop,
        vSlider,
        vPreform,
        vSpecpart,
        vToast
    }
});