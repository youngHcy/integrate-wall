/**
 * Created by lihuanyu on 2016/10/10.
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
    props: {
        'applyState': {
            type: Object,
            default: () => ({
                stateCode: 0,
                stateTitle: '待个性化配置审核',
                stateContent: '直播时间：2016-09-09 12:00'
            })
        }
    },
    data () {
        return {

        }
    },
    computed: {

    },
    ready () {
        Bus.$on('showApplyState', data => {
            this.
            console.log(data);
        })
    }
}