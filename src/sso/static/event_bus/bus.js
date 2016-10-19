/**
 * Created by lihuanyu on 2016/10/10.
 */

import Vue from 'vue';

export default new Vue({

    methods: {
        openToast (status, msg, isShow, isTiming) {
            let toastCtrl = {
                msg: msg || 'Loading',
                status: status || 0,
                isShow: isShow || true,
                isTiming: isTiming || true
            };
            // console.log(toastCtrl);
            this.$emit('openToast', toastCtrl);
        }
    }

});