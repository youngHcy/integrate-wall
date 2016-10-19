/**
 * @file 回放页面
 * Created by lihuanyu on 2016/9/5.
 */

'use strict';

import Vue from 'vue';
import 'zepto';
import './index.less';

import playerConfig from '../../config/player.js';

export default {
    template: require('./index.tpl.html'),
    data () {
        return {
            player: null,
            image: null,
        }
    },
    ready () {

        var video = this.$parent.userData.video;
        // console.log(video.review_url);

        //计算视频宽度
        var base = parseFloat(document.querySelector('html').style.fontSize);
        var playerHeight = base * 90 / 16;
        playerConfig.height = playerHeight;

        // 靠body的padding-top把视频放到中间偏上50像素的地方
        var fullHeight = document.documentElement.clientHeight;
        var marginTopHeight = (fullHeight - playerHeight)/2 - 50;
        $('body').css('padding-top',marginTopHeight);

        playerConfig.image = video.review_cover;
        playerConfig.file = video.review_url;
        this.player = cyberplayer('playercontainer').setup(playerConfig);

    },
    methods: {

    }
};
