/**
 * by cuihonglei 20160903
 */

'use strict';

import Vue from 'vue';
import 'jquery';

import './index.less';

import 'plugin/form.js';
import  util from  '../../static/util.js';
import eventBus from '../../static/event_bus/bus'

import API from '../../config/requests';


/**
 * 对对象进行编码
 * @param obj
 * @returns {*}
 */
function encodeObject(obj) {
    function dotSerialize(obj, keyPrefix, list) {
        list = list || [];
        keyPrefix = keyPrefix || '';

        if (typeof obj === 'number' || typeof obj === 'string' || typeof obj === 'boolean' || obj instanceof Date) {
            list.push({
                k: keyPrefix,
                v: obj
            });
        } else if (obj instanceof Array) {
            for (var i = 0; i < obj.length; i++) {
                var prefix = keyPrefix === '' ? '[' + i + ']' : (keyPrefix + '[' + i + ']');
                dotSerialize(obj[i], prefix, list);
            }
        } else if (obj instanceof Object) {
            for (var k in obj) {
                var v = obj[k];
                var prefix = keyPrefix === '' ? k : (keyPrefix + '.' + k);
                dotSerialize(v, prefix, list);
            }
        }

        return list;
    }

    function encode(obj) {
        var list = dotSerialize(obj);
        var listEntry = [];

        for (var i = 0; i < list.length; i++) {
            // 将值进行编码
            var encodedValue = null;
            if (list[i].v === null || list[i].v === undefined) {
                // 如果是null之类的，传递空字符串
                encodedValue = '';
            } else {
                encodedValue = encodeURIComponent(list[i].v);
            }
            var entry = list[i].k + '=' + encodedValue;
            listEntry.push(entry);
        }

        return listEntry.join('&');
    }

    return encode(obj);
}

export default {
    template: require('./index.tpl.html'),
    props: {
        roomlist: {
            list: {},
            roomdata: {}

        },
        waterimg: ""

    },
    ready: function () {
        //初始化变量
        this._init();

    },
    methods: {

        _init: function () {
            this.allbtn()
        },

        setBlogrollImageName: function (basicfile, type) {

            var _target = $(basicfile.target).parent("form");


            var _this = this;

            _target.find(".s_btn").click(function () {
                _this.uploadImg(_target, type)
            });

            _target.find(".s_btn").trigger("click");

            /// (basicfile.target).parent().find("img").attr(src,basicfile.target.value);

        },
        uploadImg: function (formid, type) {

            formid.submit(function (event) {

                event.preventDefault();
                var _url = API.upImg + '?roomid=' + $("#selectroom").find("option:selected").val();

                formid.ajaxSubmit({
                    url: _url,
                    type: 'POST',
                    dataType: 'json',
                    success: function (data) {

                        if (data.status == 0) {
                            formid.find(".p_name").attr('value', data.data.filename);
                            formid.find("img").attr('src', data.data.url);
                        }
                    },
                    error: function () {
                        // alert("网络错误");
                        eventBus.openToast(2, '网络错误！');
                    }
                });


            });

        },
        allbtn: function () {

            $(".submitLab").click(function () {

                var data = {
                    zanbutton: $("#buttonform").find(".p_name").val(),
                    waterimg: $("#waterform").find("option:selected").data("name"),
                    watername: $("#waterform").find("option:selected").data("watername")
                };

                data.zanimg = [];
                data.visitorimg = [];

                $(".thumbsUpBox li").each(function () {
                    data.zanimg.push($(this).find(".p_name").val())
                });


                $(".headerbox li").each(function () {
                    data.visitorimg.push($(this).find(".p_name").val())
                });


                $.ajax({
                    url: API.personal + '?roomid=' + $("#selectroom").find("option:selected").val(),
                    type: "POST",
                    data: encodeObject(data),
                    dataType: 'json',
                    /*traditional: true,*/
                    success: function (data) {
                        if (data.status == 0) {
                            // alert("提交成功");
                            eventBus.openToast(1, '提交成功！');
                        }
                    },
                    error: function () {
                        // alert("提交成功ok");
                        eventBus.openToast(2, '提交失败，服务器端错误！');
                    }
                });
            })
        }


    }
}