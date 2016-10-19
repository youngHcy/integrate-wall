/**
 * @file 直播预览页
 * Created by lihuanyu on 2016/9/5.
 */

'use strict';

import Vue from 'vue';
import 'zepto';
import './index.less';

import '../../widget/video';

import playerConfig from '../../config/player.js';

export default {
    template: require('./index.tpl.html'),
    data () {
        return {
            player: null,
            picUrl: '',
            hasCover: false
            // image: null,
            // anchorTitle: '糯米电影官方直播',
            // anchorIntro: '最热的明星介绍不要错过'
        }
    },
    ready () {

        // var host = this.$parent.userData.host;
        // this.image = host.image;
        // this.anchorTitle = host.name;

        var video = this.$parent.userData.video;
        //console.log(video.force_url);

        if (video.cover !== '') {
            this.hasCover = true;
            console.log(video.cover);
            this.picUrl = video.cover;
        }else {

            //计算视频宽度
            var base = parseFloat(document.querySelector('html').style.fontSize);
            var playerHeight = base * 90 / 16;
            playerConfig.height = playerHeight;

            // 靠body的padding-top把视频放到中间偏上50像素的地方
            var fullHeight = document.documentElement.clientHeight;
            var marginTopHeight = (fullHeight - playerHeight)/2 - 50;
            $('body').css('padding-top',marginTopHeight);

            playerConfig.file = video.force_url;
            playerConfig.image = video.force_cover;
            this.player = cyberplayer('playercontainer').setup(playerConfig);
        }

        // var _this = this;
        // $.ajax({
        //     method: 'get',
        //     url: requestConfig.videoConfigApi,
        //     success: function (res) {
        //         //视频播放器
        //         _this.player = cyberplayer('playercontainer').setup(res);
        //     },
        //     error: function (a,b,c) {
        //         console.log('获取播放器初始化配置失败。' + a + b + c);
        //     }
        // });
    },
    methods: {
        // stopPlay: function () {
        //     this.player.play();
        // }
    }
};
