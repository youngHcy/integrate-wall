/**
 * by cuihonglei 20160903
 */

// Lib
import 'jquery';
import Vue from 'vue';

import eventBus from '../../static/event_bus/bus';

import './index.less';

var urldata = '';
var postlock = true; //提交后加锁


import API from '../../config/requests';


var blurfn = function (op, type) {
    if (type == 'agreement') {
        op.change(function () {
            if (!op.val()) {
                op.parents('li').find(".errorInfo").html("必填");
            } else {
                op.parents('li').find(".errorInfo").html("");
            }
        });
        return false
    }
    if (type == 'starttime') {
        op.change(function () {
            if (op.val() == '') {
                op.parents('li').find(".errorInfo").html("必填");
            } else {
                op.parents('li').find(".errorInfo").html("");
            }
        })
    } else {
        op.blur(function () {
            if (op.val() == '') {
                op.parent().find(".errorInfo").html("必填");
                return false
            } else {
                op.parent().find(".errorInfo").html("");
            }
        })
    }
};


var validatefn = function (type, _this) {
    var data = {};
    var status = true;

    for (var i in _this.formValidate) {
        if (_this.formValidate[i] !== '') {
            status = false;
            break;
        }
    }

    if ($("input[name='title']").val() == '') {
        $("input[name='title']").parent().find(".errorInfo").html("必填");
        status = false;
    } else {
        data.title = $("input[name='title']").val();
    }

    if ($(".getdataurl").html() == '') {
        $(".uploading").parent().find(".errorInfo").html("必填");
        status = false;
    } else {
        if ($(".getdataurl").data("type") == "filename") {
            data.filename = $(".getdataurl").html();
        } else {
            data.vodmediaid = $(".getdataurl").html();
        }
    }

    if ($("input[name='starttime']").val() == '') {
        $("input[name='starttime']").parents('li').find(".errorInfo").html("必填");
        status = false;
    } else {
        data.starttime = $("input[name='starttime']").data("time");
    }

    if (!$('input:checkbox[name="agreement"]:checked').val()) {
        $("input[name='agreement']").parents('li').find(".errorInfo").html("必填");
        status = false;
    }

    if (type) {
        return data;
    }
    return status != false;

};


var lock;
export default{
    template: require('./index.tpl.html'),
    data () {
        return {
            btitle: '',
            blink: '',
            formValidate: {
                btitleErrorMsg: '',
                blinkErrorMsg: ''
            }
        }
    },
    props: {
        loginData: {
            index: 11,
            name: 'cuihonglei',
            loginoutlink: 11
        },
        speclist: {
            type: Object,
            default: () => ({
                "zanbutton": {},
                "zanimg": [],
                "visitorimg": [],
                "waterimglist": {},
                "fanico": {}
            })
        },
        waterimg: ''
    },
    ready () {
        //初始化变量
        this._init();
        this.specValidate();

    },
    methods: {
        _init () {
            $(".btn-info").click(function () {
                $(".spec-content").toggleClass("hidden");
            });

            $('.form_datetime').datetimepicker({
                language: 'zh-CN',
                weekStart: 1,
                todayBtn: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 1
            }).on('changeDate', function (ev) {
                var str = ($(this).datetimepicker('getDate') / 1000);
                $("input[name='starttime']").attr('data-time', str);
            });

            blurfn($("input[name='title']"));

            blurfn($("input[name='agreement']"), 'agreement');

            blurfn($("input[name='starttime']"), 'starttime');

        },
        specValidate () {
            //对入口名称的表单验证
            this.$watch('btitle', function () {
                let bTitleReg = /^[\u4e00-\u9fa5]{0,3}$/;
                // console.log(bTitleReg.test(this.btitle));
                if (bTitleReg.test(this.btitle)) {
                    this.formValidate.btitleErrorMsg = '';
                } else {
                    this.formValidate.btitleErrorMsg = '请输入三个以内汉字';
                }
            });
        },
        setBlogrollImageName (basicfile, type) {

            // var _target = $(basicfile.target).parents("form");
            // var _this = this;
            // _target.find(".s_btn").click(function () {
            //     _this.uploadImg(_target, type)
            // });
            // _target.find(".s_btn").trigger("click");

            var _target = $(basicfile.target).parent("form");
            var _this = this;

            if (typeof FileReader === 'undefined') {
                result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
                basicfile.target.setAttribute('disabled', 'disabled');
            } else {

                var fileStatus = _this.readFile(_target, basicfile.target.files[0]);
                if (!fileStatus) return false;
                _target.parent().find(".foreimg").html($(basicfile.target).val() + "图片大小=" + parseFloat(basicfile.target.files[0].size / 1024) + 'KB');
                _target.find(".s_btn").click(function () {
                    _this.uploadImg(_target, type)
                });
                _target.find(".s_btn").trigger("click");
            }

        },
        readFile (result, target) {
            var file = target;
            if (!/image\/\w+/.test(file.type)) {
                // alert("请确保文件为图像类型");
                eventBus.openToast(2, '请确保文件为图像类型');
                return false;
            }
            //TODO：20K？200K？
            var _size = 200 * 1024;
            if (_size < file.size) {
                // alert("请确保文件不大于20M");
                eventBus.openToast(2, '请确保文件不大于200K');
                return false;
            }
            return true;
        },
        uploadImg (formid, type) {
            formid.submit(function (event) {
                event.preventDefault();
                var _url = API.upImg;
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
        specdata () {
            var data = {
                zanbutton: $("#buttonform").find(".p_name").val(),
                watername: $("#waterform").find("option:selected").data("name"),
                btitle: this.btitle,
                blink: this.blink,
                bico: $("#fanicoform").find(".p_name").val()
            };

            data.zanimg = [];
            data.visitorimg = [];

            $(".thumbsUpBox .imgbox").each(function () {

                data.zanimg.push($(this).find(".p_name").val())
            });


            $(".headerbox .imgbox").each(function () {
                console.log($(this).find(".p_name").val());
                data.visitorimg.push($(this).find(".p_name").val())
            });

            return data;
        },
        submitCreate (e) {
            var _data = {};
            var _this = this;
            if (!validatefn(0, this)) {
                eventBus.openToast(2, '请完善内容！');
                return;
            }
            if (validatefn(0, this)) {
                _data = validatefn(1, this);
                if ($(".spec-content").hasClass("hidden") == false) {
                    _data = $.extend(_data, _this.specdata());
                }
            }
            $.ajax({
                url: API.create,
                type: 'POST',
                async: false,
                dataType: 'json',
                data: _data,
                success: function (data) {
                    if (data.status == 0) {
                        eventBus.openToast(1, '提交成功！');
                        setTimeout(function () {
                            window.location.href = '/admin/history/index.html';
                        }, 3000);
                    } else {
                        eventBus.openToast(2, '提交失败');
                        setTimeout(function () {
                            window.location.href = '/admin/home/index.html';
                        }, 3000);
                    }
                },
                error: function (e) {
                    eventBus.openToast(2, '网络错误');
                }
            });
            return false
        }
    }
}