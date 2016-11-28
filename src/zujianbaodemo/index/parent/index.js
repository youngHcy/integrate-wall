/**
 * @file 父组件示例
 */

import Vue from 'vue';

import VueComponentChild from '../child';

export default Vue.extend({
    template:   require('./index.tpl.html'),
    data: function () {
        return {
            text:   'YongQingDong',
            person: {
                name:   '董永清',
                mail:   'yongqingdong'
            }
        };
    },
    components: {
        // 局部定义组件为指令
        'vc-child': VueComponentChild
    },
    // 声明组件的方法
    methods:    {
        loadMoreList: function () {
        }
    }
});