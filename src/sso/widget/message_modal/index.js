/**
 * Created by lihuanyu on 2016/9/27.
 */

// Lib
import 'jquery';
import 'bootstrap';
import Vue from 'vue';

import API from '../../config/requests.js';
import Bus from '../../static/event_bus/bus';

import './index.less';

export default {
    template: require('./index.tpl.html'),
    data () {
        return {
            id: null,
            modalData: {},
        }
    },
    computed: {

    },
    props: {
        title: {
            type: String,
            default: '申请列表'
        }
    },
    ready () {

    },
    events: {
        openMessageModal (id) {
            console.log('开盒事件在子组件被触发，id是' + id);
            this.id = id;
            this.getModalMessage();
        }
    },
    methods: {
        getModalMessage () {
            let _this = this;
            $.ajax({
                url: API.judgeMessage,
                method: 'GET',
                success (res) {
                    console.log(res);
                    if (res.status === 0){
                        _this.modalData = res.data;
                        Bus.$emit('showApplyState', res.data.applyState);
                        $('#myModal').modal('show');
                    }
                }
            });
        }
    }
}