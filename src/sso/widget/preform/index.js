/**
 * by cuihonglei 20160903
 */

'use strict';

import Vue from 'vue';
import 'jquery';

import './index.less';

import 'plugin/form.js';
import 'plugin/validate.js';
import 'plugin/messages_zh.js';

import Bus from '../../static/event_bus/bus';

import API from '../../config/requests';


var urldata = '';
var postlock = true; //提交后加锁


export default {
    template: require('./index.tpl.html'),
    props: {
        userInfo: {
            type: Object,
            default: {}
        },
    },
    beforeCompile: function () {

    },
    data () {
        return {}
    },
    ready: function () {
        let _this = this;
    },
    methods: {
        _init: function () {

        },
        readFile (result, target) {

            var file = target;
            // console.log(file.type);
            if (/image\/\w+/.test(file.type)) {
                var _size = 200 * 1024;
                if (_size < file.size) {
                    Bus.openToast(2, '请确保图片不大于200K');
                    $('#file_input').val(null);
                    return false;
                }
            }else if (/\w+\/mov/.test(file.type)) {
                var _size = 10 * 1024 * 1024;
                if (_size < file.size) {
                    Bus.openToast(2, '请确保视频不大于20M');
                    $('#file_input').val(null);
                    return false;
                }
            }else {
                Bus.openToast(2, '请确保文件为图像/视频类型');
                $('#file_input').val(null);
                return false;
            }

            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                if (/video/.test(file.type)) {
                    result.find('img').attr("src", "");
                    result.find('img').attr("alt", "这是视频呢");
                } else {
                    result.find('img').attr("src", this.result);
                }
            };
            return true;
        },
        setBlogrollImageName2: function (basicfile) {
            var _target = $(basicfile.target).parent("form");
            var _this = this;

            if (typeof FileReader === 'undefined') {
                result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
                basicfile.target.setAttribute('disabled', 'disabled');
            } else {
                var fileStatus = this.readFile(_target, basicfile.target.files[0]);
                if (!fileStatus) return false;

                _target.parent().find(".foreimg").html($(basicfile.target).val() + "图片大小=" + parseFloat(basicfile.target.files[0].size / 1024) + 'KB');
                _target.find(".s_btn").click(function () {
                    _this.uploadImg2(_target)
                });
                _target.find(".s_btn").trigger("click");
            }

        },
        uploadImg2: function (formid) {
            var _this = this;
            if (postlock) {

                postlock = false;
            } else {

                return false
            }
            formid.submit(function (event) {

                event.preventDefault();
                formid.ajaxSubmit({
                    url: API.upImg,
                    type: 'POST',
                    dataType: 'json',
                    success: function (data) {
                        postlock = true;
                        if (data.status == 0) {

                            var urldata = data.data.filename || data.data.vodmediaid;
                            if (data.data.filename) {

                                $(".getdataurl").html(urldata).addClass("hide");
                                $(".getdataurl").attr("data-type", "filename");

                            } else {

                                $(".getdataurl").html(urldata).addClass("hide");
                                $(".getdataurl").attr("data-type", "vodmediaid");
                            }


                            // alert("上传成功")
                            let toastCtrl = {
                                msg: '上传成功！',
                                status: 1,
                                isShow: true,
                                isTiming: true
                            };
                            Bus.$emit('openToast', toastCtrl);
                        } else {
                            // alert('上传失败');
                            let toastCtrl = {
                                msg: '上传失败！',
                                status: 2,
                                isShow: true,
                                isTiming: true
                            };
                            Bus.$emit('openToast', toastCtrl);
                        }
                    },
                    error: function () {
                        // alert("网络错误");
                        let toastCtrl = {
                            msg: '网络错误！',
                            status: 2,
                            isShow: true,
                            isTiming: true
                        };
                        Bus.$emit('openToast', toastCtrl);
                    }
                });
            });

        }
    }
}