/**
 * by cuihonglei 20160903
 */

// Lib
import 'jquery';
import Vue from 'vue';

import './index.less';

import eventBus from '../../static/event_bus/bus';

import API from '../../config/requests';

export default {
    template: require('./index.tpl.html'),
    props: {
        modal: {
            status: 1,
            title: "编辑"
        },
        videoData: {
            "zanbutton": {
                name: "",
                url: ''
            },
            "zanimg": [],
            "visitorimg": [],
            "waterimglist": [],
            "waterimg": {},
            "livetime": "",
            "title": "",
            "roomid": "",
            "alias": "",
            "fore": {
                "type": "",
                "url": ""
            }

        }
    },
    data () {
        return {
            formValidate: {
                btitleErrorMsg: ''
            }
        }
    },
    ready: function () {
        //初始化变量

        //  $(".bs-example-modal-lg").modal('show')
        //$(".bs-example-modal-sm").modal('show')


        //TODO: 修改表单验证逻辑
        this.$watch('videoData', function () {
            let bTitleReg = /^[\u4e00-\u9fa5]{0,3}$/;
            // console.log(bTitleReg.test(this.btitle));
            if (bTitleReg.test(this.videoData.btitle)) {
                this.formValidate.btitleErrorMsg = '';
            } else {
                this.formValidate.btitleErrorMsg = '请输入三个以内汉字';
            }
        });

    },
    methods: {
        _init: function () {


        },
        resetModle: function () {
            var _this = this;

            $(".bs-example-modal-lg").on("hidden.bs.modal", function () {
                _this.$dispatch("_changeModal");
            })
        },
        timeFormat: function (time) {
            var date = new Date(time * 1000);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            return Y + M + D + h + m + s
        },
        setBlogrollImageName: function (basicfile, type) {

            var _target = $(basicfile.target).parents("form");


            var _this = this;

            _target.find(".s_btn").click(function () {

                _this.uploadImg(_target, type)
            });

            _target.find(".s_btn").trigger("click");

            /// (basicfile.target).parent().find("img").attr(src,basicfile.target.value);

        },
        uploadImg: function (formid, type) {
            var _this = this;
            formid.submit(function (event) {

                event.preventDefault();
                var _url = API.upImg + '?roomid=' + 123;

                formid.ajaxSubmit({
                    url: _url,
                    type: 'POST',
                    dataType: 'json',
                    success: function (data) {

                        if (data.status == 0) {
                            formid.find(".p_name").attr('value', data.data.filename);
                            formid.find("img").attr('src', data.data.url);
                            _this.$dispatch("reflesh", roomid);
                        }
                    },
                    error: function () {
                        // alert("网络错误");
                        eventBus.openToast(2, '网络错误！');
                    }
                });


            });

        },
        specdata: function () {
            var data = {
                zanbutton: $("#buttonform").find(".p_name").val(),
                watername: $("#waterform").find("option:selected").data("name"),
                bico:$("#fanicoform").find(".p_name").val(),
                btitle: this.videoData.btitle,
                blink: this.videoData.blink
            };

            data.zanimg = [];
            data.visitorimg = [];

            $(".thumbsUpBox .imgbox").each(function () {
                data.zanimg.push($(this).find(".p_name").val())
            });

            var _this = this;
            $(".headerbox .imgbox").each(function () {
                data.visitorimg.push($(this).find(".p_name").val())
            });

            /* data.title = '22' ;  //?
             data.starttime='2';  //?
             data.getdataurl="22"; //?*/

            return data;
        },
        changeModal: function () {

            this.$dispatch("_changeModal",1);

        },
        allbtn: function (roomid) {
            var _data = {};
            var _this = this;
            _data = $.extend(_data, _this.specdata());

            $.ajax({
                url: API.editRoom + "?roomid=" + roomid,
                type: 'POST',
                async: false,
                dataType: 'json',
                data: _data,
                success: function (data) {
                    if (data.status == 0) {
                        //_this.$dispatch("reload");
                        // alert("提交成功");
                        eventBus.openToast(1, '提交成功');
                        _this.$dispatch("reflesh", roomid);
                        _this.$dispatch("changePage", 'reload');

                    } else {
                        // alert("提交fail");
                        eventBus.openToast(2, '提交fail');
                    }
                },
                error: function () {
                    // alert("网络错误")
                    eventBus.openToast(2, '网络错误');
                }

            });
            return false
        }

    }
}