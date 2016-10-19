/**
 * @file 直播页面
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
            onNoLiveStream: false
        }
    },
    ready () {
        let _this = this;

        var video = this.$parent.userData.video;
        //console.log(video.pull_url);

        //如果有封面图，显示封面图，如果没有，显示预览视频的封面图
        playerConfig.image = video.cover === '' ? video.force_cover : video.cover;

        //计算视频宽度
        var base = parseFloat(document.querySelector('html').style.fontSize);
        var playerHeight = base * 90 / 16;
        playerConfig.height = playerHeight;

        // 靠body的padding-top把视频放到中间偏上50像素的地方
        var fullHeight = document.documentElement.clientHeight;
        var marginTopHeight = (fullHeight - playerHeight)/2 - 50;
        $('body').css('padding-top',marginTopHeight);
        $('#player-control').css('margin-top', -playerHeight);
        $('#player-control').css('height', playerHeight);

        playerConfig.file = video.pull_url;
        playerConfig.controls = 'none';
        this.player = cyberplayer('playercontainer').setup(playerConfig);


        this.player.onNoLiveStream(function(){
            _this.onNoLiveStream = true;
        });

        this.player.onAlive(function(){
            _this.onNoLiveStream = false;
        });
    },
    methods: {
        playerControl () {
            this.player.play();
        }
    }
};