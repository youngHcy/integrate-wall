/**
 * Created by lihuanyu on 2016/10/8.
 */

// Lib
import 'jquery';
import 'bootstrap';
import Vue from 'vue';

import API from '../../config/requests.js';

import './index.less';

export default {
    template: require('./index.tpl.html'),
    data () {
        return {
            isCanSubmit: false,
            judgeApply: null,
            rejectReason: ''
        }
    },
    computed: {
        getIsCanSubmit () {
            if (this.judgeApply === 'accept' || (this.judgeApply === 'reject' && this.rejectReason !== '')){
                return true;
            }else {
                return false;
            }
        }
    }
}