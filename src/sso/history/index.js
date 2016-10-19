/**
 *  by cuihonglei 20160921
 *  1
 *  2
 */

'use strict';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

//全局调用
import Vue from 'vue';
import vTop from '../widget/top';
import vSlider from '../widget/slider';
import vHistorynav from '../widget/history_nav';
import vHistorylist from '../widget/history_list';
import vDialog   from '../widget/detail_dialog';
import vPage from '../widget/pagination';
import vToast from '../widget/toast';
import eventBus from '../static/event_bus/bus'

import './index.less';

import API from '../config/requests.js';
import route  from '../config/pages.js';

// import ''
var page_index = location.href;

var vm = new Vue({
    el: '#home',
    ready: function () {
        let _this = this;

        this.getdata(1);
        this.changeselect();

        //toast
        eventBus.$on('openToast', function (toastCtrl) {
            _this.toastCtrl = toastCtrl;
            if (toastCtrl.isTiming === true) {
                setTimeout(function () {
                    _this.toastCtrl.isShow = false;
                }, 3000);
            }
        });
        eventBus.$on('closeToast', _this.closeToast);

    },
    computed: {},
    events: {
        changePage(newPage) {
            if (newPage == 'reload') {
                this.currentPage = this.currentPage;
            } else {
                this.currentPage = newPage;
            }
            this.getdata(this.currentPage);
        },
        reflesh(roomid){
            // this.getroomdata(roomid);
        },
        _changeModal: function (status) {

            if (status) {
                vm.modal.status = vm.modal.status ? false : true;
            } else {
                vm.modal.status = true;
            }


        },
        gonewpage: function (index) {

        },
        getroomdata: function (roomid) {
            var _this = this;

            $.ajax({
                url: API.historyInfo,
                type: 'POST',
                dataType: 'json',
                data: {
                    roomid: roomid[0]
                },
                success: function (data) {
                    if (data.status == 0) {
                        // console.log(data)
                        //_this.$dispatch("reload");
                        vm.videoData = data.data;

                    } else {
                        // alert("提交fail");
                        eventBus.openToast(2, '提交fail!');
                    }
                },
                error: function () {
                    // alert("网络错误")
                    eventBus.openToast(2, '网络错误');
                }

            });
        },
    },
    methods: {
        changeselect: function () {
            $("body").on('change', "#waterform", function () {
                var url = $(this).find("option:selected").data('url');
                vm.videoData.waterimg.url = url;
            })
        },
        getdata: function (pageindex) {
            $.ajax({
                url: API.historylist + "?pageindex=" + pageindex + "&pagenum=10&status=4", // 4 审核通过的
                success: function (data) {
                    if (data.status == 0) {
                        vm.totalPage = parseInt(data.data.pagedata);
                        vm.historyList = data.data;
                    }
                },
                error: function () {

                }
            })
        },
        closeToast () {
            this.toastCtrl.isShow = false;
        }
    },
    data: function () {
        var path =
            location.pathname.split("page/video_sso")[0] + "page/video_sso";

        return {
            modal: {
                status: true,
                title: '编辑'
            },
            currentPage: 1,
            totalPage: 1,
            loginData: {
                index: page_index,
                name: 'cuihonglei',
                loginoutlink: API.rdGET
            },
            historyNav: {
                data: [
                    {title: "未审核", vlue: 0},
                    {title: "已通过", vlue: 1},
                    {title: "未通过", vlue: 2},
                    {title: "已直播", vlue: 4},
                    {title: "未直播", vlue: 3}
                ]
            },
            historyList: {
                pagelist: [],
                pagedata: '10'
            },
            userInfo: {
                waterimg: {
                    name: '',
                    url: '',
                    watername: ''
                }
            },
            sliderData: route.selectPage({"name": "申请记录"}),
            videoData: {
                "zanbutton": {
                    "name": "",
                    "url": ""
                },
                "zanimg": [{
                    "name": "",
                    "url": ""
                }],
                "visitorimg": [{
                    "name": "",
                    "url": ""
                }],
                "waterimglist": [{
                    "name": "",
                    "title": "",
                    "url": ""
                }],
                "waterimg": {
                    "name": "",
                    "url": "",
                    "title": ""
                },
                "livetime": "",
                "title": "",
                "roomid": "",
                "alias": "",
                "fore": {
                    "type": "",
                    "url": ""
                },
                bico: {
                    name: '',
                    url: ''
                }
            },
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
        vHistorynav,
        vHistorylist,
        vDialog,
        vPage,
        vToast
    }
});

