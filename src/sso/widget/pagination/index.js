/**
 * Created by lihuanyu on 2016/9/26.
 */

// Lib
import 'jquery';
import Vue from 'vue';
import Page from './page';

import './index.less';

export default {
    template: require('./index.tpl.html'),
    data () {
        return {
            page: null,
            pageModel: {

            }
        }
    },
    props: {
        currentPage: {
            type: Number,
            default: 1,
            require: true
        },
        totalPage: {
            type: Number,
            default: 1,
            require: true
        }
    },
    computed: {
        getPageModel () {
            return Page({
                pages: this.totalPage, //通过后台拿到的总页数
                curr: this.currentPage, //当前页
                last: this.totalPage,
            });
        }
    },
    ready () {

    },
    methods: {
        changePage (newPage) {
            // console.log(newPage);
            if (newPage != this.currentPage) {
                this.$dispatch('changePage', newPage);
            }
        }
    }
}
