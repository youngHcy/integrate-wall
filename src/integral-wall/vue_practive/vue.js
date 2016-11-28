/**
 * Created by tonggang on 2016/11/17.
 */

import Vue from 'vue'
Vue.component('my-component',{
    data:function(){
        return {a:1}
    }
}
)
var app=new Vue({
    el:'#app'
});

