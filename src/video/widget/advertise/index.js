/**
 * Created by lihuanyu on 2016/9/18.
 */

import './index.less';

export default {
    template: require('./index.tpl.html'),
    data () {
        return {
            open: true
        }
    },
    methods: {
        closeAdvertise () {
            this.open = false;
        }
    }
}