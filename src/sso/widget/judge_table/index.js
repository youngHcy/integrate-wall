/**
 * Created by lihuanyu on 2016/9/26.
 */

// Lib
import 'jquery';
import Vue from 'vue';

import API from '../../config/requests.js';

import './index.less';

export default {
    template: require('./index.tpl.html'),
    data () {
        return {
            messageList: []
        }
    },
    computed: {

    },
    methods: {
        liveStatusMessage (liveStatusCode) {
            // console.log(liveStatusCode)
            switch (liveStatusCode) {
                case 0:
                    return '审核通过';
                    break;
                case 1:
                    return '未审核';
                    break;
                case 2:
                    return 'UE审核不通过';
                    break;
                case 3:
                    return 'PM审核不通过';
                    break;
                default:
                    return '未知错误';
            }
        },
        getTableData () {
            var _this = this;
            $.ajax({
                url: API.judgeTableList,
                method: 'GET',
                success (res) {
                    console.log(res);
                    if (res.status === 0) {
                        _this.messageList = res.data;
                    }
                }
            })
        },
        openDetail (e) {
            if ($(e.target).data('judgeid')) {
                let jid = $(e.target).data('judgeid');
                // console.log($(e.target).data('judgeid'));
                this.$dispatch('openMessageModal', jid);
            }
        }
    },
    ready () {
        this.getTableData();
    }
}