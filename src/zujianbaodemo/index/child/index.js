/**
 * @file 子组件示例
 */

import Vue from 'vue';


export default Vue.extend({
    template:   require('./index.tpl.html'),
    data: function () {
        return {
            cityList:   []
        };
    },
    // 继承属性：1. 通过属性前+":"标识传递数据；2. 可以更改标识名称：person --> boy
    props:  [
        'text',
        'boy'
    ],
    // 插入到DOM树中之后
    attached: function () {
        $.ajax({
            url:            requestConfig.cityList,
            type:           'POST',
            data:           {
                regionId:   '1234567890'
            }
        }).then((function (res) {
            if(res.errno === 0){
                this.$set('cityList', res.data);
            }
        }).bind(this));
    }
});